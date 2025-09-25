'use client';

import { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { pathPrefix } from '@/utils/Constent';
import Image from 'next/image';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-50/50 via-background to-orange-50/50">
            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="space-y-8">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-background/80 backdrop-blur-md p-6 rounded-full shadow-2xl border border-white/10">
                            <Image 
                                width={120} 
                                height={120} 
                                src={pathPrefix + "/images/rawas-logo.svg"} 
                                alt="رواس - شعار الشركة" 
                                className="rounded-full"
                            />
                        </div>
                    </div>

                    {/* Error Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-100 p-6 rounded-full">
                            <AlertTriangle className="w-16 h-16 text-red-600" />
                        </div>
                    </div>

                    {/* Error Title */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-red-600">
                            حدث خطأ غير متوقع
                        </h1>
                        <h2 className="text-xl md:text-2xl text-foreground/80">
                            نعتذر عن هذا الإزعاج
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            حدث خطأ تقني أثناء تحميل هذه الصفحة. نحن نعمل على حل هذه المشكلة.
                        </p>
                        <p className="text-base text-foreground/60">
                            يمكنك المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية
                        </p>
                        
                        {/* Error Details (Development only) */}
                        {process.env.NODE_ENV === 'development' && (
                            <details className="mt-6 p-4 bg-red-50 rounded-lg text-left">
                                <summary className="cursor-pointer text-red-800 font-medium mb-2">
                                    تفاصيل الخطأ (للمطورين فقط)
                                </summary>
                                <pre className="text-xs text-red-700 overflow-auto">
                                    {error.message}
                                    {error.digest && `\nDigest: ${error.digest}`}
                                </pre>
                            </details>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button
                            onPress={reset}
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            startContent={<RefreshCw className="w-5 h-5" />}
                        >
                            المحاولة مرة أخرى
                        </Button>
                        
                        <Button
                            as={Link}
                            href="/"
                            variant="bordered"
                            size="lg"
                            className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
                            startContent={<Home className="w-5 h-5" />}
                        >
                            العودة للرئيسية
                        </Button>
                    </div>

                    {/* Contact Support */}
                    <div className="pt-8 border-t border-white/10 mt-12">
                        <p className="text-sm text-foreground/60 mb-4">
                            إذا استمرت المشكلة، يرجى التواصل معنا:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Link 
                                href="/contact-us" 
                                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                            >
                                اتصل بنا
                            </Link>
                            <span className="text-foreground/30">•</span>
                            <a 
                                href="mailto:info@rawas.ps" 
                                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                            >
                                info@rawas.ps
                            </a>
                            <span className="text-foreground/30">•</span>
                            <a 
                                href="tel:0593330060" 
                                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                            >
                                0593330060
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-red-500/5 rounded-full blur-2xl animate-bounce"></div>
        </div>
    );
}
