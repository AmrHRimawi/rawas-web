"use client";

import React from 'react';
import {motion, MotionProps} from "framer-motion";

interface MotionDivProps extends MotionProps {
    children: React.ReactNode,
    className?: string,
    viewportAmount?: number,
    key?: number
}

const MotionUpDiv: React.FC<MotionDivProps> = ({children, className = "w-full", viewportAmount = 0.8, key, ...props}) => {
    const motionProps: MotionProps = {...props};

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{amount: viewportAmount}}
            transition={{duration: 0.5}}
            className={className}
            key={key}
            {...motionProps}
        >
            {children}
        </motion.div>
    );
}

export default MotionUpDiv;