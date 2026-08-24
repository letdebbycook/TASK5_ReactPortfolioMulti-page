import React, { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PROJECTS } from '../data/projects';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

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
          eyebrow="Katalog Karya"
          title="Seluruh Proyek & Studi Kasus Produksi"
          description="Koleksi proyek perangkat lunak nyata yang pernah saya bangun, mulai dari dashboard analitik, arsitektur REST API, hingga aplikasi web multi-tenant."
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-200 dark:border-surface-dark-border">
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
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/80'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card 
            key={project.id} 
            hoverEffect 
            className="flex flex-col justify-between h-full group p-6 sm:p-8 overflow-hidden"
          >
            <div className="space-y-4">
              {/* Project Image Header */}
              {project.image && (
                <div className="relative aspect-video w-full -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 mb-4 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={`Preview ${project.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
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
                    <span className="text-body-sm font-semibold text-brand-600 dark:text-brand-400">
                      {project.metrics}
                    </span>
                  )}
                </div>
              )}

              {/* Metrics badge when image is present */}
              {project.image && project.metrics && (
                <div className="flex items-center justify-end">
                  <span className="text-body-sm font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/50 px-3 py-1 rounded-btn">
                    {project.metrics}
                  </span>
                </div>
              )}

              <div>
                <h2 className="text-heading-md font-bold text-ink-primary dark:text-ink-dark-primary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
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
            <div className="flex items-center gap-4 pt-6 mt-8 border-t border-slate-100 dark:border-slate-800">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-body-base font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
              >
                <span>Kunjungi Live Demo</span>
                <FiExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-body-base text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white transition-colors ml-auto"
              >
                <FiGithub className="w-5 h-5" />
                <span>Source Code</span>
              </a>
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
