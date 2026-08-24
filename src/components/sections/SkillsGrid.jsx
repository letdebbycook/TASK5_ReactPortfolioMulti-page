import React from 'react';
import { SKILLS } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { 
  SiReact, 
  SiLaravel, 
  SiJavascript, 
  SiGit 
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

const ICON_MAP = {
  SiReact: SiReact,
  SiLaravel: SiLaravel,
  SiJavascript: SiJavascript,
  FaCss3Alt: FaCss3Alt,
  SiGit: SiGit,
  TbBrandVscode: TbBrandVscode,
};

export function SkillsGrid() {
  // Filter 6 featured skills specified in the prompt requirement
  const featuredSkills = SKILLS.filter((skill) => skill.isFeatured).slice(0, 6);

  return (
    <section className="py-12 border-t border-slate-200 dark:border-surface-dark-border">
      <SectionHeading
        eyebrow="Keahlian Utama"
        title="Teknologi & Tooling Andalan"
        description=""
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredSkills.map((skill) => {
          const IconComponent = ICON_MAP[skill.iconKey];

          return (
            <Card
              key={skill.id}
              className="group hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                {/* Icon wrapper with controlled hover state */}
                <div className="p-3 rounded-card bg-slate-100 dark:bg-slate-800 text-ink-primary dark:text-ink-dark-primary group-hover:scale-105 transition-transform duration-200">
                  {IconComponent ? (
                    <IconComponent className="w-8 h-8" style={{ color: skill.color }} />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-brand-500" />
                  )}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-heading-sm text-ink-primary dark:text-ink-dark-primary font-bold">
                      {skill.name}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-ink-muted dark:text-ink-dark-muted font-medium">
                      {skill.category}
                    </span>
                  </div>
                  <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
