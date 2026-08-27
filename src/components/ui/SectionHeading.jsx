import React from 'react';

/**
 * SectionHeading — 3 layout variants
 *  default    : // eyebrow prefix — clean, readable (replaces uppercase eyebrow)
 *  numbered   : large ghost number + heading side-by-side
 *  with-line  : 2px brand line before heading — strong editorial feel
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  as: Component = 'h2',
  variant = 'default',
  number,
  className = '',
}) {
  if (variant === 'numbered') {
    return (
      <div
        className={`flex items-start gap-5 sm:gap-7 mb-10 ${
          centered ? 'justify-center text-center' : ''
        } ${className}`}
      >
        {/* Ghost number */}
        <span
          className="font-display font-black leading-none select-none shrink-0 mt-1"
          style={{ fontSize: '3.5rem', color: 'transparent',
            WebkitTextStroke: '2px',
            // uses CSS variable to support dark mode
          }}
          aria-hidden
        >
          <span className="text-brand-200 dark:text-brand-900/80" style={{ fontSize: '3.5rem', fontFamily: 'Space Grotesk' }}>
            {number || '01'}
          </span>
        </span>
        <div className="space-y-2 max-w-3xl">
          <Component className="text-heading-lg font-display font-bold text-ink-primary dark:text-ink-dark-primary">
            {title}
          </Component>
          {description && (
            <p className="text-body-base text-ink-secondary dark:text-ink-dark-secondary">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'with-line') {
    return (
      <div
        className={`space-y-3 mb-10 ${
          centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
        } ${className}`}
      >
        <div className={`flex items-center gap-4 ${centered ? 'justify-center' : ''}`}>
          <span className="h-0.5 w-10 bg-brand-600 dark:bg-brand-400 shrink-0 rounded-full" />
          <Component className="text-heading-lg font-display font-bold text-ink-primary dark:text-ink-dark-primary">
            {title}
          </Component>
        </div>
        {description && (
          <p className="text-body-base text-ink-secondary dark:text-ink-dark-secondary">
            {description}
          </p>
        )}
      </div>
    );
  }

  // Default — replaces uppercase + tracking-wider eyebrow with // prefix
  return (
    <div
      className={`space-y-2 mb-10 ${
        centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-brand-600 dark:text-brand-400">
          <span className="font-mono opacity-60" aria-hidden>//</span>
          {eyebrow}
        </span>
      )}
      <Component className="text-heading-lg font-display font-bold text-ink-primary dark:text-ink-dark-primary">
        {title}
      </Component>
      {description && (
        <p className="text-body-base text-ink-secondary dark:text-ink-dark-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
