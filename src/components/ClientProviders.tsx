"use client";

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import SEODashboard from './SEODashboard';
import PerformanceDashboard from "@/components/PerformanceDashboard";

interface ClientProvidersProps {
    children: React.ReactNode;
}

const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
    return (
        <NextUIProvider>
            {children}
            
            {/* SEO Dashboard - Only show in development */}
            {process.env.NODE_ENV === 'development' && (
                <SEODashboard show={true} />
            )}


            {/* Performance Dashboard - Only show in development */}
            {process.env.NODE_ENV }
            {process.env.NODE_ENV === 'development' && (
                <PerformanceDashboard show={true} />
            )}
        
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
        </NextUIProvider>
    );
};

export default ClientProviders;
