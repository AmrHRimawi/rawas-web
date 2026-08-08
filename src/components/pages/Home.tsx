"use client";

import {Button, Link} from "@nextui-org/react";
import {CalendarBoldIcon} from "@nextui-org/shared-icons";
import "./Home.css";
import React from "react";
import ContactUs from "@/components/pages/ContactUs";
import Projects from "@/components/pages/project/Projects";
import ArrowDown from "@/components/ArrowDown";
import MotionUpDiv from "@/components/MotionUpDiv";
import TypeWriter from "@/components/TypeWriter";
import {pathPrefix} from "@/utils/Constent";
import TypeWriterList from "@/components/pages/TypeWriterList";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActionButton from "@/components/FloatingActionButton";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingShapes from "@/components/FloatingShapes";
import GlassButton from "@/components/GlassButton";

export default function Home() {

    return (<div className="relative">
        
        <ScrollProgress />؛؛؛
        <ParticleBackground />
        <FloatingActionButton onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth'})} />
        
        {/* Hero Section */}
        <section className="header-section flex flex-col justify-between items-end p-10 lg:p-20 relative">
            
            {/* Enhanced booking button */}
            <div className="relative z-10 w-full flex justify-center lg:justify-end">
                <GlassButton 
                    className="w-full lg:w-80 text-xl shadow-2xl mt-32 lg:mt-8 px-12 py-6" 
                    color="primary" 
                    endContent={<CalendarBoldIcon className="text-2xl"/>} 
                    href="https://calendly.com/jrawas2024/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    as={Link}
                >
                    <span className="font-bold">احجز موعد الآن</span>
                </GlassButton>
            </div>

            {/* Main content area */}
            <div className="flex flex-col items-center w-3/4 md:w-1/2 relative z-10">
                {/* Tagline with enhanced styling */}
                <div className="w-full flex justify-end mb-4">
                    <MotionUpDiv className="relative">
                        <div className="relative text-xl md:text-2xl lg:text-3xl px-6 py-3 text-white/95">
                            <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70 rounded-full pointer-events-none"></div>
                            <TypeWriterList startDelay={3500} typingSpeed={100} className="tracking-wide relative z-10" strings={[
                                'الكفاءة والاختصاص',
                                'الامانة والتجرد',
                                'الشفافية',
                                'الاستدامة والابتكار',
                                'التكيف لتبلبة رغبة العملاء',
                                'التوعية والثقافة',
                                'العمل المجتمعي',
                            ]}/>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-secondary/20 blur-xl -z-10 rounded-full"></div>
                    </MotionUpDiv>
                </div>
                
                {/* Floating shapes - NOW ELEGANT AND REAL ESTATE APPROPRIATE! */}
                <FloatingShapes />
                
                {/* Main title with enhanced effects */}
                <MotionUpDiv className="relative mb-8">
                    <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold drop-shadow-2xl">
                        <TypeWriter>
                            رواس
                        </TypeWriter>
                    </h1>
                    {/* Text glow effect */}
                    <div className="absolute inset-0 bg-secondary/30 blur-3xl -z-10"></div>
                </MotionUpDiv>
                
                {/* Subtitle with enhanced positioning and effects */}
                <div className="flex flex-col items-center relative w-full">
                    <MotionUpDiv className="relative">
                        <div className="text-white text-4xl md:text-6xl lg:text-8xl m-1 adam-script-font relative z-10">
                            <TypeWriter startDelay={1000}>
                                أينما حلّت.. حياة
                            </TypeWriter>
                        </div>
                        {/* Enhanced underline with gradient */}
                        <div className="w-full h-6 bg-gradient-to-r from-transparent via-secondary to-transparent shadow-2xl absolute top-6 md:top-10 lg:top-16 -z-10 rounded-full"></div>
                    </MotionUpDiv>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="w-full h-1 flex justify-center text-background drop-shadow-2xl relative z-10">
                <div className="flex  items-center">
                    <ArrowDown className="text-3xl" delay={0}/>
                    <ArrowDown className="text-2xl" delay={0.5}/>
                </div>
            </div>
        </section>

        {/* Projects Section with enhanced styling */}
        <section className="relative w-full flex flex-col justify-center items-center">
            {/* Section background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 w-full">
                <Projects/>
            </div>
            
            {/* Enhanced separator */}
            <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-secondary to-transparent my-8"></div>

            {/* Enhanced view more button */}
            <Button 
                href={pathPrefix + "/projects"} 
                as={Link} 
                className="glass-button backdrop-blur-md bg-primary/80 hover:bg-primary text-white border border-secondary/30 hover:scale-105 transition-all duration-300 shadow-2xl px-12 py-6 text-xl font-bold" 
                color="primary"
            >
                <span className="mr-2">لمشاهدة المزيد</span>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            </Button>
        </section>

        {/* Contact Section */}
        <section className="w-full flex flex-col justify-center items-center">
            <div className="relative z-10 w-full">
                <ContactUs/>
            </div>
        </section>
    </div>);
}
