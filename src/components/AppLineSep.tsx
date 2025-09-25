import Image from "next/image";
import React from "react";
import MotionUpDiv from "@/components/MotionUpDiv";
import { pathPrefix } from "@/utils/Constent";
import { cn } from "@/utils/TailwindUtil";

interface AppLineSepProps {
    className?: string;
    variant?: 'default' | 'compact' | 'spacious';
    showMultiple?: boolean;
    lineColor?: string;
    viewportAmount?: number;
}

const AppLineSep: React.FC<AppLineSepProps> = ({ 
    className,
    variant = 'default',
    showMultiple = true,
    lineColor = 'currentColor',
    viewportAmount = 0.8
}) => {
    const spacingClass = {
        compact: 'h-1',
        default: 'h-2',
        spacious: 'h-4'
    }[variant];

    return (
        <>
            <div className={spacingClass} />
            <MotionUpDiv 
                className={cn(
                    "flex justify-center items-center gap-1 px-4",
                    className
                )}
                viewportAmount={viewportAmount}
            >
                {/* Always show first line */}
                <div className="flex-shrink-0">
                    <Image 
                        width={255} 
                        height={20} 
                        src={pathPrefix + "/icons/line.svg"} 
                        alt="decorative line separator"
                        className="transition-opacity duration-300 hover:opacity-80"
                        style={{ filter: lineColor !== 'currentColor' ? `brightness(0) saturate(100%) ${lineColor}` : undefined }}
                        loading="lazy"
                    />
                </div>
                
                {/* Show additional lines on larger screens if enabled */}
                {showMultiple && (
                    <>
                        <div className="hidden md:block flex-shrink-0">
                            <Image 
                                width={255} 
                                height={20} 
                                src={pathPrefix + "/icons/line.svg"} 
                                alt=""
                                className="transition-opacity duration-300 hover:opacity-80"
                                style={{ filter: lineColor !== 'currentColor' ? `brightness(0) saturate(100%) ${lineColor}` : undefined }}
                                loading="lazy"
                            />
                        </div>
                        <div className="hidden lg:block flex-shrink-0">
                            <Image 
                                width={255} 
                                height={20} 
                                src={pathPrefix + "/icons/line.svg"} 
                                alt=""
                                className="transition-opacity duration-300 hover:opacity-80"
                                style={{ filter: lineColor !== 'currentColor' ? `brightness(0) saturate(100%) ${lineColor}` : undefined }}
                                loading="lazy"
                            />
                        </div>
                    </>
                )}
            </MotionUpDiv>
            <div className={spacingClass} />
        </>
    );
};

export { AppLineSep };
export default AppLineSep;