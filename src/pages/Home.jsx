import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Hero } from '../components/sections/Hero';
import { SkillsGrid } from '../components/sections/SkillsGrid';
import { ProjectsPreview } from '../components/sections/ProjectsPreview';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export function Home() {
  useDocumentTitle('Beranda');

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Hero Section */}
      <Hero />

      {/* Skills Showcase Section */}
      <SkillsGrid />

      {/* Projects Preview Section */}
      <ProjectsPreview limit={3} showHeader={true} />

      {/* Homepage Call to Action Section */}
      <section className="py-14 border-t border-ink-primary/10 dark:border-surface-dark-border">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600/10 via-surface-light-card to-accent-500/10 dark:from-brand-950/60 dark:via-surface-dark-card dark:to-surface-dark-card border border-brand-300/40 dark:border-brand-800/40 p-8 sm:p-12 text-center space-y-6 shadow-elevated">
          {/* Ambient Corner Blur */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">
              // LET'S COLLABORATE
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink-primary dark:text-ink-dark-primary">
              Punya Ide Proyek atau Ingin Berkolaborasi?
            </h2>
            <p className="text-body-base text-ink-secondary dark:text-ink-dark-secondary">
              Saya selalu terbuka untuk mendiskusikan pembuatan web, aplikasi, atau bergabung dengan tim dalam membangun sebuah sistem.
            </p>
          </div>

          <div className="relative flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={FiMail}>
                Mulai Diskusi
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" icon={FiArrowRight} iconPosition="right">
                Pelajari Pengalaman Saya
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
