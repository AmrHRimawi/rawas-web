"use client";

import React, { useState, useEffect } from 'react';
import { calculateSEOScore, SEOScore } from '@/utils/SEOUtil';

interface SEODashboardProps {
    show?: boolean;
    className?: string;
    metadata?: any;
}

const SEODashboard: React.FC<SEODashboardProps> = ({ 
    show = false, 
    className = "",
    metadata = {}
}) => {
    const [isVisible, setIsVisible] = useState(show);
    const [seoScore, setSeoScore] = useState<SEOScore | null>(null);
    const [currentUrl, setCurrentUrl] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
            
            // Calculate SEO score from current page metadata
            const pageMetadata = {
                title: document.title,
                description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
                keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content')?.split(', ') || [],
                openGraph: document.querySelector('meta[property="og:title"]') ? true : false,
                twitter: document.querySelector('meta[name="twitter:card"]') ? true : false
            };
            
            setSeoScore(calculateSEOScore(pageMetadata));
        }
    }, []);

    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 80) return 'text-blue-600';
        if (score >= 70) return 'text-yellow-600';
        if (score >= 60) return 'text-orange-600';
        return 'text-red-600';
    };

    const getScoreLabel = (score: number) => {
        if (score >= 90) return 'ممتاز';
        if (score >= 80) return 'جيد جداً';
        if (score >= 70) return 'جيد';
        if (score >= 60) return 'مقبول';
        return 'ضعيف';
    };

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-4 left-4 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
                title="عرض تحليل SEO"
            >
                🔍
            </button>
        );
    }

    return (
        <div className={`fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-xl p-4 max-w-sm max-h-96 overflow-y-auto ${className}`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">تحليل SEO</h3>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>

            {/* Current URL */}
            <div className="mb-4 p-2 bg-gray-50 rounded text-xs text-gray-600 break-all">
                <strong>URL:</strong> {currentUrl}
            </div>

            {/* SEO Score */}
            {seoScore && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(seoScore.score)}`}>
                            {seoScore.score}
                        </div>
                        <div className="text-sm text-gray-600">
                            {getScoreLabel(seoScore.score)} - {seoScore.grade}
                        </div>
                    </div>
                </div>
            )}

            {/* Issues and Recommendations */}
            {seoScore && seoScore.issues.length > 0 && (
                <div className="space-y-3">
                    <h4 className="font-medium text-gray-700 text-sm">المشاكل المكتشفة:</h4>
                    
                    <div className="space-y-2">
                        {seoScore.issues.map((issue, index) => (
                            <div key={index} className="p-2 bg-red-50 border border-red-200 rounded text-sm">
                                <div className="text-red-800 font-medium">⚠️ {issue}</div>
                                <div className="text-red-600 text-xs mt-1">
                                    {seoScore.recommendations[index]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* SEO Checklist */}
            <div className="mt-4">
                <h4 className="font-medium text-gray-700 text-sm mb-2">قائمة فحص SEO:</h4>
                <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                        <span className={`w-3 h-3 rounded-full ${seoScore?.score >= 80 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span>عنوان الصفحة</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className={`w-3 h-3 rounded-full ${seoScore?.score >= 80 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span>وصف الصفحة</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className={`w-3 h-3 rounded-full ${seoScore?.score >= 80 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span>الكلمات المفتاحية</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className={`w-3 h-3 rounded-full ${seoScore?.score >= 80 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span>Open Graph</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className={`w-3 h-3 rounded-full ${seoScore?.score >= 80 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span>Twitter Cards</span>
                    </div>
                </div>
            </div>

            {/* Refresh Button */}
            <button
                onClick={() => {
                    if (typeof window !== 'undefined') {
                        const pageMetadata = {
                            title: document.title,
                            description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
                            keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content')?.split(', ') || [],
                            openGraph: document.querySelector('meta[property="og:title"]') ? true : false,
                            twitter: document.querySelector('meta[name="twitter:card"]') ? true : false
                        };
                        setSeoScore(calculateSEOScore(pageMetadata));
                    }
                }}
                className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
                تحديث التحليل
            </button>
        </div>
    );
};

export default SEODashboard;
