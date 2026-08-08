"use client";

import React, {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight, X} from "lucide-react";

interface GalleryImage {
    src: string;
    title?: string;
}

interface NormalImageGalleryProps {
    images: GalleryImage[];
}

export default function NormalImageGallery({
    images,
}: Readonly<NormalImageGalleryProps>) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeGallery = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    const showPreviousImage = useCallback(() => {
        setSelectedIndex((currentIndex) => {
            if (currentIndex === null || images.length === 0) {
                return null;
            }

            return (currentIndex - 1 + images.length) % images.length;
        });
    }, [images.length]);

    const showNextImage = useCallback(() => {
        setSelectedIndex((currentIndex) => {
            if (currentIndex === null || images.length === 0) {
                return null;
            }

            return (currentIndex + 1) % images.length;
        });
    }, [images.length]);

    useEffect(() => {
        if (selectedIndex === null) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeGallery();
            }

            if (event.key === "ArrowLeft") {
                showPreviousImage();
            }

            if (event.key === "ArrowRight") {
                showNextImage();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        selectedIndex,
        closeGallery,
        showPreviousImage,
        showNextImage,
    ]);

    if (images.length === 0) {
        return null;
    }

    const selectedImage =
        selectedIndex !== null ? images[selectedIndex] : null;

    return (
        <>
            {/* صور المخططات في الصفحة */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {images.map((image, index) => (
                    <button
                        key={`${image.src}-${index}`}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className="group text-center"
                        aria-label={`عرض ${image.title ?? `الصورة ${index + 1}`}`}
                    >
                        <div className="relative h-72 w-full overflow-hidden rounded-xl bg-white shadow-md">
                            <Image
                                src={image.src}
                                alt={image.title ?? `مخطط الطابق ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {image.title && (
                            <p className="mt-3 text-lg text-primary">
                                {image.title}
                            </p>
                        )}
                    </button>
                ))}
            </div>

            {/* نافذة عرض الصورة بالحجم الكبير */}
            {selectedImage && selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4"
                    onClick={closeGallery}
                    role="dialog"
                    aria-modal="true"
                    aria-label="معرض مخططات الطوابق"
                >
                    {/* زر الإغلاق */}
                    <button
                        type="button"
                        aria-label="إغلاق الصورة"
                        className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80"
                        onClick={closeGallery}
                    >
                        <X size={32}/>
                    </button>

                    {/* عداد الصور */}
                    <div className="absolute left-1/2 top-6 z-30 -translate-x-1/2 rounded-full bg-black/50 px-5 py-2 text-white">
                        {selectedIndex + 1} / {images.length}
                    </div>

                    {/* السهم السابق */}
                    {images.length > 1 && (
                        <button
                            type="button"
                            aria-label="الصورة السابقة"
                            className="absolute left-3 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80 md:left-8 md:h-16 md:w-16"
                            onClick={(event) => {
                                event.stopPropagation();
                                showPreviousImage();
                            }}
                        >
                            <ChevronLeft size={38}/>
                        </button>
                    )}

                    {/* الصورة الكبيرة */}
                    <div
                        className="relative h-[82vh] w-[calc(100%-7rem)] max-w-6xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            key={selectedImage.src}
                            src={selectedImage.src}
                            alt={selectedImage.title ?? "مخطط المشروع"}
                            fill
                            sizes="100vw"
                            className="object-contain"
                            priority
                        />

                        {selectedImage.title && (
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-xl bg-black/60 px-6 py-3 text-center text-lg text-white">
                                {selectedImage.title}
                            </div>
                        )}
                    </div>

                    {/* السهم التالي */}
                    {images.length > 1 && (
                        <button
                            type="button"
                            aria-label="الصورة التالية"
                            className="absolute right-3 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80 md:right-8 md:h-16 md:w-16"
                            onClick={(event) => {
                                event.stopPropagation();
                                showNextImage();
                            }}
                        >
                            <ChevronRight size={38}/>
                        </button>
                    )}
                </div>
            )}
        </>
    );
}