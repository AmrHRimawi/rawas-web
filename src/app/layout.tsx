import React from "react";
import {Tajawal} from "next/font/google";
import "./globals.css";
import AppNavBar from "@/components/AppNavBar";
import AppFooter from "@/components/AppFooter";
import {localBusinessJsonLd, organizationJsonLd, websiteJsonLd} from "@/utils/MetadataUtil";
import ClientProviders from "@/components/ClientProviders";

const font = Tajawal({subsets: ['arabic', 'latin'], weight: ['200', '300', '400', '500', '700', '800', '900']});

export const metadata = {
    title: "رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤",
    description: "شركة رواس تقدم مشاريع تطوير عقاري مبتكرة وعالية الجودة تلبي احتياجات السوق الفلسطيني وتحقق تطلعات العملاء وتوفر حلولاً حديثة منذ 2024.",
    keywords: ["شركة رواس", "عقارات فلسطينية", "تطوير رام الله", "عقارات البيرة", "استثمار الضفة الغربية", "Rawas Company", "Palestinian real estate", "Ramallah development", "Al-Bireh properties", "West Bank investment", "real estate innovation", "Palestinian construction"],
    creator: "Amr Rimawi | email:Amr.hRimawi@gmail.com",
    alternates: {
        canonical: "https://rawas.ps",
    },
    openGraph: {
        title: "رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤",
        description: "شركة رواس تقدم مشاريع تطوير عقاري مبتكرة وعالية الجودة تلبي احتياجات السوق الفلسطيني وتحقق تطلعات العملاء وتوفر حلولاً حديثة منذ 2024.",
        url: "https://rawas.ps",
        images: "https://rawas.ps/images/rawas-flag.svg",
        locale: 'ar_PS'
    },
    twitter: {
        title: "رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤",
        description: "شركة رواس تقدم مشاريع تطوير عقاري مبتكرة وعالية الجودة تلبي احتياجات السوق الفلسطيني وتحقق تطلعات العملاء وتوفر حلولاً حديثة منذ 2024.",
        images: "https://rawas.ps/images/rawas-flag.svg",
        card: "summary_large_image",
    }
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ar" className="lite text-foreground bg-background">
        <body className={font.className}>
        <ClientProviders>
            <AppNavBar/>
            {children}
            <AppFooter/>
        </ClientProviders>
        
        {/* Inject structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessJsonLd)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organizationJsonLd)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}/>
        </body>
        </html>
    );
}
