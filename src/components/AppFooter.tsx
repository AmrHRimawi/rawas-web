"use client";

import React from "react";
import {Link} from "@nextui-org/react";
import {navLinks, pathPrefix, secondary, socials} from "@/utils/Constent";
import MotionEndDiv from "@/components/MotionEndDiv";
import Image from "next/image";
import SourceIconLink from "@/components/SourceIconLink";
import SourceIconText from "@/components/SourceIconText";
import { cn } from "@/utils/TailwindUtil";

export default function AppFooter() {
    return (
        <footer className=" w-full bg-gradient-to-b from-primary to-primary/90 text-primary-foreground" role="contentinfo">

            {/* Main Footer Content */}
            <div className="flex flex-col justify-between items-center px-6 lg:px-12 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 max-w-7xl mx-auto justify-center lg:items-end">
                    {/* Company Info with Logo */}
                    <div className="lg:justify-self-center space-y-6">
                        {/* Logo positioned above company info */}
                        <div className="flex justify-center lg:justify-start relative">
                            <div className="h-24"/>
                            <MotionEndDiv className="absolute -top-8">
                                <Link 
                                    href="/"
                                    className="bg-primary-foreground p-5 -translate-y-28 shadow-2xl border-t-4 border-secondary rounded-full hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary block opacity-100 hover:opacity-100"
                                    aria-label="العودة إلى الصفحة الرئيسية"
                                >
                                    <Image width={200} height={200} src={pathPrefix + "/images/rawas-logo.svg"} alt="رواس - شعار الشركة" priority={false} className="rounded-full"/>
                                </Link>
                            </MotionEndDiv>
                        </div>
                        <div className="h-8"/>
                        {/* Company Info */}
                        <MotionEndDiv>
                            <p className="text-xl leading-relaxed text-primary-foreground/90">
                                نسعى لتكون رواس الخيار الأول في الاستثمار والامتلاك والتطوير العقاري في فلسطين، وأن تصبح الرائدة في استقطاب الطاقات البشرية الفلسطينية لتقدم أضخم منصة للتوعية في الاستثمار العقاري الفلسطيني
                            </p>
                        </MotionEndDiv>
                        
                        <MotionEndDiv className="my-2">
                            <p className="text-secondary text-3xl lg:text-4xl drop-shadow-xl adam-script-font">
                                أينما حلّت.. حياة
                            </p>
                        </MotionEndDiv>
                        <MotionEndDiv>
                            <div className="flex justify-center lg:justify-start gap-3">
                                {socials().map(social => (
                                    <SourceIconLink 
                                        key={social.name} 
                                        src={social.src} 
                                        link={social.link} 
                                        alt={social.name} 
                                        color={secondary[300]}
                                        title={`تواصل معنا عبر ${social.name}`}
                                    />
                                ))}
                            </div>
                        </MotionEndDiv>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-1 justify-self-center w-full lg:w-auto">
                        <div className="h-12"/>
                        <MotionEndDiv>
                            <h3 className="text-2xl font-semibold text-secondary mb-4">روابط مهمة</h3>
                        </MotionEndDiv>
                        
                        <nav aria-label="footer-navigation">
                            <ul className="space-y-3">
                                {navLinks.map((item) => (
                                    <li key={item.link}>
                                        <MotionEndDiv>
                                            <Link 
                                                className={cn(
                                                    "text-lg text-primary-foreground/80 hover:text-secondary transition-colors duration-200 inline-flex items-center gap-2 group"
                                                )} 
                                                href={item.link}
                                            >
                                                <span className="w-6 h-6 text-secondary/60 group-hover:text-secondary transition-colors">
                                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                {item.name}
                                            </Link>
                                        </MotionEndDiv>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Info and opening hours*/}
                    <div className="space-y-1 lg:justify-self-end">
                        <div className="h-12"/>
                        <MotionEndDiv>
                            <h3 className="text-2xl font-semibold text-secondary mb-4">معلومات رواس</h3>
                        </MotionEndDiv>
                        
                        {/* Contact Info */}
                        <div className="space-y-4 text-start flex flex-col justify-start">
                            <MotionEndDiv>
                                <Link href="tel:0593330060" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors duration-200 block text-start">
                                    <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="هاتف" className="w-fit">0593330060</SourceIconText>
                                </Link>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <Link href="tel:0593330066" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors duration-200 block text-start">
                                    <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="هاتف">0593330066</SourceIconText>
                                </Link>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <Link href="tel:022422766" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors duration-200 block text-start">
                                    <SourceIconText src={pathPrefix + "/icons/rotary-telphone.svg"} alt="هاتف أرضي">022422766</SourceIconText>
                                </Link>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <Link href="mailto:info@rawas.ps" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors duration-200 block text-start">
                                    <SourceIconText src={pathPrefix + "/icons/mail.svg"} alt="بريد إلكتروني">info@rawas.ps</SourceIconText>
                                </Link>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <div className="text-lg text-primary-foreground/80 text-start">
                                    <SourceIconText src={pathPrefix + "/icons/map-pin.svg"} alt="العنوان">رام الله، البيرة، البالوع،عمارة اسطنبول،ط3</SourceIconText>
                                </div>
                            </MotionEndDiv>
                        </div>
                        
                        <div className="h-10"/>

                        {/* Opening hours */}
                        <div className="space-y-3 pt-4 text-start">
                            <MotionEndDiv>
                                <h4 className="text-xl font-semibold text-secondary text-start">أوقات الدوام</h4>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <p className="text-lg text-primary-foreground/80 text-start">السبت - الخميس (8:00ص -6:00م)</p>
                            </MotionEndDiv>
                            <MotionEndDiv>
                                <p className="text-lg text-primary-foreground/80 text-start">الجمعة عطلة رسمية</p>
                            </MotionEndDiv>
                        </div>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="w-full border-t border-primary-foreground/20 mt-12 pt-6">
                    <MotionEndDiv>
                        <p className="text-center lg:text-start text-primary-foreground/70 text-base">
                            حقوق الطبع والنشر 2024 © جميع الحقوق محفوظة - التصميم بواسطة رواس
                        </p>
                    </MotionEndDiv>
                </div>
            </div>
        </footer>
    );

}
