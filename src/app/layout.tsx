import type {Metadata} from "next";
import {Tajawal} from "next/font/google";
import "./globals.css";
import AppNavBar from "@/components/AppNavBar";
import {NextUIProvider} from "@nextui-org/react";
import AppFooter from "@/components/AppFooter";

const font = Tajawal({subsets: ['arabic', 'latin'], weight: ['200', '300', '400', '500', '700', '800', '900']});

export const metadata: Metadata = {
    title: "Rawas",
    description: "Rawas where ...",
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
