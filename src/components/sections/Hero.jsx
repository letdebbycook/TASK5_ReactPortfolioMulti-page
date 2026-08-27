import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../lib/constants';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { FiArrowRight, FiMail } from 'react-icons/fi';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Decorative Floating Dot Grid Background Accent */}
      <div className="absolute top-1/4 -right-16 w-72 h-72 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-1/3 w-64 h-64 bg-accent-500/10 dark:bg-accent-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Floating Animated Geometric Deco */}
      <div 
        aria-hidden 
        className="hidden lg:block absolute top-12 right-1/4 animate-float opacity-30 dark:opacity-40 pointer-events-none text-brand-600 dark:text-brand-400 select-none"
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <circle cx="24" cy="8" r="2" fill="currentColor" />
          <circle cx="40" cy="8" r="2" fill="currentColor" />
          <circle cx="56" cy="8" r="2" fill="currentColor" />
          <circle cx="8" cy="24" r="2" fill="currentColor" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
          <circle cx="40" cy="24" r="2" fill="currentColor" />
          <circle cx="56" cy="24" r="2" fill="currentColor" />
          <circle cx="8" cy="40" r="2" fill="currentColor" />
          <circle cx="24" cy="40" r="2" fill="currentColor" />
          <circle cx="40" cy="40" r="2" fill="currentColor" />
          <circle cx="56" cy="40" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Dominant Text Column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="brand" size="md">
              <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse" />
              {SITE_CONFIG.role}
            </Badge>
            <span className="text-xs text-ink-muted dark:text-ink-dark-muted font-mono hidden sm:inline">
              Politeknik Negeri Padang
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.08]">
              Membangun Solusi <span className="text-brand-600 dark:text-brand-400 font-light italic">Web & Mobile</span> Modern.
            </h1>
            <p className="text-body-base sm:text-lg text-ink-secondary dark:text-ink-dark-secondary leading-relaxed max-w-2xl font-sans pt-1">
              Halo, saya <strong className="text-ink-primary dark:text-ink-dark-primary font-semibold">{SITE_CONFIG.name}</strong>. Fokus mengembangkan aplikasi web berskala produksi dengan PHP, Laravel, React, dan Flutter.
            </p>
          </div>

          {/* Authentic Quick Highlights */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2 max-w-xl">
            <div className="p-3 sm:p-4 rounded-card bg-ink-primary/5 dark:bg-surface-dark-border/40 border border-ink-primary/5 dark:border-surface-dark-border/50">
              <p className="font-display text-xl sm:text-2xl font-bold text-brand-600 dark:text-brand-400">3 Thn</p>
              <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-medium mt-0.5">Studi TRPL</p>
            </div>

            <div className="p-3 sm:p-4 rounded-card bg-ink-primary/5 dark:bg-surface-dark-border/40 border border-ink-primary/5 dark:border-surface-dark-border/50">
              <p className="font-display text-xl sm:text-2xl font-bold text-ink-primary dark:text-ink-dark-primary">3 Proyek</p>
              <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-medium mt-0.5">Studi Kasus Nyata</p>
            </div>

            <div className="p-3 sm:p-4 rounded-card bg-ink-primary/5 dark:bg-surface-dark-border/40 border border-ink-primary/5 dark:border-surface-dark-border/50">
              <p className="font-display text-xl sm:text-2xl font-bold text-accent-600 dark:text-accent-400">10+ Tech</p>
              <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-medium mt-0.5">Stack Dikuasai</p>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link to="/projects">
              <Button variant="primary" size="lg" icon={FiArrowRight} iconPosition="right">
                Eksplorasi Proyek
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" icon={FiMail}>
                Hubungi Saya
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Element (Integrated / Non-template Card) */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-64 sm:w-72 lg:w-full max-w-xs">
            {/* Ambient Tech Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600/20 to-brand-400/10 rounded-3xl blur-md opacity-40 dark:opacity-60" />
            
            <div className="relative rounded-2xl overflow-hidden bg-surface-light-card dark:bg-surface-dark-card border border-ink-primary/10 dark:border-surface-dark-border p-3 shadow-elevated">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-50 dark:bg-surface-dark-border group">
                {(SITE_CONFIG.avatar || SITE_CONFIG.avatarUrl) && !imgError ? (
                  <img
                    src={SITE_CONFIG.avatar || SITE_CONFIG.avatarUrl}
                    alt={`Foto Profil ${SITE_CONFIG.name}`}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 space-y-3">
                    <div className="w-20 h-20 rounded-full bg-brand-600 text-white font-display font-extrabold text-2xl flex items-center justify-center shadow-md">
                      {SITE_CONFIG.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                    </div>
                  </div>
                )}

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-90 pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-display text-sm font-bold truncate">
                    {SITE_CONFIG.name}
                  </p>
                  <p className="text-xs text-brand-200/90 font-sans truncate">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>

              <div className="px-1 pt-2.5 flex items-center justify-between text-xs text-ink-secondary dark:text-ink-dark-secondary">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Siap Berkolaborasi
                </span>
                <span className="text-[11px] text-ink-muted dark:text-ink-dark-muted font-mono">
                  TRPL PNP
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
