import React from 'react';
import Image from "next/image";
import { cn } from '@/utils/TailwindUtil';

interface SourceIconTextProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    src: string;
    alt: string;
    size?: number;
    iconClassName?: string;
    textClassName?: string;
    children?: React.ReactNode;
}

const SourceIconText: React.FC<SourceIconTextProps> = ({
    className,
    src,
    alt,
    size = 20,
    iconClassName,
    textClassName,
    children,
    ...props
}) => {
    return (
        <div 
            className={cn(
                "icon-text flex items-start gap-3 text-start",
                className
            )} 
            {...props}
        >
            <div className="flex-shrink-0 mt-1">
                <Image 
                    className={cn(
                        "transition-opacity duration-200 hover:opacity-80",
                        iconClassName
                    )}
                    src={src} 
                    alt={alt} 
                    width={size} 
                    height={size}
                    loading="lazy"
                />
            </div>
            <span 
                className={cn(
                    "leading-relaxed break-words",
                    textClassName
                )}
            >
                {children}
            </span>
        </div>
    );
};

export default SourceIconText;
