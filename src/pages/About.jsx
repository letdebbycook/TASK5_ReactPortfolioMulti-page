import React, { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SKILLS } from '../data/skills';
import { SITE_CONFIG } from '../lib/constants';
import { FiBriefcase, FiCheck, FiTerminal, FiAward } from 'react-icons/fi';
import { 
  SiReact, 
  SiLaravel, 
  SiJavascript, 
  SiGit, 
  SiNodedotjs,
  SiPostgresql
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
  SiNodedotjs: SiNodedotjs,
  SiPostgresql: SiPostgresql,
};

const TIMELINE = [
  {
    period: '2023 — Sekarang',
    role: 'Senior Fullstack Developer',
    company: 'TechPulse Solutions',
    description: 'Memimpin tim pengembang beranggotakan 5 engineer dalam membangun platform manajemen SaaS berbasis React & Laravel REST API. Mengurangi latensi respon server hingga 35% via Redis caching.',
  },
  {
    period: '2021 — 2023',
    role: 'Frontend Web Engineer',
    company: 'NexaDigital Agency',
    description: 'Mengembangkan 10+ web app SPA kustom menggunakan React, Redux Toolkit, dan Tailwind CSS. Menerapkan pola testing otomatis dan komponen UI reusabel.',
  },
  {
    period: '2020 — 2021',
    role: 'Junior Backend Developer',
    company: 'InnoMedia System',
    description: 'Merancang arsitektur database MySQL/PostgreSQL, integrasi gateway pembayaran pihak ketiga, dan otomatisasi deployment server Linux.',
  },
];

const PRINCIPLES = [
  {
    title: 'Performa Pertama',
    desc: 'Meminimalkan bundle size, menghindari re-render yang tidak perlu, dan memastikan waktu respon API tercepat.',
  },
  {
    title: 'Arsitektur Bersih',
    desc: 'Struktur kode modular yang mudah di-maintain, di-test, dan dikembangkan oleh tim lintas fungsi.',
  },
  {
    title: 'Pengalaman Pengguna (UX)',
    desc: 'Desain responsif, aksesibilitas keyboard/screen reader, dan state interaktif yang intuitif.',
  },
];

export function About() {
  useDocumentTitle('Tentang Saya');

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Overview Section */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Tentang Saya"
          title="Fokus Pada Kualitas Kode & Rekayasa Perangkat Lunak"
          description="Latar belakang, filosofi kerja, dan rekam jejak saya dalam membangun aplikasi web modern."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-body-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
            <p>
              Saya adalah seorang <strong className="text-ink-primary dark:text-ink-dark-primary font-semibold">Fullstack Software Engineer</strong> dengan fokus kuat pada pengembangan aplikasi web yang cepat, skalabel, dan efisien. Berbeda dengan pendekatan yang hanya mementingkan tampilan luar, saya memprioritaskan fondasi arsitektur yang kokoh.
            </p>
            <p>
              Dengan pengalaman menangani proyek dari tahap ideasi hingga eksekusi produksi, saya terbiasa bekerja dengan stack modern seperti <strong className="text-ink-primary dark:text-ink-dark-primary">React, Laravel, Node.js, dan Tailwind CSS</strong>. Saya percaya bahwa kode yang baik adalah kode yang dapat dibaca dan dipelihara oleh sesama tim dalam jangka panjang.
            </p>
            <p>
              Di luar aktivitas pemrograman harian, saya aktif mempelajari tren arsitektur cloud, mengoptimalkan Core Web Vitals, dan berkontribusi pada proyek open-source.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-4 bg-slate-50 dark:bg-surface-dark-card border-slate-200 dark:border-surface-dark-border p-6 overflow-hidden">
              {(SITE_CONFIG.avatar || SITE_CONFIG.avatarUrl) && (
                <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-500 flex-shrink-0 bg-slate-200 dark:bg-slate-700">
                    <img 
                      src={SITE_CONFIG.avatar || SITE_CONFIG.avatarUrl} 
                      alt={SITE_CONFIG.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-body-base font-bold text-ink-primary dark:text-ink-dark-primary">{SITE_CONFIG.name}</h3>
                    <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">{SITE_CONFIG.role}</p>
                    <p className="text-xs text-ink-muted dark:text-ink-dark-muted">{SITE_CONFIG.location}</p>
                  </div>
                </div>
              )}
              
              <h3 className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary flex items-center gap-2">
                <FiAward className="text-brand-600 dark:text-brand-400" />
                <span>Prinsip Pengembangan</span>
              </h3>
              <div className="space-y-3">
                {PRINCIPLES.map((p, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-body-sm font-bold text-ink-primary dark:text-ink-dark-primary flex items-center gap-2">
                      <FiCheck className="text-brand-600 dark:text-brand-400 w-4 h-4" />
                      {p.title}
                    </h4>
                    <p className="text-body-sm text-ink-muted dark:text-ink-dark-muted pl-6">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-8 border-t border-slate-200 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          eyebrow="Rekam Jejak Karir"
          title="Pengalaman Kerja Professional"
          description="Perjalanan profesional saya sebagai software engineer di berbagai lingkungan pengembangan."
        />

        <div className="space-y-6 max-w-4xl">
          {TIMELINE.map((item, index) => (
            <Card key={index} className="relative pl-6 border-l-4 border-l-brand-600 dark:border-l-brand-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary">
                    {item.role}
                  </h3>
                  <p className="text-body-sm font-medium text-brand-600 dark:text-brand-400">
                    {item.company}
                  </p>
                </div>
                <Badge variant="default" size="sm" className="self-start sm:self-auto">
                  {item.period}
                </Badge>
              </div>
              <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed mt-2">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Comprehensive Tech Stack Section */}
      <section className="py-8 border-t border-slate-200 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          eyebrow="Ekosistem"
          title="Seluruh Skill & Tools Teknikal"
          description="Daftar lengkap pustaka, framework, dan peralatan yang biasa saya operasikan."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill) => {
            const Icon = ICON_MAP[skill.iconKey] || FiTerminal;
            return (
              <Card key={skill.id} className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-btn bg-slate-100 dark:bg-slate-800">
                  <Icon className="w-6 h-6" style={{ color: skill.color }} />
                </div>
                <div>
                  <h4 className="text-body-sm font-bold text-ink-primary dark:text-ink-dark-primary">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted">
                    {skill.category}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

    </main>
  );
}
