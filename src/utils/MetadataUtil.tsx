import type {Metadata} from "next";

export const title = "رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤";
export const description = "شركة رواس تقدم مشاريع تطوير عقاري مبتكرة وعالية الجودة تلبي احتياجات السوق الفلسطيني وتحقق تطلعات العملاء وتوفر حلولاً حديثة منذ 2024.";
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


export const blogsMetadata: Metadata = {
    title: "مقالات وأخبار رواس | رواس للاستثمار العقاري",
    description: "تابع آخر مقالات وأخبار شركة رواس للاستثمار العقاري في فلسطين، واطلع على تغطيتنا الإعلامية في المواقع الإخبارية ومواقع التواصل الاجتماعي.",
    openGraph: {
        title: "مقالات وأخبار رواس | رواس للاستثمار العقاري",
        description: "تابع آخر مقالات وأخبار شركة رواس للاستثمار العقاري في فلسطين، واطلع على تغطيتنا الإعلامية في المواقع الإخبارية ومواقع التواصل الاجتماعي.",
        url: "https://rawas.ps/blogs",
        images: [
            {
                url: "/images/rawas-flag.svg",
                width: 1200,
                height: 630,
                alt: "شعار رواس"
            }
        ],
        locale: 'ar_PS',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "مقالات وأخبار رواس | رواس للاستثمار العقاري",
        description: "تابع آخر مقالات وأخبار شركة رواس للاستثمار العقاري في فلسطين، واطلع على تغطيتنا الإعلامية في المواقع الإخبارية ومواقع التواصل الاجتماعي.",
        images: [
            "/images/rawas-flag.svg"
        ]
    }
};

export const aboutUsMetadata: Metadata = {
    title: "عن رواس | رؤيتنا ورسالتنا وقيمنا",
    description: "تعرف على شركة رواس للاستثمار العقاري، رؤيتنا، رسالتنا، قيمنا، وأهدافنا في تطوير القطاع العقاري الفلسطيني.",
    openGraph: {
        title: "عن رواس | رؤيتنا ورسالتنا وقيمنا",
        description: "تعرف على شركة رواس للاستثمار العقاري، رؤيتنا، رسالتنا، قيمنا، وأهدافنا في تطوير القطاع العقاري الفلسطيني.",
        url: baseUrl + "/about-us",
        images: [
            {
                url: "/images/rawas-flag.svg",
                width: 1200,
                height: 630,
                alt: "شعار رواس"
            }
        ],
        locale: 'ar_PS',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "عن رواس | رؤيتنا ورسالتنا وقيمنا",
        description: "تعرف على شركة رواس للاستثمار العقاري، رؤيتنا، رسالتنا، قيمنا، وأهدافنا في تطوير القطاع العقاري الفلسطيني.",
        images: [
            "/images/rawas-flag.svg"
        ]
    }
};

export const projectsMetadata: Metadata = {
    title: "مشاريع رواس | مشاريع تطوير عقاري في فلسطين",
    description: "استكشف مشاريع شركة رواس للاستثمار العقاري في فلسطين، مشاريع مكتبية وسكنية حديثة تلبي تطلعات السوق الفلسطيني.",
    openGraph: {
        title: "مشاريع رواس | مشاريع تطوير عقاري في فلسطين",
        description: "استكشف مشاريع شركة رواس للاستثمار العقاري في فلسطين، مشاريع مكتبية وسكنية حديثة تلبي تطلعات السوق الفلسطيني.",
        url: baseUrl + "/projects",
        images: [
            {
                url: "/images/rawas-flag.svg",
                width: 1200,
                height: 630,
                alt: "شعار رواس"
            }
        ],
        locale: 'ar_PS',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "مشاريع رواس | مشاريع تطوير عقاري في فلسطين",
        description: "استكشف مشاريع رواس للاستثمار العقاري في فلسطين، مشاريع مكتبية وسكنية حديثة تلبي تطلعات السوق الفلسطيني.",
        images: [
            "/images/rawas-flag.svg"
        ]
    }
};

export const contactUsMetadata: Metadata = {
    title: "تواصل معنا | رواس للاستثمار العقاري",
    description: "تواصل مع شركة رواس للاستثمار العقاري في فلسطين لأي استفسار أو طلب معلومات حول مشاريعنا وخدماتنا.",
    openGraph: {
        title: "تواصل معنا | رواس للاستثمار العقاري",
        description: "تواصل مع شركة رواس للاستثمار العقاري في فلسطين لأي استفسار أو طلب معلومات حول مشاريعنا وخدماتنا.",
        url: baseUrl + "/contact-us",
        images: [
            {
                url: "/images/rawas-flag.svg",
                width: 1200,
                height: 630,
                alt: "شعار رواس"
            }
        ],
        locale: 'ar_PS',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "تواصل معنا | رواس للاستثمار العقاري",
        description: "تواصل مع شركة رواس للاستثمار العقاري في فلسطين لأي استفسار أو طلب معلومات حول مشاريعنا وخدماتنا.",
        images: [
            "/images/rawas-flag.svg"
        ]
    }
};

export const suppliersMetadata: Metadata = {
    title: "الموردون | رواس للاستثمار العقاري",
    description: "تعرف على الموردين المعتمدين لدى شركة رواس للاستثمار العقاري في فلسطين وتواصل معنا لتصبح موردًا معتمدًا.",
    openGraph: {
        title: "الموردون | رواس للاستثمار العقاري",
        description: "تعرف على الموردين المعتمدين لدى شركة رواس للاستثمار العقاري في فلسطين وتواصل معنا لتصبح موردًا معتمدًا.",
        url: baseUrl + "/suppliers",
        images: [
            {
                url: "/images/rawas-flag.svg",
                width: 1200,
                height: 630,
                alt: "شعار رواس"
            }
        ],
        locale: 'ar_PS',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "الموردون | رواس للاستثمار العقاري",
        description: "تعرف على الموردين المعتمدين لدى شركة رواس للاستثمار العقاري في فلسطين وتواصل معنا لتصبح موردًا معتمدًا.",
        images: [
            "/images/rawas-flag.svg"
        ]
    }
};

export const consultantsMetadata: Metadata = {
    title: "مستشارونا | رواس للاستثمار العقاري",
    description: "تعرف على مستشاري شركة رواس للاستثمار العقاري واطلب الانضمام إلى فريق المستشارين لدينا.",
    openGraph: {
        title: "مستشارونا | رواس للاستثمار العقاري",
        description: "تعرف على مستشاري شركة رواس للاستثمار العقاري واطلب الانضمام إلى فريق المستشارين لدينا.",
        url: baseUrl + "/consultants",
        images: [
            {
                url: "/images/rawas-flag.svg",
                width: 1200,
                height: 630,
                alt: "شعار رواس"
            }
        ],
        locale: 'ar_PS',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "مستشارونا | رواس للاستثمار العقاري",
        description: "تعرف على مستشاري شركة رواس للاستثمار العقاري واطلب الانضمام إلى فريق المستشارين لدينا.",
        images: [
            "/images/rawas-flag.svg"
        ]
    }
};

export function projectMetadata(id: string): Metadata {
    return {
        title: `مشروع رواس ${id} | تفاصيل المشروع والاستثمار العقاري في فلسطين`,
        description: `تعرف على تفاصيل مشروع رواس رقم ${id}، مميزاته، موقعه، وخيارات الاستثمار العقاري في فلسطين مع شركة رواس للاستثمار العقاري.`,
        openGraph: {
            title: `مشروع رواس ${id} | تفاصيل المشروع والاستثمار العقاري في فلسطين`,
            description: `تعرف على تفاصيل مشروع رواس رقم ${id}، مميزاته، موقعه، وخيارات الاستثمار العقاري في فلسطين مع شركة رواس للاستثمار العقاري.`,
            url: `${baseUrl}/projects/${id}`,
            images: [
                {
                    url: "/images/rawas-flag.svg",
                    width: 1200,
                    height: 630,
                    alt: "شعار رواس"
                }
            ],
            locale: 'ar_PS',
            type: 'website',
        },
        twitter: {
            card: "summary_large_image",
            title: `مشروع رواس ${id} | تفاصيل المشروع والاستثمار العقاري في فلسطين`,
            description: `تعرف على تفاصيل مشروع رواس رقم ${id}، مميزاته، موقعه، وخيارات الاستثمار العقاري في فلسطين مع شركة رواس للاستثمار العقاري.`,
            images: [
                "/images/rawas-flag.svg"
            ]
        }
    };
}
