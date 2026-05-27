import React, { ReactNode } from 'react';

interface CardProps {
    title?: string;
    headerAction?: ReactNode;
    children: ReactNode;
    className?: string;
}

export default function Card({ title, headerAction, children, className = '' }: CardProps) {
    return (
        <section className={`bg-white rounded-xl border border-slate-200/70 shadow-sm overflow-hidden ${className}`}>
            {title && (
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</h2>
                    {headerAction && headerAction}
                </div>
            )}
            <div className="p-6">{children}</div>
        </section>
    );
}