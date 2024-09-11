"use client"

import React, {MouseEvent as ReactMouseEvent, useRef, useState} from "react"
import {motion, type PanInfo, useMotionValue, useSpring} from "framer-motion"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {cn} from "@/utils/TailwindUtil"
import Image from "next/image"

const START_INDEX = 0
const DRAG_THRESHOLD = 150
const FALLBACK_WIDTH = 256
const CURSOR_SIZE = 80

interface ImageData {
    title?: string
    src: string
}

interface SuggestedCarouselProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    images: ImageData[],
    isRTL?: boolean
}

export default function Carousel({images, className, isRTL = true, ...props}: Readonly<SuggestedCarouselProps>) {
    const containerRef = useRef<HTMLUListElement | null>(null)
    const itemsRef = useRef<(HTMLLIElement | null)[]>([])
    const [activeSlide, setActiveSlide] = useState(START_INDEX)
    const canScrollPrev = activeSlide > 0
    const canScrollNext = activeSlide < images.length - 1
    const offsetX = useMotionValue(-265)
    const animatedX = useSpring(offsetX, {damping: 20, stiffness: 150})
    const [isDragging, setIsDragging] = useState(false)
    const [hoverType, setHoverType] = useState<"prev" | "next" | "click" | null>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const animatedHoverX = useSpring(mouseX, {damping: 20, stiffness: 400, mass: 0.1})
    const animatedHoverY = useSpring(mouseY, {damping: 20, stiffness: 400, mass: 0.1})

    const hoverTypeTranslate = {
        "prev": "السابق",
        "next": "التالي",
        "click": "انقر",
        "drag": "اسحب"
    }

    function resetDragState() {
        setIsDragging(false)
        containerRef.current?.removeAttribute("data-dragging")
        animatedX.stop()
    }

    function handleDragSnap(_: MouseEvent, {offset: {x: dragOffset}}: PanInfo) {
        resetDragState()
        if (dragOffset < -DRAG_THRESHOLD) scrollPrev()
        else if (dragOffset > DRAG_THRESHOLD) scrollNext()
        animatedX.set(offsetX.get())
    }

    function scrollPrev() {
        if (!canScrollPrev) return
        const prevWidth = itemsRef.current.at(activeSlide - 1)?.getBoundingClientRect().width ?? FALLBACK_WIDTH
        if (activeSlide === 1) offsetX.set(offsetX.get() + (isRTL ? -prevWidth : prevWidth))
        setActiveSlide((prev) => prev - 1)
    }

    function scrollNext() {
        if (!canScrollNext) return
        const nextWidth = itemsRef.current.at(activeSlide + 1)?.getBoundingClientRect().width ?? FALLBACK_WIDTH
        if (activeSlide === 0) offsetX.set(offsetX.get() - (isRTL ? -nextWidth : nextWidth))
        setActiveSlide((prev) => prev + 1)
    }

    function navButtonHover({currentTarget, clientX, clientY}: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
        const parent = currentTarget.offsetParent
        if (!parent) return
        const {left: parentLeft, top: parentTop, right: parentRight, bottom: parentBottom} = parent.getBoundingClientRect()
        const {left, top, width, height} = currentTarget.getBoundingClientRect()
        const centerX = left - width / 2
        const centerY = top - height / 2
        const offsetFromCenterX = clientX - centerX
        const offsetFromCenterY = clientY - centerY
        mouseX.set(left - (parentRight - parentLeft) / 2 - offsetFromCenterX / 4)
        mouseY.set(top - (parentBottom - parentTop) + offsetFromCenterY / 4)
    }

    function disableDragClick(e: ReactMouseEvent<HTMLImageElement>) {
        if (isDragging) {
            e.preventDefault()
            e.stopPropagation()
        }
    }

    return (<div className={cn("group container mx-6 flex justify-center items-center", className)} {...props}>
        <motion.div
            className={cn("pointer-events-none absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100")}
            style={{width: CURSOR_SIZE, height: CURSOR_SIZE, x: animatedHoverX, y: animatedHoverY}}
        >
            <motion.div layout
                        className={cn("grid h-full place-items-center rounded-full bg-secondary-200", hoverType === "click" && "absolute inset-7 h-auto")}>
                <motion.span
                    layout="position"
                    className={
                        cn(
                            "w-full select-none text-center font-medium uppercase text-secondary-foreground",
                            (
                                hoverType === "prev" || hoverType === "next") && "absolute inset-x-0",
                            hoverType === "click" && "absolute top-full mt-0.5 w-auto text-sm font-bold text-lime-300"
                        )
                    }
                >
                    {hoverTypeTranslate[hoverType ?? "drag"]}
                </motion.span>
            </motion.div>
        </motion.div>
        <div className="relative overflow-hidden">
            <motion.ul
                ref={containerRef}
                className="flex cursor-none items-center"
                style={{x: animatedX}}
                drag="x"
                // dragConstraints={{left: isRTL ? 0 : -(FALLBACK_WIDTH * (images.length - 1)), right: isRTL ? -(FALLBACK_WIDTH * (images.length - 1)) : 0}}
                dragConstraints={{left: 0, right: 0}}
                onMouseMoveCapture={({currentTarget, clientX, clientY}) => {
                    const parent = currentTarget.offsetParent
                    if (!parent) return
                    const {left, top, right, bottom} = parent.getBoundingClientRect()
                    let x = clientX - (right - left) / 2 - CURSOR_SIZE;
                    let y = clientY - (bottom + top) / 2;
                    mouseX.set(clientX - (right - left) / 2 - CURSOR_SIZE)
                    mouseY.set(clientY - (bottom + top) / 2)
                }}
                onDragStart={() => {
                    containerRef.current?.setAttribute("data-dragging", "true")
                    setIsDragging(true)
                }}
                onDragEnd={handleDragSnap}
            >
                {images.map((img, index) => {
                    const active = index === activeSlide
                    const prev = index === activeSlide - 1
                    const next = index === activeSlide + 1
                    if (!active && !prev && !next) return null
                    return (<motion.li
                        layout
                        key={img.title}
                        ref={(el) => {
                            itemsRef.current[index] = el
                        }}
                        className={cn("group relative shrink-0 select-none px-3 transition-opacity duration-300", !active && "opacity-30")}
                        transition={{ease: "easeInOut", duration: 0.4}}
                        style={{flexBasis: active ? "60%" : "20%"}}
                    >
                        <Image
                            src={img.src}
                            width={900}
                            height={300}
                            alt={img.title ?? `Image ${index}`}
                            className={cn("grid place-content-center overflow-hidden rounded-lg bg-gray-900", active ? "aspect-[5/3]" : "aspect-[4/3]")}
                            draggable={false}
                            onClick={disableDragClick}
                        />
                        <div className={cn("mt-4 flex justify-center", !active && "hidden")}>
                            <p>{img.title}</p>
                        </div>
                    </motion.li>)
                })}
            </motion.ul>
            <button
                type="button"
                className="group absolute left-[14%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
                style={{width: CURSOR_SIZE, height: CURSOR_SIZE}}
                onClick={scrollNext}
                disabled={!canScrollNext}
                onMouseEnter={() => setHoverType("next")}
                onMouseMove={(e) => navButtonHover(e)}
                onMouseLeave={() => setHoverType(null)}
            >
                <span className="sr-only">Next Guide</span>
                <ChevronLeft className="h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-gray-900 group-disabled:opacity-50"/>
            </button>
            <button
                type="button"
                className="group absolute right-[14%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
                style={{width: CURSOR_SIZE, height: CURSOR_SIZE}}
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                onMouseEnter={() => setHoverType("prev")}
                onMouseMove={(e) => navButtonHover(e)}
                onMouseLeave={() => setHoverType(null)}
            >
                <span className="sr-only">Previous Guide</span>
                <ChevronRight className="h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-gray-900 group-disabled:opacity-50"/>
            </button>
        </div>
    </div>)
}