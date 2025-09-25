import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Home, ArrowRight } from 'lucide-react';
import { pathPrefix } from '@/utils/Constent';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
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

                    {/* 404 Number */}
                    <div className="relative">
                        <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-background/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white/20">
                                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                                    الصفحة غير موجودة
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها
                        </p>
                        <p className="text-base text-foreground/60">
                            قد تكون الصفحة قد تم نقلها أو حذفها، أو ربما كتبت الرابط بشكل خاطئ
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button
                            as={Link}
                            href="/"
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            startContent={<Home className="w-5 h-5" />}
                        >
                            العودة للرئيسية
                        </Button>
                        
                        <Button
                            as={Link}
                            href="/projects"
                            variant="bordered"
                            size="lg"
                            className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
                            startContent={<ArrowRight className="w-5 h-5" />}
                        >
                            تصفح المشاريع
                        </Button>
                    </div>

                    {/* Additional Links */}
                    <div className="pt-8 border-t border-white/10 mt-12">
                        <p className="text-sm text-foreground/60 mb-4">
                            أو يمكنك زيارة إحدى هذه الصفحات:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Link 
                                href="/about-us" 
                                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                            >
                                من نحن
                            </Link>
                            <span className="text-foreground/30">•</span>
                            <Link 
                                href="/contact-us" 
                                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                            >
                                اتصل بنا
                            </Link>
                            <span className="text-foreground/30">•</span>
                            <Link 
                                href="/consultants" 
                                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                            >
                                الاستشاريون
                            </Link>
                            <span className="text-foreground/30">•</span>
                            <Link 
                                href="/suppliers" 
                                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                            >
                                الموردون
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-bounce"></div>
        </div>
    );
}
