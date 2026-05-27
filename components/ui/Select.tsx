import React, { SelectHTMLAttributes } from 'react';

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: (string | SelectOption)[];
}

export default function Select({ label, options = [], className = '', ...props }: SelectProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && <label className="text-xs font-semibold text-slate-600">{label}</label>}
            <div className="relative">
                <select
                    className={`w-full h-10 pl-3 pr-8 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 appearance-none transition-all shadow-sm ${className}`}
                    {...props}
                >
                    {options.map((opt, i) => {
                        const isObject = typeof opt === 'object' && opt !== null;
                        const value = isObject ? (opt as SelectOption).value : (opt as string);
                        const labelText = isObject ? (opt as SelectOption).label : (opt as string);

                        return (
                            <option key={i} value={value}>
                                {labelText}
                            </option>
                        );
                    })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}