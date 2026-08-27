import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

export function ProjectsPreview({ limit = 3, showHeader = true }) {
  const projectsToDisplay = PROJECTS.filter(p => p.featured).slice(0, limit);

  return (
    <section className="py-12 border-t border-ink-primary/10 dark:border-surface-dark-border">
      {showHeader && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionHeading
            variant="default"
            eyebrow="Karya Terpilih"
            title="Studi Kasus & Proyek Produksi"
            description="Studi kasus nyata pengembangan aplikasi web & mobile berskala produksi yang mengedepankan performa dan keandalan."
            className="mb-0"
          />
          <Link to="/projects" className="self-start sm:self-auto shrink-0">
            <Button variant="ghost" size="sm" icon={FiArrowRight} iconPosition="right">
              Katalog Lengkap
            </Button>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsToDisplay.map((project) => (
          <Card 
            key={project.id} 
            variant="elevated"
            hoverEffect 
            className="flex flex-col justify-between h-full group p-5 overflow-hidden"
          >
            <div className="space-y-4">
              {/* Project Image Header */}
              {project.image && (
                <div className="relative aspect-video w-full -mt-5 -mx-5 mb-4 overflow-hidden bg-brand-50/50 dark:bg-surface-dark border-b border-ink-primary/10 dark:border-surface-dark-border">
                  <img
                    src={project.image}
                    alt={`Preview ${project.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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

              {/* Category & Metrics */}
              <div className="flex items-center justify-between">
                {!project.image && (
                  <Badge variant="brand" size="sm">
                    {project.category}
                  </Badge>
                )}
                {project.metrics && (
                  <span className="text-xs font-mono font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-0.5 rounded-full border border-brand-200 dark:border-brand-800/80 ml-auto">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-display text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-body-sm text-ink-muted dark:text-ink-dark-muted font-medium mt-0.5">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                {project.description}
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
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
                  className="inline-flex items-center gap-1.5 text-body-sm text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors ml-auto"
                  aria-label={`Source code ${project.title} di GitHub`}
                >
                  <FiGithub className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
