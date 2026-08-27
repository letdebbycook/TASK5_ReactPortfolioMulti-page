import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SKILLS } from '../data/skills';
import { SITE_CONFIG } from '../lib/constants';
import { 
  FiBriefcase, 
  FiCheck, 
  FiTerminal, 
  FiAward, 
  FiMail, 
  FiPhone, 
  FiGithub, 
  FiCalendar, 
  FiDownload 
} from 'react-icons/fi';
import { FaGraduationCap, FaCertificate, FaJava } from 'react-icons/fa';
import { 
  SiPhp, 
  SiLaravel, 
  SiJavascript, 
  SiPython, 
  SiKotlin, 
  SiFlutter, 
  SiMysql, 
  SiGit, 
  SiHtml5, 
  SiExpress 
} from 'react-icons/si';

const ICON_MAP = {
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
  FaJava,
};

const EDUCATION = [
  {
    period: '2023 — Sekarang',
    institution: 'Politeknik Negeri Padang',
    major: 'Program Studi Teknologi Rekayasa Perangkat Lunak',
    description:
      'Menguasai berbagai bahasa pemrograman pengembangan web menggunakan PHP, Laravel dan EJS. Serta mengembangkan aplikasi mobile menggunakan kotlin dan flutter. Spesialis perancangan analisis web dan arsitektur microservice untuk pengelolaan aplikasi berskala mid-high.',
  },
  {
    period: '2020 — 2023',
    institution: 'SMAS IT Mutiara Duri',
    major: 'Jurusan IPA',
    description:
      'Mendalami dasar-dasar pemrograman web menggunakan HTML dan CSS, memahami konsep basis data. Serta memahami fundamental bahasa pemrograman Java.',
  },
];

const EXPERIENCE = [
  {
    period: '2025',
    role: 'Project Manager',
    title: 'SIPRAKTA',
    description:
      'Memimpin Tim dalam merancang dan mengembangkan web untuk Sistem Informasi Sidang PKL dan Tugas Akhir Jurusan Administrasi Niaga Politeknik Negeri Padang (SIPRAKTA). Berhasil di Launching tepat waktu pada 18 Juli 2025.',
    technologies: ['Laravel', 'MySQL', 'CSS', 'Javascript'],
  },
  {
    period: '2025',
    role: 'Fullstack Developer',
    title: 'Kurnia Duri Web',
    description:
      'Membangun Website E-Commerce pada penjualan jenis kain dengan CRUD dan pencarian. Mengoptimalkan tampilan dengan EJS dan mengelola source code di Github.',
    technologies: ['EJS', 'Javascript', 'MySQL', 'Git & Github'],
  },
  {
    period: '2025',
    role: 'Mobile & ML Developer',
    title: 'Kurnia Mobile',
    description:
      'Membangun Platform Penjualan dan Stok Kain berbasis Mobile untuk Toko Kurnia Berbasis Machine Learning. Menerapkan segmentasi produk menggunakan metode K-Means dan prediksi stok menggunakan metode Random Forest.',
    technologies: ['Flutter', 'MySQL', 'REST API', 'Python', 'Machine Learning'],
  },
];

const CERTIFICATIONS = [
  {
    title: 'Java Fundamental',
    date: '3 Mei 2024',
    issuer: 'Oracle Academy',
  },
  {
    title: 'LOGISTICELLS',
    date: '22 Maret 2025',
    issuer: 'Sertifikasi',
  },
  {
    title: 'Huawei ICT Academy',
    date: '27 Desember 2025',
    issuer: 'Huawei Academy',
  },
  {
    title: 'Red Hat Academy',
    date: '12 April 2026',
    issuer: 'Red Hat',
  },
];

const SOFT_SKILLS = [
  'Fasih Berbahasa Indonesia',
  'Fasih Berbahasa Inggris',
  'Perencanaan Proyek',
  'Kolaborasi dan Komunikasi',
  'Problem Solving',
];

export function About() {
  useDocumentTitle('Tentang Saya');

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Overview Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <SectionHeading
            variant="default"
            eyebrow="Tentang Saya"
            title="Profil & Rekayasa Perangkat Lunak"
            description="Latar belakang, keahlian, dan rekam jejak saya dalam pengembangan web & mobile."
          />
          <a
            href="/cv/my CV (ver. indo).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-btn bg-brand-600 hover:bg-brand-700 text-white text-body-sm font-semibold transition-colors shadow-sm self-start sm:self-auto shrink-0 font-display shimmer-btn"
          >
            <FiDownload className="w-4 h-4" />
            <span>Unduh CV (PDF)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-body-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
            <p>
              Saya adalah seorang <strong className="text-ink-primary dark:text-ink-dark-primary font-semibold">Mahasiswa Teknologi Rekayasa Perangkat Lunak</strong> di Politeknik Negeri Padang yang memiliki minat tinggi di bidang pengembangan web dan mobile.
            </p>
            <p>
              Memiliki kemampuan dasar hingga lanjutan dalam perancangan sistem, logika pemrograman, serta pengembangan aplikasi web dengan menggunakan teknologi terbaru seperti <strong className="text-ink-primary dark:text-ink-dark-primary font-semibold">PHP, Laravel, EJS, Python, Kotlin, dan Flutter</strong>.
            </p>
            <p>
              Spesialis dalam perancangan analisis web dan arsitektur microservice untuk pengelolaan aplikasi berskala mid-high, serta berpengalaman memimpin dan berkolaborasi dalam tim pengembang software.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card variant="featured" className="space-y-5">
              {(SITE_CONFIG.avatar || SITE_CONFIG.avatarUrl) && (
                <div className="flex items-center gap-4 pb-4 border-b border-ink-primary/10 dark:border-surface-dark-border">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-500 flex-shrink-0 bg-brand-100 dark:bg-brand-950">
                    <img 
                      src={SITE_CONFIG.avatar || SITE_CONFIG.avatarUrl} 
                      alt={SITE_CONFIG.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-body-base font-bold text-ink-primary dark:text-ink-dark-primary truncate">{SITE_CONFIG.name}</h3>
                    <p className="text-xs text-brand-600 dark:text-brand-400 font-medium truncate">{SITE_CONFIG.role}</p>
                    <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-mono truncate">{SITE_CONFIG.location}</p>
                  </div>
                </div>
              )}

              {/* Contact Quick Info */}
              <div className="space-y-2 pb-4 border-b border-ink-primary/10 dark:border-surface-dark-border text-xs text-ink-secondary dark:text-ink-dark-secondary">
                <div className="flex items-center gap-2">
                  <FiMail className="text-brand-600 dark:text-brand-400 shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline truncate">{SITE_CONFIG.email}</a>
                </div>
                {SITE_CONFIG.phone && (
                  <div className="flex items-center gap-2">
                    <FiPhone className="text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{SITE_CONFIG.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <FiGithub className="text-brand-600 dark:text-brand-400 shrink-0" />
                  <a href={SITE_CONFIG.github} target="_blank" rel="noreferrer" className="hover:underline truncate">{SITE_CONFIG.github}</a>
                </div>
              </div>
              
              <h3 className="font-display text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary flex items-center gap-2">
                <FiAward className="text-brand-600 dark:text-brand-400" />
                <span>Keahlian & Soft Skills</span>
              </h3>
              <div className="space-y-2">
                {SOFT_SKILLS.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-body-sm text-ink-primary dark:text-ink-dark-primary">
                    <FiCheck className="text-brand-600 dark:text-brand-400 w-4 h-4 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pendidikan Section with Numbered Timeline */}
      <section className="py-8 border-t border-ink-primary/10 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          variant="with-line"
          title="Latar Belakang Akademik"
          description="Riwayat studi formal dan fokus keilmuan teknologi informasi."
        />

        <div className="space-y-4 max-w-4xl">
          {EDUCATION.map((item, index) => (
            <div 
              key={index}
              className="relative p-5 rounded-xl-card bg-surface-light-card dark:bg-surface-dark-card border border-ink-primary/10 dark:border-surface-dark-border hover:border-brand-500/30 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 border border-brand-200/50 dark:border-brand-800/50 font-display font-bold text-xs">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary flex items-center gap-2">
                      {item.institution}
                    </h3>
                    <p className="text-body-sm font-medium text-brand-600 dark:text-brand-400">
                      {item.major}
                    </p>
                  </div>
                </div>
                <Badge variant="brand" size="sm" className="self-start sm:self-auto flex items-center gap-1 font-mono">
                  <FiCalendar className="w-3 h-3" />
                  {item.period}
                </Badge>
              </div>
              <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed pl-11">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pengalaman Timeline Section */}
      <section className="py-8 border-t border-ink-primary/10 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          variant="with-line"
          title="Pengalaman & Proyek Utama"
          description="Rekam jejak eksekusi proyek pengembangan web, mobile, dan sistem informasi."
        />

        <div className="space-y-4 max-w-4xl">
          {EXPERIENCE.map((item, index) => (
            <div 
              key={index} 
              className="p-5 rounded-xl-card bg-surface-light-card dark:bg-surface-dark-card border border-ink-primary/10 dark:border-surface-dark-border hover:border-brand-500/30 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400 flex items-center justify-center shrink-0 border border-accent-200/50 dark:border-accent-600/30 font-display font-bold text-xs">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-body-sm font-medium text-brand-600 dark:text-brand-400">
                      {item.role}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" size="sm" className="self-start sm:self-auto font-mono">
                  {item.period}
                </Badge>
              </div>
              
              <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed pl-11">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1 pl-11">
                {item.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sertifikasi Section */}
      <section className="py-8 border-t border-ink-primary/10 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          variant="with-line"
          title="Sertifikat & Lisensi Keahlian"
          description="Sertifikasi resmi yang telah diselesaikan di bidang teknologi informasi."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index} 
              className="p-5 rounded-xl-card bg-surface-light-card dark:bg-surface-dark-card border border-ink-primary/10 dark:border-surface-dark-border hover:border-brand-500/30 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 w-fit border border-brand-200/50 dark:border-brand-800/40">
                  <FaCertificate className="w-5 h-5" />
                </div>
                <h4 className="font-display text-body-sm font-bold text-ink-primary dark:text-ink-dark-primary">
                  {cert.title}
                </h4>
              </div>
              <div className="pt-2.5 border-t border-ink-primary/5 dark:border-surface-dark-border text-xs text-ink-muted dark:text-ink-dark-muted flex justify-between items-center font-mono">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-8 border-t border-ink-primary/10 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          variant="with-line"
          title="Bahasa Pemrograman, Framework & Tools"
          description="Daftar lengkap teknologi yang saya kuasai dan operasikan sesuai CV."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SKILLS.map((skill) => {
            const Icon = ICON_MAP[skill.iconKey] || FiTerminal;
            return (
              <div 
                key={skill.id} 
                className="p-3.5 rounded-xl-card bg-surface-light-card dark:bg-surface-dark-card border border-ink-primary/10 dark:border-surface-dark-border hover:border-brand-500/40 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-btn bg-ink-primary/5 dark:bg-surface-dark-border/60 shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" style={{ color: skill.color }} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-body-sm font-bold text-ink-primary dark:text-ink-dark-primary truncate">
                    {skill.name}
                  </h4>
                  <p className="text-[11px] text-ink-muted dark:text-ink-dark-muted truncate">
                    {skill.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}
