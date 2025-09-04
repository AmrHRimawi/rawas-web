"use client";

import React from 'react';
import Head from 'next/head';
import { 
    localBusinessJsonLd, 
    organizationJsonLd, 
    websiteJsonLd,
    projectJsonLd,
    breadcrumbJsonLd
} from '@/utils/MetadataUtil';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    structuredData?: any[];
    noindex?: boolean;
    nofollow?: boolean;
    children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    keywords = [],
    canonical,
    ogImage = "/images/rawas-flag.svg",
    ogType = "website",
    twitterCard = "summary_large_image",
    structuredData = [],
    noindex = false,
    nofollow = false,
    children
}) => {
    const fullTitle = title ? `${title} | رواس للاستثمار العقاري` : "رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤";
    const fullDescription = description || "شركة رواس تقدم مشاريع تطوير عقاري مبتكرة وعالية الجودة تلبي احتياجات السوق الفلسطيني وتحقق تطلعات العملاء وتوفر حلولاً حديثة منذ 2024.";
    const fullCanonical = canonical || "https://rawas.ps";
    
    // Default structured data
    const defaultStructuredData = [
        localBusinessJsonLd,
        organizationJsonLd,
        websiteJsonLd,
        ...structuredData
    ];

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="author" content="رواس للاستثمار العقاري" />
            <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={fullCanonical} />
            
            {/* Language and Region */}
            <meta name="language" content="Arabic" />
            <meta name="geo.region" content="PS" />
            <meta name="geo.placename" content="رام الله، البيرة" />
            <meta name="geo.position" content="31.923971;35.213833" />
            <meta name="ICBM" content="31.923971, 35.213833" />
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={`https://rawas.ps${ogImage}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:site_name" content="رواس للاستثمار العقاري" />
            <meta property="og:locale" content="ar_PS" />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:site" content="@rawasps" />
            <meta name="twitter:creator" content="@rawasps" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:image" content={`https://rawas.ps${ogImage}`} />
            <meta name="twitter:image:alt" content={fullTitle} />
            
            {/* Additional Meta Tags for SEO */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#1e40af" />
            <meta name="msapplication-TileColor" content="#1e40af" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="رواس" />
            
            {/* Dublin Core Meta Tags */}
            <meta name="DC.title" content={fullTitle} />
            <meta name="DC.description" content={fullDescription} />
            <meta name="DC.subject" content="Real Estate, Construction, Investment" />
            <meta name="DC.creator" content="رواس للاستثمار العقاري" />
            <meta name="DC.publisher" content="رواس للاستثمار العقاري" />
            <meta name="DC.date.created" content="2024-01-01" />
            <meta name="DC.date.modified" content={new Date().toISOString().split('T')[0]} />
            <meta name="DC.language" content="ar" />
            <meta name="DC.coverage" content="فلسطين، رام الله، البيرة" />
            <meta name="DC.rights" content="© 2024 رواس للاستثمار العقاري. جميع الحقوق محفوظة." />
            
            {/* Favicon and App Icons */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            
            {/* Preconnect to external domains for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            
            {/* Structured Data */}
            {defaultStructuredData.map((data, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(data)
                    }}
                />
            ))}
            
            {/* Custom children for additional meta tags */}
            {children}
        </Head>
    );
};

export default SEOHead;
