import React from 'react';
import Image from "next/image";
import Link from "next/link";
import './SourceIconLink.css';

interface SourceIconLinkProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    src: string;
    link: string;
    alt: string;
    inSize?: number;
    outSize?: number;
    key?: string;
}

const SourceIconLink: React.FC<SourceIconLinkProps> = ({className = "", src, link, alt, inSize = 20, outSize = 40, color, ...props}: SourceIconLinkProps) => (
    <div className={"icon-container " + className} style={{
        width: outSize,
        height: outSize,
        '--outSize': `${outSize}px`,
        '--bgColor': color
    }} {...props}>
        <Link href={link}>
            <Image src={src} alt={alt} width={inSize} height={inSize}/>
        </Link>
    </div>
)

export default SourceIconLink;