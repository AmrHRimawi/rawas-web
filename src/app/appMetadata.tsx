import type {Metadata} from "next";

export const title = "رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤";
export const description = "شركة رواس هي شركة رائدة في مجال التطوير العقاري، حيث تقدم مشاريع مبتكرة وعالية الجودة تلبي احتياجات السوق الفلسطيني. تأسست الشركة في عام 2024، ومنذ ذلك الحين، أصبحت رمزًا للجودة والابتكار في صناعة البناء والتشييد. نحن نؤمن بأهمية تقديم مشاريع تعكس الهوية الفلسطينية وتساهم في تطوير المجتمع المحلي.";
export const baseUrl = "https://rawas.ps";
export const siteMediaThump = baseUrl + "/images/rawas-flag.svg";
export const telephone = "0593330060, 0593330066, 022422766";


export const appMetadata: Metadata = {
    title: title,
    metadataBase: new URL(baseUrl),
    description: description,
    keywords: ["شركة رواس", "عقارات فلسطينية", "تطوير رام الله", "عقارات البيرة", "استثمار الضفة الغربية", "Rawas Company", "Palestinian real estate", "Ramallah development", "Al-Bireh properties", "West Bank investment", "real estate innovation", "Palestinian construction"],
    creator: "Amr Rimawi | email:Amr.hRimawi@gmail.com",
    alternates: {
        canonical: baseUrl,
    },
    openGraph: {
        title: title,
        description: description,
        url: baseUrl,
        images: siteMediaThump,
        locale: 'ar_PS'
    },
    twitter: {
        title: title,
        description: description,
        images: siteMediaThump,
        card: "summary",
    }
};

export const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": title,
    "image": siteMediaThump,
    "telephone": telephone,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "البالوع،عمارة اسطنبول،ط3",
        "addressLocality": "رام الله، البيرة",
        "addressRegion": "فلسطين",
        "postalCode": "00970",
        "addressCountry": "PS",

    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.923971",
        "longitude": "35.213833",
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00",
    },
};
