"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseVx: number;
    baseVy: number;
    size: number;
    opacity: number;
    depth: number; // For parallax effect
    scrollInfluence: number; // How much scroll affects this particle
}

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>();
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollVelocity, setScrollVelocity] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef<NodeJS.Timeout>();
    const momentumRef = useRef(0); // For scroll momentum
    const scrollThrottleRef = useRef<NodeJS.Timeout>();
    const targetVelocityRef = useRef(0); // Target velocity for smooth interpolation
    const currentVelocityRef = useRef(0); // Current interpolated velocity

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Throttled scroll detection with smooth velocity interpolation and limits
        const throttledScrollHandler = () => {
            const currentScrollY = window.pageYOffset;
            const rawVelocity = Math.abs(currentScrollY - lastScrollY.current);
            const cappedVelocity = Math.min(rawVelocity, 100); // Cap raw scroll velocity to prevent extreme values
            const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';

            // Set target velocity for smooth interpolation
            targetVelocityRef.current = cappedVelocity;

            setIsScrolling(true);
            setScrollVelocity(rawVelocity);
            setScrollDirection(direction);
            momentumRef.current = cappedVelocity * 0.15; // Increased momentum for smoother decay
            lastScrollY.current = currentScrollY;

            // Clear existing timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Set scrolling to false after scrolling stops with longer timeout for momentum
            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
                setScrollVelocity(0);
                targetVelocityRef.current = 0; // Reset target velocity
            }, 250);
        };

        // Throttled scroll handler to reduce frequency
        const handleScroll = () => {
            if (!scrollThrottleRef.current) {
                throttledScrollHandler();
                scrollThrottleRef.current = setTimeout(() => {
                    scrollThrottleRef.current = undefined;
                }, 16); // ~60fps throttling
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initialize particles with enhanced properties
        const initParticles = () => {
            const particles: Particle[] = [];
            const particleCount = Math.min(window.innerWidth / 25, 60); // More particles for better effect

            for (let i = 0; i < particleCount; i++) {
                const baseVx = (Math.random() - 0.5) * 0.3; // Very gentle base horizontal velocity
                const baseVy = (Math.random() - 0.5) * 0.3; // Very gentle base vertical velocity
                const depth = Math.random() * 0.8 + 0.2; // Depth for parallax (0.2-1.0)
                const scrollInfluence = Math.random() * 0.6 + 0.2; // How much scroll affects this particle (0.2-0.8)

                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: baseVx + (Math.random() - 0.5) * 0.05, // Add tiny random variation to initial velocity
                    vy: baseVy + (Math.random() - 0.5) * 0.05, // Add tiny random variation to initial velocity
                    baseVx: baseVx,
                    baseVy: baseVy,
                    size: (Math.random() * 6 + 2) * depth, // Size based on depth
                    opacity: (Math.random() * 0.4 + 0.1) * depth, // Opacity based on depth
                    depth: depth,
                    scrollInfluence: scrollInfluence
                });
            }
            particlesRef.current = particles;
        };

        initParticles();

        // Enhanced animation loop with smooth velocity interpolation
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth velocity interpolation for fluid motion
            const velocityInterpolationSpeed = 0.1; // How quickly velocity changes
            currentVelocityRef.current += (targetVelocityRef.current - currentVelocityRef.current) * velocityInterpolationSpeed;

            // Smooth momentum decay
            if (!isScrolling && momentumRef.current > 0) {
                momentumRef.current *= 0.985; // Slower, smoother decay
                if (momentumRef.current < 0.001) {
                    momentumRef.current = 0;
                }
            }

            particlesRef.current.forEach((particle, index) => {
                // Enhanced scroll-responsive movement with smooth interpolation
                let speedMultiplier = 1;
                let sizeMultiplier = 1;
                let directionalInfluence = 0;

                if (isScrolling || momentumRef.current > 0.001) {
                    // Use interpolated velocity for very gentle motion with limits
                    const rawVelocity = isScrolling ? currentVelocityRef.current : momentumRef.current * 2;
                    const effectiveVelocity = Math.min(rawVelocity, 50); // Cap maximum velocity influence
                    speedMultiplier = Math.min(1 + (effectiveVelocity / 400) * particle.depth, 2.5); // Cap speed multiplier

                    // Add directional influence with diagonal movement pattern and limits
                    const maxDirectionalInfluence = 0.05; // Maximum directional influence per frame
                    if (scrollDirection === 'down') {
                        // Move diagonally up-right when scrolling down
                        const dirInfluence = effectiveVelocity * 0.00015 * particle.scrollInfluence;
                        particle.vx += Math.max(-maxDirectionalInfluence, Math.min(maxDirectionalInfluence, dirInfluence));
                        particle.vy -= Math.max(-maxDirectionalInfluence, Math.min(maxDirectionalInfluence, dirInfluence));
                    } else {
                        // Move diagonally down-left when scrolling up
                        const dirInfluence = effectiveVelocity * 0.00015 * particle.scrollInfluence;
                        particle.vx -= Math.max(-maxDirectionalInfluence, Math.min(maxDirectionalInfluence, dirInfluence));
                        particle.vy += Math.max(-maxDirectionalInfluence, Math.min(maxDirectionalInfluence, dirInfluence));
                    }

                    // Subtle size boost when scrolling with limits
                    sizeMultiplier = Math.min(1.03 + (effectiveVelocity / 1800) * particle.depth, 1.2); // Cap size multiplier
                } else {
                    // Smoother reset to base velocity
                    const resetSpeed = 0.05; // Slower, smoother reset
                    particle.vx += (particle.baseVx - particle.vx) * resetSpeed;
                    particle.vy += (particle.baseVy - particle.vy) * resetSpeed;
                }

                // Update position with enhanced speed and directional influence
                particle.x += particle.vx * speedMultiplier;
                particle.y += particle.vy * speedMultiplier;

                // Apply velocity limits to prevent excessive speeds
                const maxVelocity = 2.0; // Maximum velocity for any particle
                const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
                if (currentSpeed > maxVelocity) {
                    const scale = maxVelocity / currentSpeed;
                    particle.vx *= scale;
                    particle.vy *= scale;
                }

                // Wrap around edges with some randomness
                if (particle.x < -50) particle.x = canvas.width + 50;
                if (particle.x > canvas.width + 50) particle.x = -50;
                if (particle.y < -50) particle.y = canvas.height + 50;
                if (particle.y > canvas.height + 50) particle.y = -50;

                // Draw particle with enhanced visibility
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * sizeMultiplier, 0, Math.PI * 2);

                // Enhanced visibility when scrolling
                const isPrimary = index % 3 === 0; // More variety in color distribution
                let enhancedOpacity = particle.opacity;

                // Enhanced opacity boost when scrolling for better visibility
                if (isScrolling || momentumRef.current > 0.001) {
                    const activityLevel = isScrolling ? 1 : momentumRef.current;
                    enhancedOpacity = Math.min(particle.opacity * (3 + activityLevel * 2), 0.95);
                }

                // Color based on depth for parallax effect with enhanced visibility
                if (isPrimary) {
                    // Primary color (teal) with depth-based intensity
                    ctx.fillStyle = `rgba(3, 97, 95, ${enhancedOpacity * particle.depth * 0.6})`;
                } else {
                    // Secondary color (gold) with depth-based intensity
                    ctx.fillStyle = `rgba(200, 178, 117, ${enhancedOpacity * particle.depth * 0.8})`;
                }

                ctx.fill();

                // Draw connections with enhanced scroll-responsive visibility
                particlesRef.current.forEach((otherParticle, otherIndex) => {
                    if (index !== otherIndex) {
                        const dx = particle.x - otherParticle.x;
                        const dy = particle.y - otherParticle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        // Enhanced connection distance when scrolling
                        const baseConnectionDistance = 100;
                        const activityMultiplier = (isScrolling || momentumRef.current > 0.01) ? 3.5 : 1;
                        const depthMultiplier = (particle.depth + otherParticle.depth) / 2;
                        const maxDistance = baseConnectionDistance * activityMultiplier * depthMultiplier;

                        if (distance < maxDistance) {
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(otherParticle.x, otherParticle.y);

                            // Enhanced connection opacity when scrolling
                            let connectionOpacity = 0.25 * (1 - distance / maxDistance) * depthMultiplier;

                            // Boost connection visibility when scrolling
                            if (isScrolling || momentumRef.current > 0.001) {
                                const activityLevel = isScrolling ? 1 : momentumRef.current;
                                connectionOpacity = Math.min(connectionOpacity * (4 + activityLevel * 2), 0.9);
                            }

                            // Color connections based on particle types and depth
                            if (isPrimary) {
                                ctx.strokeStyle = `rgba(3, 97, 95, ${connectionOpacity * 0.6})`;
                            } else {
                                ctx.strokeStyle = `rgba(200, 178, 117, ${connectionOpacity * 0.8})`;
                            }

                            // Enhanced line width for better visibility when scrolling
                            const baseLineWidth = 0.8;
                            const activityMultiplier = (isScrolling || momentumRef.current > 0.01) ? 2.5 : 1;
                            const distanceMultiplier = 1 - (distance / maxDistance) * 0.2; // Smoother distance falloff
                            ctx.lineWidth = Math.max(0.6, baseLineWidth * activityMultiplier * distanceMultiplier);

                            ctx.stroke();
                        }
                    }
                });
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            if (scrollThrottleRef.current) {
                clearTimeout(scrollThrottleRef.current);
            }
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isScrolling, scrollVelocity, scrollDirection]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-10 opacity-10"
        />
    );
};

export default ParticleBackground;
