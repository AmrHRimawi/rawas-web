import React from 'react';

interface ImageSkeletonProps {
    width: number;
    height: number;
    className?: string;
    showText?: boolean;
    text?: string;
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({
    width,
    height,
    className = "",
    showText = true,
    text = "جاري التحميل..."
}) => {
    return (
        <div
            className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-pulse ${className}`}
            style={{ 
                width, 
                height,
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite'
            }}
        >
            {showText && (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-gray-400 text-sm text-center">
                        {text}
                    </div>
                </div>
            )}
            
            <style jsx>{`
                @keyframes shimmer {
                    0% {
                        background-position: -200% 0;
                    }
                    100% {
                        background-position: 200% 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default ImageSkeleton;
