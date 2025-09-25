"use client";

import React from "react";
import {motion} from "framer-motion"

interface ArrowDownProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    delay?: number;
}

const ArrowDown: React.FC<ArrowDownProps> = ({className, delay = 0, ...props}) => (
    <div className={className + " h-28 w-16"} {...props}>
        <motion.svg 
            animate={{ 
                y: [0, 10, 0], // Smooth up and down movement
                opacity: [0.7, 1, 0.7] // Subtle breathing effect
            }}
            transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut", // Smooth easing
                times: [0, 0.5, 1], // Control timing of keyframes
                delay: delay // Allow staggered timing
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 5M5 12l7 7 7-7"/>
        </motion.svg>
    </div>
);

export default ArrowDown;
