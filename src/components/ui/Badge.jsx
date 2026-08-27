import React from 'react';

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full font-sans transition-colors';

  const variants = {
    default: 'bg-ink-primary/5 dark:bg-surface-dark-border/60 text-ink-secondary dark:text-ink-dark-secondary border border-ink-primary/10 dark:border-surface-dark-border',
    brand: 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/80',
    accent: 'bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400 border border-accent-200 dark:border-accent-600/30',
    success: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
    outline: 'bg-transparent text-ink-secondary dark:text-ink-dark-secondary border border-ink-primary/15 dark:border-surface-dark-border',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-1 text-body-sm',
  };

  return (
    <span className={`${baseClasses} ${variants[variant] || variants.default} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
