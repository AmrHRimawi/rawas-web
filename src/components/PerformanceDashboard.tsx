"use client";

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
}

interface PerformanceDashboardProps {
    show?: boolean;
    className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
    show = false, 
    className = "" 
}) => {
    const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
    const [score, setScore] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(show);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const updateMetrics = async () => {
            try {
                // Dynamically import performance monitoring
                const { performanceMonitor } = await import('@/utils/PerformanceUtil');
                const currentMetrics = performanceMonitor.getMetrics();
                const currentScore = performanceMonitor.getPerformanceScore();
                
                setMetrics(currentMetrics);
                setScore(currentScore);
            } catch (error) {
                console.log('Performance monitoring not available:', error);
            }
        };

        // Update metrics every second
        const interval = setInterval(updateMetrics, 1000);
        
        // Initial update
        updateMetrics();

        return () => clearInterval(interval);
    }, [isClient]);

    const getMetricColor = (metric: keyof PerformanceMetrics, value: number): string => {
        const thresholds = {
            fcp: { good: 1800, poor: 3000 },
            lcp: { good: 2500, poor: 4000 },
            fid: { good: 100, poor: 300 },
            cls: { good: 0.1, poor: 0.25 },
            ttfb: { good: 800, poor: 1800 }
        };

        const threshold = thresholds[metric];
        if (!threshold) return 'text-gray-600';

        if (value <= threshold.good) return 'text-green-600';
        if (value <= threshold.poor) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getMetricLabel = (metric: keyof PerformanceMetrics, value: number): string => {
        const thresholds = {
            fcp: { good: 1800, poor: 3000 },
            lcp: { good: 2500, poor: 4000 },
            fid: { good: 100, poor: 300 },
            cls: { good: 0.1, poor: 0.25 },
            ttfb: { good: 800, poor: 1800 }
        };

        const threshold = thresholds[metric];
        if (!threshold) return '';

        if (value <= threshold.good) return 'جيد';
        if (value <= threshold.poor) return 'يحتاج تحسين';
        return 'ضعيف';
    };

    const getScoreColor = (score: number): string => {
        if (score >= 90) return 'text-green-600';
        if (score >= 70) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getScoreLabel = (score: number): string => {
        if (score >= 90) return 'ممتاز';
        if (score >= 70) return 'جيد';
        if (score >= 50) return 'مقبول';
        return 'ضعيف';
    };

    // Don't render during SSR
    if (!isClient) {
        return null;
    }

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
                title="عرض أداء الموقع"
            >
                📊
            </button>
        );
    }

    return (
        <div className={`fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl p-4 max-w-sm ${className}`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">أداء الموقع</h3>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>

            {/* Overall Score */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                    <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                        {score}
                    </div>
                    <div className="text-sm text-gray-600">
                        {getScoreLabel(score)}
                    </div>
                </div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3">
                <h4 className="font-medium text-gray-700 text-sm">مؤشرات الأداء الأساسية</h4>
                
                {metrics.fcp && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">FCP</span>
                        <div className="flex items-center space-x-2">
                            <span className={`font-mono ${getMetricColor('fcp', metrics.fcp)}`}>
                                {metrics.fcp.toFixed(0)}ms
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${getMetricColor('fcp', metrics.fcp).replace('text-', 'bg-').replace('-600', '-100')}`}>
                                {getMetricLabel('fcp', metrics.fcp)}
                            </span>
                        </div>
                    </div>
                )}

                {metrics.lcp && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">LCP</span>
                        <div className="flex items-center space-x-2">
                            <span className={`font-mono ${getMetricColor('lcp', metrics.lcp)}`}>
                                {metrics.lcp.toFixed(0)}ms
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${getMetricColor('lcp', metrics.lcp).replace('text-', 'bg-').replace('-600', '-100')}`}>
                                {getMetricLabel('lcp', metrics.lcp)}
                            </span>
                        </div>
                    </div>
                )}

                {metrics.fid && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">FID</span>
                        <div className="flex items-center space-x-2">
                            <span className={`font-mono ${getMetricColor('fid', metrics.fid)}`}>
                                {metrics.fid.toFixed(0)}ms
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${getMetricColor('fid', metrics.fid).replace('text-', 'bg-').replace('-600', '-100')}`}>
                                {getMetricLabel('fid', metrics.fid)}
                            </span>
                        </div>
                    </div>
                )}

                {metrics.cls && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">CLS</span>
                        <div className="flex items-center space-x-2">
                            <span className={`font-mono ${getMetricColor('cls', metrics.cls)}`}>
                                {metrics.cls.toFixed(3)}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${getMetricColor('cls', metrics.cls).replace('text-', 'bg-').replace('-600', '-100')}`}>
                                {getMetricLabel('cls', metrics.cls)}
                            </span>
                        </div>
                    </div>
                )}

                {metrics.ttfb && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">TTFB</span>
                        <div className="flex items-center space-x-2">
                            <span className={`font-mono ${getMetricColor('ttfb', metrics.ttfb)}`}>
                                {metrics.ttfb.toFixed(0)}ms
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${getMetricColor('ttfb', metrics.ttfb).replace('text-', 'bg-').replace('-600', '-100')}`}>
                                {getMetricLabel('ttfb', metrics.ttfb)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Refresh Button */}
            <button
                onClick={async () => {
                    try {
                        const { performanceMonitor } = await import('@/utils/PerformanceUtil');
                        const currentMetrics = performanceMonitor.getMetrics();
                        const currentScore = performanceMonitor.getPerformanceScore();
                        setMetrics(currentMetrics);
                        setScore(currentScore);
                    } catch (error) {
                        console.log('Performance monitoring not available:', error);
                    }
                }}
                className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
                تحديث البيانات
            </button>
        </div>
    );
};

export default PerformanceDashboard;
