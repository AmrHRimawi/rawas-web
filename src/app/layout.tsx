import type {Metadata} from "next";
import {Tajawal} from "next/font/google";
import "./globals.css";
import AppNavBar from "@/components/AppNavBar";
import {NextUIProvider} from "@nextui-org/react";
import AppFooter from "@/components/AppFooter";

const font = Tajawal({subsets: ['arabic', 'latin'], weight: ['200', '300', '400', '500', '700', '800', '900']});

let title = "شركة رواس | تطوير عقاري فلسطيني مبتكر منذ عام ٢٠٢٤";
let description = "رائدة مفاهيم جديدة في التطوير العقاري الفلسطيني منذ ٢٠٢٤. اكتشف مشاريعنا في رام الله والضفة الغربية.";
let siteMediaThump = "https://rawas.ps/images/rawas-flag.svg";
export const metadata: Metadata = {
    title: title,
    description: description,
    keywords: ["شركة رواس", "عقارات فلسطينية", "تطوير رام الله", "عقارات البيرة", "استثمار الضفة الغربية", "Rawas Company", "Palestinian real estate", "Ramallah development", "Al-Bireh properties", "West Bank investment", "real estate innovation", "Palestinian construction"],
    creator: "Amr Rimawi | email:Amr.hRimawi@gmail.com",
    openGraph: {
        title: title,
        description: description,
        url: "https://rawas.ps",
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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="lite text-foreground bg-background">
        <body className={font.className}>
        <NextUIProvider>
            <AppNavBar/>
            {children}
            <AppFooter/>
        </NextUIProvider>
        </body>
        </html>
    );
}
