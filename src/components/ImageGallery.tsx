"use client";

import React, {useState} from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import PanoramaViewer from '@/components/PanoramaViewer';

interface ImageGalleryProps {
    images: { src: string, title: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <div className="flex flex-wrap gap-3 justify-center">
                {images.map((image, index) => (
                    <div key={index} onClick={() => openModal(image.src)} className="cursor-pointer">
                        <Image src={image.src} alt={`Image ${index + 1}`} width={400} height={150}/>
                        <p className="text-center">{image.title}</p>
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