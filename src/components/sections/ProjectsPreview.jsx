import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

export function ProjectsPreview({ limit = 3, showHeader = true }) {
  // Use same data source
  const projectsToDisplay = PROJECTS.filter(p => p.featured).slice(0, limit);

  return (
    <section className="py-12 border-t border-slate-200 dark:border-surface-dark-border">
      {showHeader && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionHeading
            eyebrow="Portfolio Unggulan"
            title="Proyek Pilihan Terbaru"
            description="Studi kasus nyata pengembanan aplikasi web berskala produksi yang mengedepankan performa dan kualitas kode."
            className="mb-0"
          />
          <Link to="/projects" className="self-start sm:self-auto">
            <Button variant="ghost" size="sm" icon={FiArrowRight} iconPosition="right">
              Lihat Semua Proyek
            </Button>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsToDisplay.map((project) => (
          <Card 
            key={project.id} 
            hoverEffect 
            className="flex flex-col justify-between h-full group overflow-hidden"
          >
            <div className="space-y-4">
              {/* Project Image Header */}
              {project.image && (
                <div className="relative aspect-video w-full -mt-6 -mx-6 mb-4 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={`Preview ${project.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="brand" size="sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              )}

              {/* Category & Status (Shown if no image) */}
              {!project.image && (
                <div className="flex items-center justify-between">
                  <Badge variant="brand" size="sm">
                    {project.category}
                  </Badge>
                  {project.metrics && (
                    <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                      {project.metrics}
                    </span>
                  )}
                </div>
              )}

              {/* Metrics badge when image is present */}
              {project.image && project.metrics && (
                <div className="flex items-center justify-end">
                  <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold bg-brand-50 dark:bg-brand-950/50 px-2.5 py-1 rounded-btn">
                    {project.metrics}
                  </span>
                </div>
              )}

              {/* Title & Tagline */}
              <div>
                <h3 className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-body-sm text-ink-muted dark:text-ink-dark-muted font-medium mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Concrete Description */}
              <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                {project.description}
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                aria-label={`Demo langsung ${project.title}`}
              >
                <span>Live Demo</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-body-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-white transition-colors ml-auto"
                aria-label={`Source code ${project.title} di GitHub`}
              >
                <FiGithub className="w-4 h-4" />
                <span>Repository</span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
