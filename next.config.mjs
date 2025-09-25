/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // trailingSlash: true,
    distDir: "out",
    // basePath: "/rawas-web",
    // assetPrefix: "/rawas-web/",
    
    // Development vs Production optimizations
    ...(process.env.NODE_ENV === 'development' && {
        // Development optimizations
        reactStrictMode: false, // Disable strict mode in development for faster compilation
        images: {
            unoptimized: true, // Disable image optimization in development
            domains: [],
            deviceSizes: [640, 750, 828, 1080, 1200],
            imageSizes: [16, 32, 48, 64, 96, 128, 256],
        },
        experimental: {
            optimizeCss: false, // Disable heavy optimizations in development
            optimizePackageImports: false,
            fastRefresh: true,
            bundleAnalyzer: false,
        },
        compress: false, // Disable compression in development
        swcMinify: true,
        webpack: (config, { dev, isServer }) => {
            if (dev) {
                // Faster watch options
                config.watchOptions = {
                    poll: 1000,
                    aggregateTimeout: 300,
                    ignored: ['**/node_modules', '**/.next'],
                };
                
                // Disable source maps in development for faster compilation
                config.devtool = 'eval-cheap-module-source-map';
                
                // Reduce bundle size in development
                config.optimization = {
                    ...config.optimization,
                    removeAvailableModules: false,
                    removeEmptyChunks: false,
                    splitChunks: false,
                };
            }
            return config;
        },
        devIndicators: {
            buildActivity: false,
            buildActivityPosition: 'bottom-right',
        },
    }),
    
    // Production optimizations
    ...(process.env.NODE_ENV === 'production' && {
        images: {
            unoptimized: false,
            domains: [],
            deviceSizes: [640, 750, 828, 1080, 1200, 1920],
            imageSizes: [16, 32, 48, 64, 96, 128, 256],
            formats: ['image/webp'],
            minimumCacheTTL: 60,
            dangerouslyAllowSVG: true,
            contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        },
        experimental: {
            optimizeCss: true,
            optimizePackageImports: ['@nextui-org/react', 'framer-motion'],
        },
        compress: true,
        swcMinify: true,
    }),
};

export default nextConfig;
