import type {Metadata} from "next";

export const title = "رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤";
export const description = "شركة رواس هي شركة رائدة في مجال التطوير العقاري، حيث تقدم مشاريع مبتكرة وعالية الجودة تلبي احتياجات السوق الفلسطيني. تأسست الشركة في عام 2024، ومنذ ذلك الحين، أصبحت رمزًا للجودة والابتكار في صناعة البناء والتشييد. نحن نؤمن بأهمية تقديم مشاريع تعكس الهوية الفلسطينية وتساهم في تطوير المجتمع المحلي.";
export const siteMediaThump = "https://rawas.ps/images/rawas-flag.svg";
export const baseUrl = "https://rawas.ps";


export const appMetadata: Metadata = {
    title: title,
    description: description,
    keywords: ["شركة رواس", "عقارات فلسطينية", "تطوير رام الله", "عقارات البيرة", "استثمار الضفة الغربية", "Rawas Company", "Palestinian real estate", "Ramallah development", "Al-Bireh properties", "West Bank investment", "real estate innovation", "Palestinian construction"],
    creator: "Amr Rimawi | email:Amr.hRimawi@gmail.com",
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

