"use client";

import React, {useEffect, useState} from 'react';

interface TypeWriterListProps extends React.HTMLAttributes<HTMLDivElement> {
    strings?: string[];
    typingSpeed?: number;
    erasingSpeed?: number;
    delay?: number;
    startDelay?: number;
    showCaret?: boolean;
    caretClassName?: string;
}

const TypeWriterList: React.FC<TypeWriterListProps> = ({strings = [], typingSpeed = 200, erasingSpeed = 50, delay = 1000, startDelay = 0, showCaret = true, caretClassName = '', ...props}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);
    const [stringIndex, setStringIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setHasStarted(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (!hasStarted || strings.length === 0) return;

        if (!isErasing && index < strings[stringIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText(displayedText + strings[stringIndex][index]);
                setIndex(index + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else if (isErasing && index > 0) {
            const timeout = setTimeout(() => {
                setDisplayedText(displayedText.slice(0, -1));
                setIndex(index - 1);
            }, erasingSpeed);
            return () => clearTimeout(timeout);
        } else if (!isErasing && index === strings[stringIndex].length) {
            const timeout = setTimeout(() => {
                setIsErasing(true);
            }, delay);
            return () => clearTimeout(timeout);
        } else if (isErasing && index === 0) {
            setIsErasing(false);
            setStringIndex((stringIndex + 1) % strings.length);
        }
    }, [index, isErasing, strings, stringIndex, typingSpeed, erasingSpeed, delay, displayedText, hasStarted]);

    return (
        <div {...props}>
            {displayedText}
            {showCaret && (
                <span className={`inline-block align-baseline ml-1 caret-blink ${caretClassName}`}>|</span>
            )}
        </div>
    );
};

export default TypeWriterList;