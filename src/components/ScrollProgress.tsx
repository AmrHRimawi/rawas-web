"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0;

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-1 bg-secondary z-[9999] transition-[width] duration-100"
            style={{
                width: `${scrollProgress}%`,
            }}
        />
    );
}