import React from 'react';

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    default: 'bg-slate-100 dark:bg-slate-800 text-ink-secondary dark:text-ink-dark-secondary border border-slate-200 dark:border-slate-700',
    brand: 'bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-100 border border-brand-200 dark:border-brand-800',
    success: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-body-sm',
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
