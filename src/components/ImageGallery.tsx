"use client";

import React, {useState, useRef, useEffect} from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import PanoramaViewer from '@/components/PanoramaViewer';

interface ImageGalleryProps {
    images: { src: string, title: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set([0, 1, 2])); // Show first 3 images immediately

    const openModal = (image: string) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    // Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleImages(prev => new Set([...Array.from(prev), index]));
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading 50px before image comes into view
                threshold: 0.1
            }
        );

        // Observe all image containers
        const imageContainers = document.querySelectorAll('[data-index]');
        imageContainers.forEach(container => observer.observe(container));

        return () => observer.disconnect();
    }, [images.length]);

    return (
        <div>
            <div className="flex flex-wrap gap-3 justify-center">
                {images.map((image, index) => (
                    <div 
                        key={`i:${index}`} 
                        onClick={() => openModal(image.src)} 
                        className="cursor-pointer"
                        data-index={index}
                    >
                        {visibleImages.has(index) ? (
                            <Image 
                                src={image.src} 
                                alt={`${image.title || `Image ${index + 1}`} - مشروع رواس`}
                                width={400} 
                                height={150}
                                className="rounded-lg transition-transform duration-300 hover:scale-105"
                            />
                        ) : (
                            <div 
                                className="w-[400px] h-[150px] bg-gray-200 rounded-lg animate-pulse flex items-center justify-center"
                                style={{ backgroundColor: '#f3f4f6' }}
                            >
                                <div className="text-gray-400 text-sm">جاري التحميل...</div>
                            </div>
                        )}
                        <p className="text-center mt-2">{image.title}</p>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="fixed  inset-[5%]  p-0 w-[90%] h-[90%] z-[1000] bg-foreground"
                overlayClassName="fixed inset-0 z-[1000] bg-black bg-opacity-50"
            >
                {selectedImage && (
                    <div className="w-full h-full relative">
                        <PanoramaViewer imageUrl={selectedImage}/>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ImageGallery;
