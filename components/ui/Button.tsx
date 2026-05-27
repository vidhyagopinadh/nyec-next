import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'action';
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
    const baseStyles = 'h-10 px-4 inline-flex items-center justify-center gap-2 font-medium text-sm rounded-lg transition-colors shadow-sm';

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-blue-500/10',
        ghost: 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 active:bg-slate-100 shadow-none',
        action: 'h-8 px-3 text-xs bg-blue-600 text-white hover:bg-blue-700 shadow-none'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}