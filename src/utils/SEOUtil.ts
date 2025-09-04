// SEO Utility Functions for Rawas Application

import { Metadata } from 'next';
import { 
    enhancedKeywords, 
    baseUrl, 
    enhancedOpenGraph, 
    enhancedTwitterCard,
    localBusinessJsonLd,
    organizationJsonLd,
    websiteJsonLd
} from './MetadataUtil';

// SEO Score Calculator
export interface SEOScore {
    score: number;
    grade: 'A' | 'B' | 'C' | 'D' | 'F';
    issues: string[];
    recommendations: string[];
}

export function calculateSEOScore(metadata: Partial<Metadata>): SEOScore {
    let score = 100;
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check title
    if (!metadata.title) {
        score -= 20;
        issues.push('Missing title tag');
        recommendations.push('Add a descriptive title tag');
    } else if (typeof metadata.title === 'string' && metadata.title.length < 30) {
        score -= 10;
        issues.push('Title too short');
        recommendations.push('Title should be 30-60 characters');
    } else if (typeof metadata.title === 'string' && metadata.title.length > 60) {
        score -= 10;
        issues.push('Title too long');
        recommendations.push('Title should be 30-60 characters');
    }

    // Check description
    if (!metadata.description) {
        score -= 20;
        issues.push('Missing description');
        recommendations.push('Add a meta description');
    } else if (typeof metadata.description === 'string' && metadata.description.length < 120) {
        score -= 10;
        issues.push('Description too short');
        recommendations.push('Description should be 120-160 characters');
    } else if (typeof metadata.description === 'string' && metadata.description.length > 160) {
        score -= 10;
        issues.push('Description too long');
        recommendations.push('Description should be 120-160 characters');
    }

    // Check keywords
    if (!metadata.keywords || (Array.isArray(metadata.keywords) && metadata.keywords.length === 0)) {
        score -= 5;
        issues.push('Missing keywords');
        recommendations.push('Add relevant keywords');
    }

    // Check Open Graph
    if (!metadata.openGraph) {
        score -= 15;
        issues.push('Missing Open Graph tags');
        recommendations.push('Add Open Graph meta tags for social sharing');
    }

    // Check Twitter Cards
    if (!metadata.twitter) {
        score -= 10;
        issues.push('Missing Twitter Card tags');
        recommendations.push('Add Twitter Card meta tags');
    }

    // Determine grade
    let grade: 'A' | 'B' | 'C' | 'D' | 'F';
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else grade = 'F';

    return { score, grade, issues, recommendations };
}

// Generate structured data for different page types
export function generateStructuredData(pageType: string, data: any = {}) {
    const baseData = [
        localBusinessJsonLd,
        organizationJsonLd,
        websiteJsonLd
    ];

    switch (pageType) {
        case 'home':
            return [
                ...baseData,
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": `${baseUrl}#webpage`,
                    "name": "رواس للاستثمار العقاري",
                    "description": "شركة رواس تقدم مشاريع تطوير عقاري مبتكرة وعالية الجودة",
                    "url": baseUrl,
                    "isPartOf": {
                        "@type": "WebSite",
                        "@id": `${baseUrl}#website`
                    },
                    "about": {
                        "@type": "Organization",
                        "@id": `${baseUrl}#organization`
                    }
                }
            ];

        case 'project':
            return [
                ...baseData,
                {
                    "@context": "https://schema.org",
                    "@type": "RealEstateListing",
                    "name": data.name || "مشروع رواس",
                    "description": data.description || "مشروع عقاري في فلسطين",
                    "url": `${baseUrl}/projects/${data.id}`,
                    "image": `${baseUrl}/images/projects/${data.id}/thumb.jpeg`,
                    "provider": {
                        "@type": "Organization",
                        "@id": `${baseUrl}#organization`
                    }
                }
            ];

        case 'about':
            return [
                ...baseData,
                {
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "عن رواس",
                    "description": "تعرف على شركة رواس للاستثمار العقاري",
                    "url": `${baseUrl}/about-us`,
                    "about": {
                        "@type": "Organization",
                        "@id": `${baseUrl}#organization`
                    }
                }
            ];

        case 'contact':
            return [
                ...baseData,
                {
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "تواصل معنا",
                    "description": "تواصل مع شركة رواس للاستثمار العقاري",
                    "url": `${baseUrl}/contact-us`,
                    "mainEntity": {
                        "@type": "Organization",
                        "@id": `${baseUrl}#organization`
                    }
                }
            ];

        default:
            return baseData;
    }
}

// Generate breadcrumb structured data
export function generateBreadcrumbs(items: Array<{name: string, url: string}>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
        }))
    };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

// Generate review structured data
export function generateReviewStructuredData(reviews: Array<{
    author: string,
    rating: number,
    reviewBody: string,
    datePublished: string
}>) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}#organization`,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
            "reviewCount": reviews.length
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": 5
            },
            "reviewBody": review.reviewBody,
            "datePublished": review.datePublished
        }))
    };
}

// Generate article structured data for blogs
export function generateArticleStructuredData(article: {
    title: string,
    description: string,
    content: string,
    author: string,
    datePublished: string,
    dateModified: string,
    image?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.description,
        "image": article.image ? `${baseUrl}${article.image}` : `${baseUrl}/images/rawas-flag.svg`,
        "author": {
            "@type": "Person",
            "name": article.author
        },
        "publisher": {
            "@type": "Organization",
            "@id": `${baseUrl}#organization`
        },
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/blogs`
        }
    };
}

// SEO optimization helpers
export function optimizeTitle(title: string, maxLength: number = 60): string {
    if (title.length <= maxLength) return title;
    
    // Try to cut at word boundary
    const words = title.split(' ');
    let optimized = '';
    
    for (const word of words) {
        if ((optimized + ' ' + word).length <= maxLength) {
            optimized += (optimized ? ' ' : '') + word;
        } else {
            break;
        }
    }
    
    return optimized || title.substring(0, maxLength - 3) + '...';
}

export function optimizeDescription(description: string, maxLength: number = 160): string {
    if (description.length <= maxLength) return description;
    
    // Try to cut at sentence boundary
    const sentences = description.split(/[.!?]/);
    let optimized = '';
    
    for (const sentence of sentences) {
        if ((optimized + sentence + '.').length <= maxLength) {
            optimized += sentence + '.';
        } else {
            break;
        }
    }
    
    return optimized || description.substring(0, maxLength - 3) + '...';
}

// Generate meta tags for social sharing
export function generateSocialMetaTags(data: {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
}) {
    const {
        title,
        description,
        image = '/images/rawas-flag.svg',
        url = baseUrl,
        type = 'website'
    } = data;

    return {
        // Open Graph
        'og:title': title,
        'og:description': description,
        'og:image': `${baseUrl}${image}`,
        'og:url': url,
        'og:type': type,
        'og:site_name': 'رواس للاستثمار العقاري',
        'og:locale': 'ar_PS',
        
        // Twitter
        'twitter:card': 'summary_large_image',
        'twitter:site': '@rawasps',
        'twitter:creator': '@rawasps',
        'twitter:title': title,
        'twitter:description': description,
        'twitter:image': `${baseUrl}${image}`,
        
        // Additional
        'twitter:image:alt': title,
        'og:image:alt': title
    };
}

// Export all utilities
export default {
    calculateSEOScore,
    generateStructuredData,
    generateBreadcrumbs,
    generateFAQStructuredData,
    generateReviewStructuredData,
    generateArticleStructuredData,
    optimizeTitle,
    optimizeDescription,
    generateSocialMetaTags
};
