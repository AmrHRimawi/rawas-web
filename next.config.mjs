/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // basePath: "/rawas-web",
    // assetPrefix: "/rawas-web/",
    
    // Image optimization settings
    images: {
        // Enable image optimization
        unoptimized: false,
        
        // Configure image domains if needed
        domains: [],
        
        // Configure image sizes for responsive images
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        
        // Enable WebP format for better compression
        formats: ['image/webp'],
        
        // Minimum cache TTL for images
        minimumCacheTTL: 60,
        
        // Enable dangerouslyAllowSVG for SVG images
        dangerouslyAllowSVG: true,
        
        // Content security policy for SVG
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    
    // Performance optimizations
    experimental: {
        // Enable optimizations for better performance
        optimizeCss: true,
        optimizePackageImports: ['@nextui-org/react', 'framer-motion'],
    },
    
    // Compression settings
    compress: true,
    
    // Enable SWC minification
    swcMinify: true,
};

export default nextConfig;
