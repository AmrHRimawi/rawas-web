"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ImageSkeleton from './ImageSkeleton';

interface LazyImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    onClick?: (e: any) => void;
    onLoad?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    width,
    height,
    priority = false,
    className = "",
    placeholder = "empty", // "empty" to avoid blurDataURL requirement
    blurDataURL,
    onClick,
    onLoad
}) => {
    const [isInView, setIsInView] = useState(priority);
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priority) return; // Skip intersection observer for priority images

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect(); // Stop observing once in view
                    }
                });
            },
            {
                rootMargin: '100px', // Start loading 100px before image comes into view
                threshold: 0.1
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    const handleImageLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    if (!isInView) {
        return (
            <div ref={imageRef}>
                <ImageSkeleton
                    width={width}
                    height={height}
                    className={className}
                    text="جاري التحميل..."
                />
            </div>
        );
    }

    return (
        <div ref={imageRef}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClick}
                onLoad={handleImageLoad}
            />
        </div>
    );
};

export default LazyImage;
