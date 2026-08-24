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
      <section className="py-12 border-t border-slate-200 dark:border-surface-dark-border">
        <Card className="bg-gradient-to-br from-brand-900/10 via-surface-light-card to-surface-light-card dark:from-brand-950/40 dark:via-surface-dark-card dark:to-surface-dark-card border-brand-200 dark:border-brand-900/50 p-8 sm:p-10 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-heading-lg font-bold text-ink-primary dark:text-ink-dark-primary">
              Punya Ide Proyek atau Ingin Berkolaborasi?
            </h2>
            <p className="text-body-base text-ink-secondary dark:text-ink-dark-secondary">
              Saya selalu terbuka untuk mendiskusikan arsitektur sistem web baru, konsultasi kode, atau bergabung dengan tim berkinerja tinggi.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
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
        </Card>
      </section>
    </main>
  );
}
