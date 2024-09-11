"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@nextui-org/react";

// Interface for image data
interface ImageData {
    src: string;
}

interface ImageSliderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    images: ImageData[];
}

export default function ImageSlider({images, className, ...props}: Readonly<ImageSliderProps>) {
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // State to determine if the image is being hovered over
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // Function to show the previous slide
    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Function to show the next slide
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // useEffect hook to handle automatic slide transition
    useEffect(() => {
        // Start interval for automatic slide change if not hovered
        if (!isHovered) {
            const interval = setInterval(nextSlide, 3000);

            // Cleanup the interval on component unmount
            return () => {
                clearInterval(interval);
            };
        }
    }, [isHovered]);

    // Handle mouse over event
    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    // Handle mouse leave event
    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    return (
        <div className={"relative w-full " + className} {...props}>
            <div
                className="relative w-full h-[720px] group hover:-translate-y-0.5"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    fill
                    style={{objectFit: "cover"}}
                    className="rounded-sm transition-all duration-1000 ease-in-out cursor-pointer"
                />
            </div>
            <Button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-80 text-primary-foreground rounded-full mx-2 w-20 h-20"
                onClick={prevSlide}
            >
                <ChevronLeft className="text-gray-200 group-hover:text-primary-foreground" size={32}/>
            </Button>
            <Button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-80 text-primary-foreground rounded-full mx-2 w-20 h-20"
                onClick={nextSlide}
            >
                <ChevronRight className="text-gray-200 group-hover:text-primary-foreground" size={32}/>
            </Button>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 mx-1 ${
                            index === currentIndex
                                ? "bg-primary rounded-xl"
                                : "bg-gray-300 rounded-xl"
                        } transition-all duration-500 ease-in-out`}
                    ></div>
                ))}
            </div>
        </div>
    );
}