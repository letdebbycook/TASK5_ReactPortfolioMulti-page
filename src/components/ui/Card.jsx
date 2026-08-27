import React from 'react';

/**
 * Card — 4 visual variants
 *  default  : subtle border, no shadow    — general content
 *  featured : left accent border + gradient — highlighted content
 *  flat     : minimal 4px radius          — timeline / data items
 *  elevated : 20px radius + deeper shadow — project cards with media
 */
export function Card({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
  ...props
}) {
  const base = 'transition-all duration-200';

  const variants = {
    default:
      'bg-surface-light-card dark:bg-surface-dark-card ' +
      'border border-ink-primary/10 dark:border-surface-dark-border/60 ' +
      'rounded-card shadow-card p-4 sm:p-6',

    featured:
      'bg-gradient-to-br from-brand-50/70 to-surface-light-card ' +
      'dark:from-brand-950/30 dark:to-surface-dark-card ' +
      'border border-ink-primary/10 dark:border-surface-dark-border/60 ' +
      'border-l-[4px] border-l-brand-600 dark:border-l-brand-500 ' +
      'rounded-xl-card p-4 sm:p-6',

    flat:
      'bg-surface-light-card dark:bg-surface-dark-card ' +
      'border border-ink-primary/10 dark:border-surface-dark-border/60 ' +
      'rounded-flat p-4 sm:p-6',

    elevated:
      'bg-surface-light-card dark:bg-surface-dark-card ' +
      'border border-ink-primary/10 dark:border-surface-dark-border/60 ' +
      'rounded-xl-card shadow-elevated',
  };

  const hover = hoverEffect
    ? 'hover:shadow-elevated-hover hover:-translate-y-1.5 ' +
      'hover:border-brand-400/40 dark:hover:border-brand-500/30 cursor-pointer'
    : '';

  return (
    <div className={`${base} ${variants[variant]} ${hover} ${className}`} {...props}>
      {children}
    </div>
  );
}
