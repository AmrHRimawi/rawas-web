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
    color?: string;
    ariaLabel?: string;
    title?: string;
    newTab?: boolean;
    key?: string;
}

const SourceIconLink: React.FC<SourceIconLinkProps> = ({className = "", src, link, alt, inSize = 20, outSize = 40, color, ariaLabel, title, newTab = true, ...props}: SourceIconLinkProps) => (
    <div className={"icon-container " + className} style={{
        width: outSize,
        height: outSize,
        '--outSize': `${outSize}px`,
        '--bgColor': color
    } as React.CSSProperties} {...props}>
        <Link href={link} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined} aria-label={ariaLabel ?? alt} title={title ?? alt} prefetch={false}>
            <Image src={src} alt={alt} width={inSize} height={inSize}/>
        </Link>
    </div>
)

export default SourceIconLink;