import { useState, useEffect, useCallback } from 'react';

interface ImageOptimizationOptions {
    priority?: boolean;
    preload?: boolean;
    cacheStrategy?: 'memory' | 'disk' | 'network';
    quality?: number;
}

interface ImageOptimizationState {
    isLoaded: boolean;
    isError: boolean;
    loadTime: number;
    retryCount: number;
}

export const useImageOptimization = (
    src: string,
    options: ImageOptimizationOptions = {}
) => {
    const [state, setState] = useState<ImageOptimizationState>({
        isLoaded: false,
        isError: false,
        loadTime: 0,
        retryCount: 0
    });

    const [imageSrc, setImageSrc] = useState<string>('');

    const {
        priority = false,
        preload = false,
        cacheStrategy = 'disk',
        quality = 75
    } = options;

    // Preload image if specified
    useEffect(() => {
        if (preload && src) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                // Image preloaded successfully
                console.log(`Image preloaded: ${src}`);
            };
            img.onerror = () => {
                console.warn(`Failed to preload image: ${src}`);
            };
        }
    }, [src, preload]);

    // Load image with optimization
    const loadImage = useCallback(async () => {
        if (!src) return;

        const startTime = performance.now();
        
        try {
            // Create a new image element for loading
            const img = new Image();
            
            // Set crossOrigin for CORS if needed
            if (src.startsWith('http') && !src.includes(window.location.origin)) {
                img.crossOrigin = 'anonymous';
            }

            // Set quality parameter if supported
            if (quality !== 75) {
                // For Next.js Image component, quality is handled automatically
                // This is for custom image loading scenarios
            }

            img.onload = () => {
                const loadTime = performance.now() - startTime;
                setState(prev => ({
                    ...prev,
                    isLoaded: true,
                    isError: false,
                    loadTime
                }));
                
                // Log performance metrics
                console.log(`Image loaded in ${loadTime.toFixed(2)}ms: ${src}`);
            };

            img.onerror = () => {
                setState(prev => ({
                    ...prev,
                    isError: true,
                    retryCount: prev.retryCount + 1
                }));
                
                console.error(`Failed to load image: ${src}`);
            };

            // Start loading
            img.src = src;
            setImageSrc(src);

        } catch (error) {
            console.error('Error loading image:', error);
            setState(prev => ({
                ...prev,
                isError: true
            }));
        }
    }, [src, quality]);

    // Retry loading on error
    const retry = useCallback(() => {
        if (state.retryCount < 3) {
            setState(prev => ({
                ...prev,
                isError: false
            }));
            loadImage();
        }
    }, [state.retryCount, loadImage]);

    // Auto-load image when src changes
    useEffect(() => {
        if (src && !priority) {
            loadImage();
        } else if (src && priority) {
            // For priority images, load immediately
            setState(prev => ({ ...prev, isLoaded: true }));
            setImageSrc(src);
        }
    }, [src, priority, loadImage]);

    // Cleanup
    useEffect(() => {
        return () => {
            // Cleanup any pending operations
        };
    }, []);

    return {
        ...state,
        imageSrc,
        loadImage,
        retry,
        // Helper methods
        isOptimized: state.isLoaded && !state.isError,
        canRetry: state.retryCount < 3,
        // Performance metrics
        performance: {
            loadTime: state.loadTime,
            isFast: state.loadTime < 1000, // Less than 1 second
            isSlow: state.loadTime > 3000  // More than 3 seconds
        }
    };
};

// Hook for managing multiple images
export const useMultipleImageOptimization = (
    imageSources: string[],
    options: ImageOptimizationOptions = {}
) => {
    const [images, setImages] = useState<Map<string, ReturnType<typeof useImageOptimization>>>(new Map());

    useEffect(() => {
        const newImages = new Map();
        
        imageSources.forEach((src, index) => {
            const imageHook = useImageOptimization(src, {
                ...options,
                priority: index < 3 // Priority for first 3 images
            });
            newImages.set(src, imageHook);
        });

        setImages(newImages);
    }, [imageSources, options]);

    const allLoaded = Array.from(images.values()).every(img => img.isLoaded);
    const hasErrors = Array.from(images.values()).some(img => img.isError);
    const totalLoadTime = Array.from(images.values()).reduce((sum, img) => sum + img.loadTime, 0);

    return {
        images,
        allLoaded,
        hasErrors,
        totalLoadTime,
        averageLoadTime: images.size > 0 ? totalLoadTime / images.size : 0
    };
};
