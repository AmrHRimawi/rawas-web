import React from 'react';

// Elegant floating elements suitable for real estate - professional and sophisticated
const FloatingShapes: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none z-20">
        {/* Elegant floating architectural elements */}
        
        {/* Subtle building silhouette - increased opacity for better visibility */}
        <div className="absolute top-24 left-20 w-16 h-20 opacity-70">
            <div className="w-full h-full bg-gradient-to-b from-white/40 to-transparent relative">
                <div className="absolute top-0 left-0 w-4 h-4 bg-white/30 rounded-sm"></div>
                <div className="absolute top-4 left-0 w-4 h-4 bg-white/30 rounded-sm"></div>
                <div className="absolute top-8 left-0 w-4 h-4 bg-white/30 rounded-sm"></div>
                <div className="absolute top-12 left-0 w-4 h-4 bg-white/30 rounded-sm"></div>
                <div className="absolute top-16 left-0 w-4 h-4 bg-white/30 rounded-sm"></div>
            </div>
        </div>
        
        {/* Elegant floating line - increased opacity */}
        <div className="absolute top-32 right-32 w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-float-slow"></div>
        
        {/* Subtle geometric accent - increased opacity */}
        <div className="absolute bottom-40 left-32 w-8 h-8 border border-white/40 rotate-45 animate-float-medium"></div>
        
        {/* Elegant dot pattern - increased opacity for better visibility */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 animate-float-slow">
            <div className="w-full h-full relative">
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="absolute top-1/4 left-0 w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="absolute top-1/2 right-0 w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-white/50 rounded-full"></div>
            </div>
        </div>
        
        {/* Subtle architectural detail - increased opacity */}
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 animate-float-medium">
            <div className="w-full h-full border border-white/40 relative">
                <div className="absolute inset-2 border border-white/30"></div>
                <div className="absolute inset-4 border border-white/20"></div>
            </div>
        </div>
        
        {/* Elegant triangle accent - increased opacity */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-white/40 animate-float-fast"></div>
        
        {/* Subtle floating rectangle - increased opacity */}
        <div className="absolute top-2/3 right-1/3 w-10 h-6 border border-white/40 rounded-sm animate-float-slow"></div>
        
        {/* Elegant corner accent - increased opacity */}
        <div className="absolute bottom-20 right-20 w-6 h-6 animate-float-medium">
            <div className="w-full h-full border-l border-t border-white/40"></div>
        </div>
        
        {/* Subtle architectural grid - already optimized by user */}
        <div className="absolute top-16 right-16 w-12 h-12 animate-float-fast opacity-70">
            <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-0.5">
                <div className="bg-white/20"></div>
                <div className="bg-white/20"></div>
                <div className="bg-white/20"></div>
                <div className="bg-white/20"></div>
                <div className="bg-white/20"></div>
                <div className="bg-white/20"></div>
                <div className="bg-white/20"></div>
                <div className="bg-white/20"></div>
                <div className="bg-white/20"></div>
            </div>
        </div>
        
        {/* Elegant floating line with dots - increased opacity */}
        <div className="absolute top-3/4 left-16 w-20 h-px bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-float-slow">
            <div className="absolute -top-1 left-1/4 w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="absolute -top-1 right-1/4 w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
    </div>
);

export default FloatingShapes;
