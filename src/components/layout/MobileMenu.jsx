import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE_CONFIG } from '../../lib/constants';
import { useActiveLink } from '../../hooks/useActiveLink';
import { FiX, FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export function MobileMenu({ isOpen, onClose }) {
  const { isActive } = useActiveLink();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <div className="fixed right-0 top-0 bottom-0 w-3/4 max-w-xs bg-surface-light-card dark:bg-surface-dark-card border-l border-ink-primary/10 dark:border-surface-dark-border p-6 shadow-2xl flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-ink-primary/10 dark:border-surface-dark-border">
            <span className="font-display font-bold text-heading-sm text-ink-primary dark:text-ink-dark-primary">
              Navigasi
            </span>
            <button
              onClick={onClose}
              className="p-2 text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white rounded-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Tutup menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 mt-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-btn text-body-base font-medium transition-colors ${
                    active
                      ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-semibold border-l-2 border-brand-600 dark:border-brand-400'
                      : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white hover:bg-ink-primary/5 dark:hover:bg-surface-dark-border/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info in menu */}
        <div className="pt-6 border-t border-ink-primary/10 dark:border-surface-dark-border space-y-4">
          <div className="flex items-center gap-3 text-ink-secondary dark:text-ink-dark-secondary">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 hover:text-brand-600 dark:hover:text-brand-400 rounded-btn"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 hover:text-brand-600 dark:hover:text-brand-400 rounded-btn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            {(SITE_CONFIG.instagram || SITE_CONFIG.twitter) && (
              <a
                href={SITE_CONFIG.instagram || SITE_CONFIG.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 hover:text-brand-600 dark:hover:text-brand-400 rounded-btn"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            )}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              aria-label="Email"
              className="p-2 hover:text-brand-600 dark:hover:text-brand-400 rounded-btn"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-sans">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </div>
  );
}
