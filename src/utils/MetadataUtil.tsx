import type {Metadata} from "next";

export const title = "رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤";
export const description = "شركة رواس تقدم مشاريع تطوير عقاري مبتكرة وعالية الجودة تلبي احتياجات السوق الفلسطيني وتحقق تطلعات العملاء وتوفر حلولاً حديثة منذ 2024.";
export const baseUrl = "https://rawas.ps";
export const siteMediaThump = baseUrl + "/images/rawas-flag.svg";
export const telephone = "0593330060, 0593330066, 022422766";

// Enhanced keywords for better SEO targeting
export const enhancedKeywords = [
    // Arabic keywords
    "شركة رواس", "عقارات فلسطينية", "تطوير رام الله", "عقارات البيرة", 
    "استثمار الضفة الغربية", "بناء فلسطين", "عقارات رام الله", "عقارات البيرة",
    "استثمار عقاري فلسطين", "تطوير عقاري", "شركة بناء فلسطينية", "مشاريع عقارية",
    "عقارات للبيع فلسطين", "عقارات للإيجار فلسطين", "استثمار فلسطين", "بناء في فلسطين",
    
    // English keywords
    "Rawas Company", "Palestinian real estate", "Ramallah development", "Al-Bireh properties", 
    "West Bank investment", "real estate innovation", "Palestinian construction", "building Palestine",
    "real estate investment Palestine", "property development", "construction company Palestine",
    "real estate projects", "properties for sale Palestine", "properties for rent Palestine",
    "investment Palestine", "building in Palestine", "Palestinian real estate company",
    
    // Local market keywords
    "عقارات الكرمل", "عقارات البالوع", "عقارات اسطنبول", "عقارات رام الله الجديدة",
    "Karamel properties", "Baloua properties", "Istanbul properties", "New Ramallah properties"
];

// Enhanced Open Graph configuration
export const enhancedOpenGraph = {
    type: 'website',
    locale: 'ar_PS',
    siteName: 'رواس للاستثمار العقاري',
    images: [
        {
            url: "/images/rawas-flag.svg",
            width: 1200,
            height: 630,
            alt: "شعار رواس للاستثمار العقاري",
            type: 'image/svg+xml'
        },
        {
            url: "/images/rawas-logo.svg",
            width: 800,
            height: 800,
            alt: "شعار رواس",
            type: 'image/svg+xml'
        }
    ]
};

// Enhanced Twitter Card configuration
export const enhancedTwitterCard = {
    card: "summary_large_image",
    site: "@rawasps",
    creator: "@rawasps",
    images: ["/images/rawas-flag.svg"]
};

export const appMetadata: Metadata = {
    title: title,
    metadataBase: new URL(baseUrl),
    description: description,
    keywords: enhancedKeywords,
    creator: "Amr Rimawi | email:Amr.hRimawi@gmail.com",
    authors: [{ name: "Amr Rimawi" }],
    publisher: "رواس للاستثمار العقاري",
    category: "Real Estate",
    classification: "Business",
    alternates: {
        canonical: baseUrl,
        languages: {
            'ar-PS': baseUrl,
            'en-US': baseUrl + '/en'
        }
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
    openGraph: {
        ...enhancedOpenGraph,
        title: title,
        description: description,
        url: baseUrl,
    },
    twitter: {
        ...enhancedTwitterCard,
        title: title,
        description: description,
    },
    other: {
        'geo.region': 'PS',
        'geo.placename': 'رام الله، البيرة',
        'geo.position': '31.923971;35.213833',
        'ICBM': '31.923971, 35.213833',
        'DC.title': title,
        'DC.description': description,
        'DC.subject': 'Real Estate, Construction, Investment',
        'DC.creator': 'Amr Rimawi',
        'DC.publisher': 'رواس للاستثمار العقاري',
        'DC.date.created': '2024-01-01',
        'DC.date.modified': new Date().toISOString().split('T')[0],
        'DC.language': 'ar',
        'DC.coverage': 'فلسطين، رام الله، البيرة',
        'DC.rights': '© 2024 رواس للاستثمار العقاري. جميع الحقوق محفوظة.',
    }
};

// Enhanced LocalBusiness schema with more details
export const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl + "#organization",
    "name": "رواس للاستثمار العقاري",
    "alternateName": "Rawas Real Estate Investment Company",
    "description": description,
    "url": baseUrl,
    "logo": {
        "@type": "ImageObject",
        "url": siteMediaThump,
        "width": 1200,
        "height": 630
    },
    "image": siteMediaThump,
    "telephone": telephone,
    "email": "info@rawas.ps",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "البالوع،عمارة اسطنبول،ط3",
        "addressLocality": "رام الله، البيرة",
        "addressRegion": "فلسطين",
        "postalCode": "00970",
        "addressCountry": "PS",
        "addressCountryName": "Palestine"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.923971",
        "longitude": "35.213833",
        "name": "رواس للاستثمار العقاري"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00",
        "validFrom": "2024-01-01",
        "validThrough": "2024-12-31"
    },
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "0593330060",
            "contactType": "customer service",
            "areaServed": "PS",
            "availableLanguage": ["Arabic", "English"]
        },
        {
            "@type": "ContactPoint",
            "telephone": "0593330066",
            "contactType": "customer service",
            "areaServed": "PS",
            "availableLanguage": ["Arabic", "English"]
        },
        {
            "@type": "ContactPoint",
            "telephone": "022422766",
            "contactType": "customer service",
            "areaServed": "PS",
            "availableLanguage": ["Arabic", "English"]
        }
    ],
    "sameAs": [
        "https://www.facebook.com/rawasps",
        "https://www.instagram.com/rawas.ps",
        "https://t.me/rawasplus",
        "https://whatsapp.com/channel/0029VaZdaOx7j6fzk3ZH1x0q",
        "https://youtube.com/@rawasplus",
        "https://www.linkedin.com/company/رواس-للاسثمار-العقاري"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "مشاريع رواس العقارية",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "تطوير عقاري",
                    "description": "تطوير مشاريع عقارية مبتكرة في فلسطين"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "استثمار عقاري",
                    "description": "خدمات الاستثمار العقاري في الضفة الغربية"
                }
            }
        ]
    },
    "areaServed": {
        "@type": "Country",
        "name": "Palestine",
        "sameAs": "https://en.wikipedia.org/wiki/Palestine"
    },
    "serviceArea": {
        "@type": "Place",
        "name": "رام الله والبيرة",
        "description": "منطقة رام الله والبيرة في الضفة الغربية"
    },
    "foundingDate": "2024-01-01",
    "foundingLocation": {
        "@type": "Place",
        "name": "رام الله، فلسطين"
    },
    "numberOfEmployees": "10-50",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Bank Transfer", "Check"],
    "currenciesAccepted": ["ILS", "USD", "EUR"],
    "availableLanguage": ["Arabic", "English"]
};

// Enhanced RealEstateListing schema for projects
export function projectJsonLd(id: string, projectName: string, projectDescription: string, projectLocation: string) {
    return {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "@id": `${baseUrl}/projects/${id}#realestate`,
        "name": projectName,
        "description": projectDescription,
        "url": `${baseUrl}/projects/${id}`,
        "image": [
            `${baseUrl}/images/projects/${id}/thumb.jpeg`,
            `${baseUrl}/images/projects/${id}/1.jpeg`
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": projectLocation,
            "addressRegion": "فلسطين",
            "addressCountry": "PS"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "31.923971",
            "longitude": "35.213833"
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "ILS",
            "price": "1000000",
            "seller": {
                "@type": "LocalBusiness",
                "name": "رواس للاستثمار العقاري",
                "url": baseUrl
            }
        },
        "provider": {
            "@type": "LocalBusiness",
            "name": "رواس للاستثمار العقاري",
            "url": baseUrl
        },
        "category": "Real Estate",
        "propertyType": "Residential",
        "floorSize": {
            "@type": "QuantitativeValue",
            "value": "150",
            "unitCode": "MTK"
        },
        "numberOfRooms": "3",
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "مطعم",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "مدرسة",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "مستشفى",
                "value": true
            }
        ]
    };
}

// Breadcrumb schema for navigation
export function breadcrumbJsonLd(items: Array<{name: string, url: string}>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

// Organization schema for company
export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": baseUrl + "#organization",
    "name": "رواس للاستثمار العقاري",
    "alternateName": "Rawas Real Estate Investment Company",
    "description": description,
    "url": baseUrl,
    "logo": {
        "@type": "ImageObject",
        "url": siteMediaThump,
        "width": 1200,
        "height": 630
    },
    "image": siteMediaThump,
    "sameAs": [
        "https://www.facebook.com/rawasps",
        "https://www.instagram.com/rawas.ps",
        "https://t.me/rawasplus",
        "https://whatsapp.com/channel/0029VaZdaOx7j6fzk3ZH1x0q",
        "https://youtube.com/@rawasplus",
        "https://www.linkedin.com/company/رواس-للاسثمار-العقاري"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": telephone,
        "contactType": "customer service",
        "areaServed": "PS",
        "availableLanguage": ["Arabic", "English"]
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "البالوع،عمارة اسطنبول،ط3",
        "addressLocality": "رام الله، البيرة",
        "addressRegion": "فلسطين",
        "postalCode": "00970",
        "addressCountry": "PS"
    },
    "foundingDate": "2024-01-01",
    "areaServed": "PS"
};

// WebSite schema
export const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": baseUrl + "#website",
    "name": "رواس للاستثمار العقاري",
    "description": description,
    "url": baseUrl,
    "publisher": {
        "@type": "Organization",
        "name": "رواس للاستثمار العقاري"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": baseUrl + "/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    },
    "inLanguage": "ar-PS",
    "isAccessibleForFree": true
};

// Enhanced metadata functions with better SEO
export function createPageMetadata(
    pageTitle: string,
    pageDescription: string,
    pageUrl: string,
    pageImage?: string,
    pageType: string = 'website'
): Metadata {
    const fullTitle = `${pageTitle} | رواس`;
    const fullUrl = pageUrl.startsWith('http') ? pageUrl : baseUrl + pageUrl;
    const imageUrl = pageImage || "/images/rawas-flag.svg";
    
    return {
        title: fullTitle,
        description: pageDescription,
        keywords: enhancedKeywords,
        alternates: {
            canonical: fullUrl,
        },
        openGraph: {
            ...enhancedOpenGraph,
            title: fullTitle,
            description: pageDescription,
            url: fullUrl,
            type: pageType as "website" | "article",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: pageTitle,
                }
            ]
        },
        twitter: {
            ...enhancedTwitterCard,
            title: fullTitle,
            description: pageDescription,
            images: [imageUrl]
        }
    };
}

// Rest of the existing metadata functions with enhanced SEO...
export const blogsMetadata: Metadata = createPageMetadata(
    "مقالات وأخبار رواس",
    "تابع آخر مقالات وأخبار شركة رواس للاستثمار العقاري في فلسطين، واطلع على تغطيتنا الإعلامية في المواقع الإخبارية ومواقع التواصل الاجتماعي.",
    "/blogs"
);

export const aboutUsMetadata: Metadata = createPageMetadata(
    "عن رواس | رؤيتنا ورسالتنا وقيمنا",
    "تعرف على شركة رواس للاستثمار العقاري في فلسطين، رؤيتنا في تطوير القطاع العقاري، رسالتنا في خدمة المجتمع، وقيمنا الأساسية في الابتكار والاستدامة والجودة العالية.",
    "/about-us"
);

export const projectsMetadata: Metadata = createPageMetadata(
    "مشاريع رواس",
    "استكشف مشاريع شركة رواس للاستثمار العقاري في فلسطين، مشاريع مكتبية وسكنية حديثة تلبي تطلعات السوق الفلسطيني وتوفر حلولاً مبتكرة للاستثمار العقاري.",
    "/projects"
);

export const contactUsMetadata: Metadata = createPageMetadata(
    "تواصل مع رواس",
    "تواصل مع شركة رواس للاستثمار العقاري في فلسطين لأي استفسار أو طلب معلومات حول مشاريعنا وخدماتنا. نحن هنا لمساعدتك في كل ما تحتاجه.",
    "/contact-us"
);

export const suppliersMetadata: Metadata = createPageMetadata(
    "الموردون | رواس للاستثمار العقاري",
    "تعرف على الموردين المعتمدين لدى شركة رواس للاستثمار العقاري في فلسطين وتواصل معنا لتصبح موردًا معتمدًا.",
    "/suppliers"
);

export const consultantsMetadata: Metadata = createPageMetadata(
    "مستشارونا | رواس للاستثمار العقاري",
    "تعرف على مستشاري شركة رواس للاستثمار العقاري واطلب الانضمام إلى فريق المستشارين لدينا.",
    "/consultants"
);

export function projectMetadata(id: string): Metadata {
    return createPageMetadata(
        `مشروع رواس ${id}`,
        `تعرف على تفاصيل مشروع رواس رقم ${id}، مميزاته، موقعه، وخيارات الاستثمار العقاري في فلسطين مع شركة رواس للاستثمار العقاري.`,
        `/projects/${id}`
    );
}
