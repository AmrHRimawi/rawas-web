import React from "react";
import {Tajawal} from "next/font/google";
import "./globals.css";
import AppNavBar from "@/components/AppNavBar";
import AppFooter from "@/components/AppFooter";
import {localBusinessJsonLd, organizationJsonLd, websiteJsonLd, appMetadata} from "@/utils/MetadataUtil";
import ClientProviders from "@/components/ClientProviders";

const font = Tajawal({subsets: ['arabic', 'latin'], weight: ['200', '300', '400', '500', '700', '800', '900']});

export const metadata = appMetadata;

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ar" className="lite text-foreground bg-background">
        <body className={font.className}>
        <ClientProviders>
            <AppNavBar/>
            {children}
            <div className="w-full h-28"/>
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
