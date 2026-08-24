import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-btn transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface-dark disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm',
    secondary: 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-ink-primary dark:text-ink-dark-primary',
    outline: 'border border-slate-300 dark:border-slate-700 text-ink-primary dark:text-ink-dark-primary hover:bg-slate-100 dark:hover:bg-slate-800/60',
    ghost: 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-body-sm gap-1.5',
    md: 'px-4 py-2 text-body-base gap-2',
    lg: 'px-6 py-3 text-body-base gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
}
