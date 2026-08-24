import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../lib/constants';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { FiArrowRight, FiMail, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="brand" size="md">
              <span className="w-2 h-2 rounded-full bg-brand-600 mr-2" />
              {SITE_CONFIG.role}
            </Badge>
          </div>

          <h1 className="text-heading-xl text-ink-primary dark:text-ink-dark-primary font-extrabold tracking-tight">
            Mengembangkan Website & Aplikasi Mobile Menggunakan Teknologi Terbaru
          </h1>

          <p className="text-body-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed max-w-2xl">
            
          </p>

          {/* Key Quick Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-btn bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                <FiCode className="w-5 h-5" />
              </div>
              <div>
                <p className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary">3 Tahun</p>
                <p className="text-body-sm text-ink-muted dark:text-ink-dark-muted">SE Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-btn bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                <FiLayers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary">1 Proyek</p>
                <p className="text-body-sm text-ink-muted dark:text-ink-dark-muted">Project Published</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-btn bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary">4.7/5.0</p>
                <p className="text-body-sm text-ink-muted dark:text-ink-dark-muted">Client Satisfied</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link to="/projects">
              <Button variant="primary" size="lg" icon={FiArrowRight} iconPosition="right">
                Lihat Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" icon={FiMail}>
                Hubungi Saya
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Card / Avatar */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Background accent block */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 to-brand-500 rounded-card blur-xs opacity-20 dark:opacity-40" />
            
            <div className="relative bg-surface-light-card dark:bg-surface-dark-card border border-slate-200 dark:border-surface-dark-border rounded-card p-6 shadow-card space-y-5">
              {/* Profile Image Container */}
              <div className="relative aspect-square w-full rounded-card overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group">
                {(SITE_CONFIG.avatar || SITE_CONFIG.avatarUrl) && !imgError ? (
                  <img
                    src={SITE_CONFIG.avatar || SITE_CONFIG.avatarUrl}
                    alt={`Foto Profil ${SITE_CONFIG.name}`}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 space-y-3">
                    <div className="w-24 h-24 rounded-full bg-brand-600 text-white font-extrabold text-3xl flex items-center justify-center shadow-md">
                      {SITE_CONFIG.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                    </div>
                  </div>
                )}

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-heading-sm font-bold shadow-text">
                    {SITE_CONFIG.name}
                  </h3>
                  <p className="text-xs text-slate-200">
                    {SITE_CONFIG.role}
                  </p>
                </div>
              </div>

              {/* Status details */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-body-sm">
                <div className="flex justify-between text-ink-secondary dark:text-ink-dark-secondary">
                  <span>Lokasi:</span>
                  <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">{SITE_CONFIG.location}</span>
                </div>
                <div className="flex justify-between text-ink-secondary dark:text-ink-dark-secondary">
                  <span>Spesialisasi:</span>
                  <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">React & Laravel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
