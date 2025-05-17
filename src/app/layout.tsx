import {Tajawal} from "next/font/google";
import "./globals.css";
import AppNavBar from "@/components/AppNavBar";
import {NextUIProvider} from "@nextui-org/react";
import AppFooter from "@/components/AppFooter";
import {appMetadata, localBusinessJsonLd, title} from "@/app/appMetadata";

const font = Tajawal({subsets: ['arabic', 'latin'], weight: ['200', '300', '400', '500', '700', '800', '900']});
export const metadata = appMetadata;

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" className="lite text-foreground bg-background">
        <head>
            {/* Inject LocalBusiness schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessJsonLd)}}
            />
            <title>{title}</title>
        </head>
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
