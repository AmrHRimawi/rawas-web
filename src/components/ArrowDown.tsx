"use client";

import React from "react";
import {motion} from "framer-motion"

const ArrowDown: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({className, ...props}) => (
    <div className={className + " h-28 w-16"} {...props}>
        <motion.svg initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{repeat: Infinity, duration: 1.5}}
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
