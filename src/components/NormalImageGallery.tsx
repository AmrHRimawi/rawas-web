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
    /** `contain` for floor plans; `cover` fills the card (progress photos). */
    fit?: "contain" | "cover";
}

export default function NormalImageGallery({
    images,
    fit = "contain",
}: Readonly<NormalImageGalleryProps>) {
    const galleryImages = images.filter((image) => image.src.trim().length > 0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [sizeBySrc, setSizeBySrc] = useState<Record<string, {width: number; height: number}>>({});

    const markSize = useCallback((src: string, width: number, height: number) => {
        setSizeBySrc((prev) => {
            if (prev[src]?.width === width && prev[src]?.height === height) {
                return prev;
            }
            return {...prev, [src]: {width, height}};
        });
    }, []);

    const closeGallery = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    const showPreviousImage = useCallback(() => {
        setSelectedIndex((currentIndex) => {
            if (currentIndex === null || galleryImages.length === 0) {
                return null;
            }

            return (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        });
    }, [galleryImages.length]);

    const showNextImage = useCallback(() => {
        setSelectedIndex((currentIndex) => {
            if (currentIndex === null || galleryImages.length === 0) {
                return null;
            }

            return (currentIndex + 1) % galleryImages.length;
        });
    }, [galleryImages.length]);

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

    if (galleryImages.length === 0) {
        return null;
    }

    const selectedImage =
        selectedIndex !== null ? galleryImages[selectedIndex] : null;

    return (
        <>
            <div className="grid w-full grid-cols-1 items-start gap-6 px-4 md:grid-cols-2 md:gap-8 md:px-8 lg:grid-cols-3 lg:px-12">
                {galleryImages.map((image, index) => {
                    const size = sizeBySrc[image.src];
                    const isPortrait = size ? size.height > size.width : false;
                    const isContain = fit === "contain";

                    return (
                    <button
                        key={`${image.src}-${index}`}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className="group mx-2 text-center md:mx-3"
                        aria-label={`عرض ${image.title || `الصورة ${index + 1}`}`}
                    >
                        <div
                            className={`relative w-full overflow-hidden rounded-xl bg-default-100 shadow-md ${
                                isContain
                                    ? "min-h-64"
                                    : isPortrait
                                      ? "aspect-[3/4] min-h-96"
                                      : "aspect-[4/3] min-h-72"
                            }`}
                            style={
                                isContain && size
                                    ? {aspectRatio: `${size.width} / ${size.height}`}
                                    : isContain
                                      ? {aspectRatio: "4 / 3"}
                                      : undefined
                            }
                        >
                            <Image
                                src={image.src}
                                alt={image.title || `صورة المشروع ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className={`${isContain ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
                                onLoadingComplete={(img) => {
                                    markSize(image.src, img.naturalWidth, img.naturalHeight);
                                }}
                            />
                        </div>

                        {image.title && (
                            <p className="mt-3 text-lg text-primary">
                                {image.title}
                            </p>
                        )}
                    </button>
                    );
                })}
            </div>

            {selectedImage && selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[9999] flex flex-col bg-black/85 p-4 pt-16 pb-6"
                    onClick={closeGallery}
                    role="dialog"
                    aria-modal="true"
                    aria-label="معرض صور المشروع"
                >
                    <button
                        type="button"
                        aria-label="إغلاق الصورة"
                        className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80"
                        onClick={closeGallery}
                    >
                        <X size={32}/>
                    </button>

                    <div
                        className="relative mx-auto min-h-0 w-full max-w-6xl flex-1"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            key={selectedImage.src}
                            src={selectedImage.src}
                            alt={selectedImage.title || "صورة المشروع"}
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

                    <div
                        className="mt-4 flex shrink-0 items-center justify-center gap-6"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {galleryImages.length > 1 && (
                            <button
                                type="button"
                                aria-label="الصورة السابقة"
                                className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80 md:h-16 md:w-16"
                                onClick={showPreviousImage}
                            >
                                <ChevronRight size={38}/>
                            </button>
                        )}

                        <div className="rounded-full bg-black/50 px-5 py-2 text-white">
                            {selectedIndex + 1} / {galleryImages.length}
                        </div>

                        {galleryImages.length > 1 && (
                            <button
                                type="button"
                                aria-label="الصورة التالية"
                                className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80 md:h-16 md:w-16"
                                onClick={showNextImage}
                            >
                                <ChevronLeft size={38}/>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}