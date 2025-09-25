import React from 'react';
import { Button, ButtonProps } from '@nextui-org/react';
import { cn } from '@/utils/TailwindUtil';

// Enhanced button with glassmorphism effect
interface GlassButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const GlassButton: React.FC<GlassButtonProps> = ({ children, className, ...props }) => (
    <Button 
        {...(props as any)}
        className={cn(
            'glass-button backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl',
            className
        )}
    >
        {children}
    </Button>
);

export default GlassButton;
