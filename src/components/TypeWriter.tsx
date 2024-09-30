"use client";

import React, {useEffect, useState} from 'react';

const TypeWriter = ({children = "", speed = 200, startDelay = 0, ...props}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setHasStarted(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (hasStarted && index < children.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(displayedText + children[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, children, displayedText, speed, hasStarted]);

    return (
        <div {...props}>
            {displayedText}
        </div>
    );
};

export default TypeWriter;