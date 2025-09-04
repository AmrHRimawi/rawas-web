import React from "react";
import {Tajawal} from "next/font/google";
import "./globals.css";
import AppNavBar from "@/components/AppNavBar";
import {NextUIProvider} from "@nextui-org/react";
import AppFooter from "@/components/AppFooter";
import {appMetadata, localBusinessJsonLd} from "@/utils/MetadataUtil";
import PerformanceDashboard from "@/components/PerformanceDashboard";

const font = Tajawal({subsets: ['arabic', 'latin'], weight: ['200', '300', '400', '500', '700', '800', '900']});
export const metadata = appMetadata;

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ar" className="lite text-foreground bg-background">
        <body className={font.className}>
        <NextUIProvider>
            <AppNavBar/>
            {children}
            <AppFooter/>
            
            {/* Performance Dashboard - Only show in development */}
            {process.env.NODE_ENV }
            {process.env.NODE_ENV === 'development' && (
                <PerformanceDashboard show={true} />
            )}
        </NextUIProvider>
        {/* Inject LocalBusiness schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessJsonLd)}}/>
        
        {/* Performance Monitoring Script */}
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    // Initialize performance monitoring safely
                    if (typeof window !== 'undefined') {
                        window.addEventListener('load', () => {
                            // Import performance monitoring dynamically
                            import('/src/utils/PerformanceUtil.js').then(({ performanceMonitor }) => {
                                // Log performance metrics after page load
                                setTimeout(() => {
                                    try {
                                        const metrics = performanceMonitor.getMetrics();
                                        const score = performanceMonitor.getPerformanceScore();
                                        console.log('Final Performance Metrics:', metrics);
                                        console.log('Performance Score:', score);
                                    } catch (error) {
                                        console.log('Performance monitoring not available:', error);
                                    }
                                }, 1000);
                            }).catch(error => {
                                console.log('Performance monitoring module not found:', error);
                            });
                        });
                    }
                `
            }}
        />
        </body>
        </html>
    );
}
