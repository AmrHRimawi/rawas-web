"use client";

import React from 'react';
import {motion, MotionProps} from "framer-motion";

interface MotionDivProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

const MotionDiv: React.FC<MotionDivProps> = ({children, className, ...props}) => {
    const motionProps: MotionProps = {...props};

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
            className={className}
            {...motionProps}
        >
            {children}
        </motion.div>
    );
}

export default MotionDiv;