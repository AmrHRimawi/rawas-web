"use client";

import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

// Simple SVG icon components
const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
    </svg>
);

interface FloatingActionButtonProps {
    onScrollToTop: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onScrollToTop }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <Button
                    isIconOnly
                    className="glass-button backdrop-blur-md bg-white/30 hover:bg-white/40 text-white border border-white/40 hover:scale-110 transition-all duration-300 shadow-2xl fixed bottom-8 right-8 z-50 drop-shadow-2xl"
                    onClick={onScrollToTop}
                    aria-label="Scroll to top"
                >
                    <ChevronUpIcon className="text-2xl" />
                </Button>
            )}
        </>
    );
};

export default FloatingActionButton;
