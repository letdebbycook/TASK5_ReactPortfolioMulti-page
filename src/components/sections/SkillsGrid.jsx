import React from 'react';
import { SKILLS } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  SiPhp, 
  SiLaravel, 
  SiJavascript, 
  SiHtml5, 
  SiExpress, 
  SiPython, 
  SiKotlin, 
  SiFlutter, 
  SiMysql, 
  SiGit, 
  SiReact 
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

const ICON_MAP = {
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiHtml5,
  FaCss3Alt,
  SiExpress,
  SiPython,
  SiKotlin,
  SiFlutter,
  SiMysql,
  SiGit,
  SiReact,
  TbBrandVscode,
};

export function SkillsGrid() {
  // Group skills by category for authentic developer visual representation
  const categories = [
    { name: 'Backend & Framework', filter: (s) => s.category.includes('Backend') },
    { name: 'Frontend & UI', filter: (s) => s.category.includes('Frontend') || s.id === 'javascript' },
    { name: 'Mobile App Development', filter: (s) => s.category.includes('Mobile') },
    { name: 'Database & Systems', filter: (s) => s.category.includes('Database') || s.category.includes('ML') },
    { name: 'Tools & Workflow', filter: (s) => s.category.includes('Tools') },
  ];

  return (
    <section className="py-12 border-t border-ink-primary/10 dark:border-surface-dark-border">
      <SectionHeading
        variant="with-line"
        title="Keahlian & Ekosistem Teknologi"
        description="Teknologi dan kerangka kerja yang biasa saya gunakan berdasarkan pengalaman pengembangan web & mobile."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => {
          const matchedSkills = SKILLS.filter(cat.filter);
          if (matchedSkills.length === 0) return null;

          return (
            <div 
              key={idx}
              className="p-5 rounded-xl-card bg-surface-light-card dark:bg-surface-dark-card border border-ink-primary/10 dark:border-surface-dark-border space-y-3.5 hover:border-brand-500/30 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-ink-primary/5 dark:border-surface-dark-border">
                <h3 className="font-display font-bold text-sm tracking-tight text-ink-primary dark:text-ink-dark-primary">
                  {cat.name}
                </h3>
                <span className="text-[11px] font-mono text-brand-600 dark:text-brand-400 font-semibold">
                  0{idx + 1}
                </span>
              </div>

              {/* Tag Cloud Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {matchedSkills.map((skill) => {
                  const Icon = ICON_MAP[skill.iconKey];
                  return (
                    <div
                      key={skill.id}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ink-primary/5 dark:bg-surface-dark-border/60 hover:bg-brand-50 dark:hover:bg-brand-950/60 border border-ink-primary/10 dark:border-surface-dark-border/80 hover:border-brand-300 dark:hover:border-brand-700/60 transition-all group/pill cursor-default"
                      title={skill.description}
                    >
                      {Icon && (
                        <Icon 
                          className="w-4 h-4 shrink-0 transition-transform group-hover/pill:scale-110" 
                          style={{ color: skill.color }} 
                        />
                      )}
                      <span className="text-body-sm font-medium text-ink-primary dark:text-ink-dark-primary group-hover/pill:text-brand-600 dark:group-hover/pill:text-brand-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
