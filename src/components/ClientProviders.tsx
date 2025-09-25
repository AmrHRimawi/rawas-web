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
                <SEODashboard show={false} />
            )}

            {/* Performance Dashboard - Only show in development */}
            {process.env.NODE_ENV === 'development' && (
                <PerformanceDashboard show={false} />
            )}
        
        {/* Simple Performance Monitoring Script */}
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    // Simple performance monitoring without external imports
                    if (typeof window !== 'undefined') {
                        window.addEventListener('load', () => {
                            setTimeout(() => {
                                try {
                                    // Basic performance metrics
                                    const navigation = performance.getEntriesByType('navigation')[0];
                                    if (navigation) {
                                        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                                        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
                                        
                                        console.log('Page Load Time:', loadTime.toFixed(2), 'ms');
                                        console.log('DOM Content Loaded:', domContentLoaded.toFixed(2), 'ms');
                                        
                                        // Log to analytics if available
                                        if (typeof window !== 'undefined' && window.gtag) {
                                            window.gtag('event', 'performance_metric', {
                                                metric_name: 'page_load',
                                                metric_value: loadTime,
                                                metric_unit: 'ms'
                                            });
                                        }
                                    }
                                } catch (error) {
                                    console.log('Performance monitoring not available:', error);
                                }
                            }, 1000);
                        });
                    }
                `
            }}
        />
        </NextUIProvider>
    );
};

export default ClientProviders;
