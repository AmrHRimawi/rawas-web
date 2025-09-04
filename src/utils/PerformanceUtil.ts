// Performance monitoring utility for Core Web Vitals and other metrics

export interface PerformanceMetrics {
    fcp: number; // First Contentful Paint
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
    ttfb: number; // Time to First Byte
}

export class PerformanceMonitor {
    private static instance: PerformanceMonitor;
    private metrics: Partial<PerformanceMetrics> = {};
    private observers: PerformanceObserver[] = [];
    private isInitialized = false;

    private constructor() {
        // Don't initialize during SSR
        if (typeof window === 'undefined') return;
        this.initObservers();
    }

    public static getInstance(): PerformanceMonitor {
        if (!PerformanceMonitor.instance) {
            PerformanceMonitor.instance = new PerformanceMonitor();
        }
        return PerformanceMonitor.instance;
    }

    private initObservers(): void {
        if (this.isInitialized || typeof window === 'undefined') return;
        
        this.isInitialized = true;
        
        // Observe Largest Contentful Paint
        if ('PerformanceObserver' in window) {
            try {
                const lcpObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const lastEntry = entries[entries.length - 1] as PerformanceEntry;
                    this.metrics.lcp = lastEntry.startTime;
                    this.logMetric('LCP', this.metrics.lcp);
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
                this.observers.push(lcpObserver);
            } catch (e) {
                console.warn('LCP observer not supported:', e);
            }

            // Observe First Input Delay
            try {
                const fidObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    entries.forEach((entry) => {
                        if (entry.entryType === 'first-input') {
                            this.metrics.fid = (entry as any).processingStart - entry.startTime;
                            this.logMetric('FID', this.metrics.fid);
                        }
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
                this.observers.push(fidObserver);
            } catch (e) {
                console.warn('FID observer not supported:', e);
            }

            // Observe Layout Shifts
            try {
                const clsObserver = new PerformanceObserver((entryList) => {
                    let clsValue = 0;
                    for (const entry of entryList.getEntries()) {
                        if (!(entry as any).hadRecentInput) {
                            clsValue += (entry as any).value;
                        }
                    }
                    this.metrics.cls = clsValue;
                    this.logMetric('CLS', this.metrics.cls);
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
                this.observers.push(clsObserver);
            } catch (e) {
                console.warn('CLS observer not supported:', e);
            }
        }

        // Measure First Contentful Paint
        if ('PerformanceObserver' in window) {
            try {
                const fcpObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
                    if (fcpEntry) {
                        this.metrics.fcp = fcpEntry.startTime;
                        this.logMetric('FCP', this.metrics.fcp);
                    }
                });
                fcpObserver.observe({ entryTypes: ['paint'] });
                this.observers.push(fcpObserver);
            } catch (e) {
                console.warn('FCP observer not supported:', e);
            }
        }

        // Measure Time to First Byte
        if ('PerformanceObserver' in window) {
            try {
                const navigationObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const navigationEntry = entries.find(entry => entry.entryType === 'navigation') as PerformanceNavigationTiming;
                    if (navigationEntry) {
                        this.metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
                        this.logMetric('TTFB', this.metrics.ttfb);
                    }
                });
                navigationObserver.observe({ entryTypes: ['navigation'] });
                this.observers.push(navigationObserver);
            } catch (e) {
                console.warn('Navigation observer not supported:', e);
            }
        }
    }

    private logMetric(name: string, value: number): void {
        if (typeof window === 'undefined') return;
        
        console.log(`Performance Metric - ${name}:`, value.toFixed(2), 'ms');
        
        // Send to analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'performance_metric', {
                metric_name: name,
                metric_value: value,
                metric_unit: 'ms'
            });
        }
    }

    public getMetrics(): Partial<PerformanceMetrics> {
        return { ...this.metrics };
    }

    public getLCP(): number | undefined {
        return this.metrics.lcp;
    }

    public getFID(): number | undefined {
        return this.metrics.fid;
    }

    public getCLS(): number | undefined {
        return this.metrics.cls;
    }

    public getFCP(): number | undefined {
        return this.metrics.fcp;
    }

    public getTTFB(): number | undefined {
        return this.metrics.ttfb;
    }

    public isPerformanceGood(): boolean {
        const { lcp, fid, cls } = this.metrics;
        
        // Core Web Vitals thresholds
        const isLCPGood = !lcp || lcp < 2500; // Good: < 2.5s
        const isFIDGood = !fid || fid < 100;  // Good: < 100ms
        const isCLSGood = !cls || cls < 0.1;  // Good: < 0.1
        
        return isLCPGood && isFIDGood && isCLSGood;
    }

    public getPerformanceScore(): number {
        let score = 100;
        
        // Deduct points based on performance metrics
        if (this.metrics.lcp && this.metrics.lcp > 4000) score -= 30; // Poor LCP
        else if (this.metrics.lcp && this.metrics.lcp > 2500) score -= 15; // Needs improvement
        
        if (this.metrics.fid && this.metrics.fid > 300) score -= 30; // Poor FID
        else if (this.metrics.fid && this.metrics.fid > 100) score -= 15; // Needs improvement
        
        if (this.metrics.cls && this.metrics.cls > 0.25) score -= 30; // Poor CLS
        else if (this.metrics.cls && this.metrics.cls > 0.1) score -= 15; // Needs improvement
        
        return Math.max(0, score);
    }

    public destroy(): void {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
        this.isInitialized = false;
    }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Auto-initialize when module is imported (client-side only)
if (typeof window !== 'undefined') {
    // Wait for page load to start monitoring
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            performanceMonitor;
        });
    } else {
        performanceMonitor;
    }
}
