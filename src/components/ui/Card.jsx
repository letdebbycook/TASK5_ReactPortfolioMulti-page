import React from 'react';

export function Card({
  children,
  className = '',
  hoverEffect = false,
  ...props
}) {
  const baseClasses = 'bg-surface-light-card dark:bg-surface-dark-card border border-slate-200 dark:border-surface-dark-border rounded-card p-6 shadow-card transition-all duration-200';
  const hoverClasses = hoverEffect ? 'hover:shadow-card-hover hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}
