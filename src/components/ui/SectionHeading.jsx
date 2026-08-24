import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  as: Component = 'h2',
  className = '',
}) {
  return (
    <div className={`space-y-2 mb-10 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <span className="text-body-sm font-semibold tracking-wider text-brand-600 dark:text-brand-500 uppercase">
          {eyebrow}
        </span>
      )}
      <Component className="text-heading-lg text-ink-primary dark:text-ink-dark-primary">
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
