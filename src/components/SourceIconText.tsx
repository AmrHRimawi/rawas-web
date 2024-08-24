import React from 'react';
import Image from "next/image";

interface SourceIconTextProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    src: string;
    alt: string;
    size?: number;
    key?: string;
    children?: React.ReactNode;
}

const SourceIconText: React.FC<SourceIconTextProps>
    = ({className = "", src, alt, size = 20, children, ...props}: SourceIconTextProps) => {
    return (
        <div className={"icon-text flex justify-center items-start " + className} {...props}>
            <Image className="mt-2" src={src} alt={alt} width={size} height={size}/>
            <span className="ms-3 mt-1"> {children} </span>
        </div>
    )
}

export default SourceIconText;