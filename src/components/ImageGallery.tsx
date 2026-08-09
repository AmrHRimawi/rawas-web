"use client";

import React, {useState, useEffect, useCallback} from "react";
import Modal from "react-modal";
import Image from "next/image";
import PanoramaViewer from "@/components/PanoramaViewer";
import {ChevronLeft, ChevronRight, X} from "lucide-react";

interface ImageGalleryProps {
    images: { src: string; title: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set([0, 1, 2]));

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedIndex(null);
    };

    const nextImage = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex + 1) % images.length);
    }, [selectedIndex, images.length]);

    const prevImage = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }, [selectedIndex, images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === "ArrowRight") {
                nextImage();
            }

            if (e.key === "ArrowLeft") {
                prevImage();
            }

            if (e.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, nextImage, prevImage]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute("data-index") || "0");
                        setVisibleImages((prev) => new Set([...Array.from(prev), index]));
                    }
                });
            },
            {
                rootMargin: "50px",
                threshold: 0.1,
            }
        );

        const imageContainers = document.querySelectorAll("[data-index]");
        imageContainers.forEach((container) => observer.observe(container));

        return () => observer.disconnect();
    }, [images.length]);

    const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

    return (
        <div>
            <div className="flex flex-wrap gap-3 justify-center">
                {images.map((image, index) => (
                    <div
                        key={`i:${index}`}
                        onClick={() => openModal(index)}
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
                                style={{backgroundColor: "#f3f4f6"}}
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
                className="fixed inset-[5%] p-0 w-[90%] h-[90%] z-[1000] bg-foreground outline-none"
                overlayClassName="fixed inset-0 z-[1000] bg-black bg-opacity-50"
            >
                {selectedImage && (
                    <div className="w-full h-full relative">
                        <PanoramaViewer imageUrl={selectedImage.src}/>

                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-[1100] bg-black/70 text-white rounded-full p-3 hover:bg-black"
                            aria-label="إغلاق"
                        >
                            <X size={28}/>
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-[1100] bg-black/70 text-white rounded-full p-4 hover:bg-black"
                            aria-label="الإطلالة السابقة"
                        >
                            <ChevronLeft size={36}/>
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-[1100] bg-black/70 text-white rounded-full p-4 hover:bg-black"
                            aria-label="الإطلالة التالية"
                        >
                            <ChevronRight size={36}/>
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1100] bg-black/70 text-white px-4 py-2 rounded-full">
                            {selectedImage.title}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ImageGallery;
