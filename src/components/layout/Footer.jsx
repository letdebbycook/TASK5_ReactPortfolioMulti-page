import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../lib/constants';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="relative w-full border-t border-ink-primary/10 dark:border-surface-dark-border bg-surface-light-card/60 dark:bg-surface-dark-card/60 backdrop-blur-xs transition-colors duration-200 mt-20">
      {/* Decorative gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2.5 font-display font-bold text-heading-sm text-ink-primary dark:text-ink-dark-primary hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <span className="w-7 h-7 rounded-btn bg-brand-600 text-white flex items-center justify-center text-body-sm font-bold overflow-hidden border border-brand-500 shadow-xs">
                {SITE_CONFIG.avatar ? (
                  <img src={SITE_CONFIG.avatar} alt={SITE_CONFIG.name} className="w-full h-full object-cover" />
                ) : (
                  SITE_CONFIG.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
                )}
              </span>
              <span>{SITE_CONFIG.name}</span>
            </Link>
            <span className="hidden sm:inline text-ink-muted dark:text-ink-dark-muted">•</span>
            <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Social Links as clean icon pills */}
          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-btn bg-ink-primary/5 dark:bg-surface-dark-border/40 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 border border-ink-primary/10 dark:border-surface-dark-border transition-all"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-btn bg-ink-primary/5 dark:bg-surface-dark-border/40 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 border border-ink-primary/10 dark:border-surface-dark-border transition-all"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            {(SITE_CONFIG.instagram || SITE_CONFIG.twitter) && (
              <a
                href={SITE_CONFIG.instagram || SITE_CONFIG.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-btn bg-ink-primary/5 dark:bg-surface-dark-border/40 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 border border-ink-primary/10 dark:border-surface-dark-border transition-all"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              aria-label="Email"
              className="p-2.5 rounded-btn bg-ink-primary/5 dark:bg-surface-dark-border/40 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 border border-ink-primary/10 dark:border-surface-dark-border transition-all"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-6 mt-6 border-t border-ink-primary/10 dark:border-surface-dark-border text-center text-xs text-ink-muted dark:text-ink-dark-muted font-sans">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Dibuat untuk portfolio personal.
        </div>
      </div>
    </footer>
  );
}
