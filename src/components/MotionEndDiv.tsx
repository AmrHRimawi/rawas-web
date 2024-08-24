"use client";

import React from 'react';
import {motion, MotionProps} from "framer-motion";

interface MotionDivProps extends MotionProps {
    children: React.ReactNode,
    className?: string,
    viewportAmount?: number,
    key?: number | string
}

const MotionEndDiv: React.FC<MotionDivProps> = ({children, className, viewportAmount = 0.5, key, ...props}) => {
    const motionProps: MotionProps = {...props};

    return (
        <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{amount: viewportAmount}}
            transition={{duration: 1}}
            className={className}
            key={key}
            {...motionProps}
        >
            {children}
        </motion.div>
    );
}

export default MotionEndDiv;