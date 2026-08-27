import React, { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PROJECTS } from '../data/projects';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { FiGithub, FiFilter } from 'react-icons/fi';

const CATEGORIES = ['Semua', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

export function Projects() {
  useDocumentTitle('Projects');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-6">
        <SectionHeading
          variant="with-line"
          title="Seluruh Proyek & Studi Kasus"
          description="Proyek yang pernah saya bangun selama perkuliahan dan eksplorasi di Politeknik Negeri Padang."
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-ink-primary/10 dark:border-surface-dark-border">
          <div className="flex items-center gap-2 mr-2 text-body-sm font-semibold text-ink-secondary dark:text-ink-dark-secondary">
            <FiFilter className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>Kategori:</span>
          </div>
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-btn text-body-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  active
                    ? 'bg-brand-600 text-white shadow-sm font-semibold'
                    : 'bg-ink-primary/5 dark:bg-surface-dark-border/60 text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white hover:bg-ink-primary/10 dark:hover:bg-surface-dark-border'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card 
            key={project.id} 
            variant="elevated"
            hoverEffect 
            className="flex flex-col justify-between h-full group p-5 sm:p-7 overflow-hidden"
          >
            <div className="space-y-4">
              {/* Project Image Header */}
              {project.image && (
                <div className="relative aspect-video w-full -mt-5 -mx-5 sm:-mt-7 sm:-mx-7 mb-4 overflow-hidden bg-brand-50/50 dark:bg-surface-dark border-b border-ink-primary/10 dark:border-surface-dark-border">
                  <img
                    src={project.image}
                    alt={`Preview ${project.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="brand" size="md">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              )}

              {/* Category & Status (Shown if no image) */}
              {!project.image && (
                <div className="flex items-center justify-between">
                  <Badge variant="brand" size="md">
                    {project.category}
                  </Badge>
                  {project.metrics && (
                    <span className="text-body-sm font-semibold font-mono text-brand-600 dark:text-brand-400">
                      {project.metrics}
                    </span>
                  )}
                </div>
              )}

              {/* Metrics badge when image is present */}
              {project.image && project.metrics && (
                <div className="flex items-center justify-end">
                  <span className="text-xs font-mono font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-btn border border-brand-200 dark:border-brand-800/80">
                    {project.metrics}
                  </span>
                </div>
              )}

              <div>
                <h2 className="font-display text-heading-md font-bold text-ink-primary dark:text-ink-dark-primary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-body-base text-ink-muted dark:text-ink-dark-muted font-medium mt-1">
                  {project.tagline}
                </p>
              </div>

              <p className="text-body-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center justify-end pt-4 mt-6 border-t border-ink-primary/10 dark:border-surface-dark-border">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-body-sm sm:text-body-base text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors ml-auto"
                >
                  <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <p className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary">
            Tidak ada proyek ditemukan dalam kategori ini.
          </p>
          <Button variant="outline" size="sm" onClick={() => setSelectedCategory('Semua')}>
            Tampilkan Semua Proyek
          </Button>
        </div>
      )}

    </main>
  );
}
