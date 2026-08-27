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
  const base =
    'inline-flex items-center justify-center font-semibold font-display rounded-btn ' +
    'transition-all duration-200 focus:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-brand-500 focus-visible:ring-offset-2 ' +
    'dark:focus-visible:ring-offset-surface-dark ' +
    'disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'shimmer-btn bg-brand-600 hover:bg-brand-700 active:bg-brand-800 ' +
      'text-white shadow-sm hover:shadow-md',

    secondary:
      'bg-ink-primary/8 dark:bg-surface-dark-border/60 ' +
      'hover:bg-ink-primary/15 dark:hover:bg-surface-dark-border ' +
      'text-ink-primary dark:text-ink-dark-primary',

    outline:
      'border border-brand-300 dark:border-brand-700/60 ' +
      'text-brand-700 dark:text-brand-300 ' +
      'hover:bg-brand-50 dark:hover:bg-brand-950/40 ' +
      'hover:border-brand-400 dark:hover:border-brand-600',

    ghost:
      'text-ink-secondary dark:text-ink-dark-secondary ' +
      'hover:text-ink-primary dark:hover:text-ink-dark-primary ' +
      'hover:bg-brand-50/70 dark:hover:bg-brand-950/30',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-body-sm gap-1.5',
    md: 'px-4 py-2 text-body-base gap-2',
    lg: 'px-6 py-3 text-body-base gap-2.5',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
