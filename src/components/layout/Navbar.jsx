import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE_CONFIG } from '../../lib/constants';
import { useActiveLink } from '../../hooks/useActiveLink';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { MobileMenu } from './MobileMenu';

export function Navbar({ isDark, onToggleTheme }) {
  const { isActive } = useActiveLink();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-surface-dark-border/80 backdrop-blur-md bg-surface-light/85 dark:bg-surface-dark/85 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="group flex items-center gap-2 text-heading-sm font-bold tracking-tight text-ink-primary dark:text-ink-dark-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-btn px-1 py-0.5"
        >
          <span className="w-8 h-8 rounded-btn bg-brand-600 text-white flex items-center justify-center font-extrabold text-body-base shadow-xs group-hover:bg-brand-700 transition-colors overflow-hidden border border-brand-500">
            {SITE_CONFIG.avatar ? (
              <img src={SITE_CONFIG.avatar} alt={SITE_CONFIG.name} className="w-full h-full object-cover" />
            ) : (
              SITE_CONFIG.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
            )}
          </span>
          <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-btn text-body-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  active
                    ? 'text-brand-600 dark:text-brand-400 font-semibold bg-brand-50/80 dark:bg-brand-900/30 border border-brand-200/50 dark:border-brand-800/40'
                    : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-btn text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
            title={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
          >
            {isDark ? (
              <FiSun className="w-5 h-5 text-amber-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-btn text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Buka menu navigasi"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
}
