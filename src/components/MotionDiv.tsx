"use client";

import {motion} from "framer-motion";

export default function MotionDiv({children, className, ...props}) {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.8}}
            transition={{duration: 0.5}}
            className={className} {...props}>
            {children}
        </motion.div>
    )
}