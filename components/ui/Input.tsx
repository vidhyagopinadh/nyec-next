import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    optional?: boolean;
}

export default function Input({ label, optional, type = 'text', className = '', ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <label className="text-xs font-semibold text-slate-600">
                    {label} {optional && <span className="text-slate-400 font-normal">(Optional)</span>}
                </label>
            )}
            <input
                type={type}
                className={`h-10 px-3 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all shadow-sm ${className}`}
                {...props}
            />
        </div>
    );
}