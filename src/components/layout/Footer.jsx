import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, NAV_LINKS } from '../../lib/constants';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-surface-dark-border bg-surface-light-card dark:bg-surface-dark-card transition-colors duration-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 font-bold text-heading-sm text-ink-primary dark:text-ink-dark-primary">
              <span className="w-7 h-7 rounded-btn bg-brand-600 text-white flex items-center justify-center text-body-sm font-bold overflow-hidden border border-brand-500">
                {SITE_CONFIG.avatar ? (
                  <img src={SITE_CONFIG.avatar} alt={SITE_CONFIG.name} className="w-full h-full object-cover" />
                ) : (
                  SITE_CONFIG.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
                )}
              </span>
              <span>{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary max-w-sm">
              {SITE_CONFIG.tagline}
            </p>
            {SITE_CONFIG.availableForHire && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-body-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Terbuka untuk kesempatan & proyek baru</span>
              </div>
            )}
          </div>

          {/* Quick Nav Links */}
          <div>
            <h3 className="text-body-sm font-semibold text-ink-primary dark:text-ink-dark-primary uppercase tracking-wider mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-body-sm font-semibold text-ink-primary dark:text-ink-dark-primary uppercase tracking-wider mb-4">
              Koneksi
            </h3>
            <div className="flex flex-col space-y-2.5">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={SITE_CONFIG.instagram || SITE_CONFIG.twitter}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <FiInstagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-body-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <FiMail className="w-4 h-4" />
                <span>Email Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-ink-muted dark:text-ink-dark-muted">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Seluruh hak cipta dilindungi.</p>
          <p className="text-xs">Didesain dengan React 18, React Router v6 & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
