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
  SiPhp: SiPhp,
  SiLaravel: SiLaravel,
  SiJavascript: SiJavascript,
  SiHtml5: SiHtml5,
  SiExpress: SiExpress,
  SiPython: SiPython,
  SiKotlin: SiKotlin,
  SiFlutter: SiFlutter,
  SiMysql: SiMysql,
  SiGit: SiGit,
  FaJava: FaJava,
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
            eyebrow="Tentang Saya"
            title="Profil & Rekayasa Perangkat Lunak"
            description="Latar belakang, keahlian, dan rekam jejak saya dalam pengembangan web & mobile."
          />
          <a
            href="/cv/my CV (ver. indo).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-body-sm font-semibold transition-colors shadow-sm self-start sm:self-auto shrink-0"
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
              Memiliki kemampuan dasar hingga lanjutan dalam perancangan sistem, logika pemrograman, serta pengembangan aplikasi web dengan menggunakan teknologi terbaru seperti <strong className="text-ink-primary dark:text-ink-dark-primary">PHP, Laravel, EJS, Python, Kotlin, dan Flutter</strong>.
            </p>
            <p>
              Spesialis dalam perancangan analisis web dan arsitektur microservice untuk pengelolaan aplikasi berskala mid-high, serta berpengalaman memimpin dan berkolaborasi dalam tim pengembang software.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-5 bg-slate-50 dark:bg-surface-dark-card border-slate-200 dark:border-surface-dark-border p-6 overflow-hidden">
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

              {/* Contact Quick Info */}
              <div className="space-y-2 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs text-ink-secondary dark:text-ink-dark-secondary">
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
              
              <h3 className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary flex items-center gap-2">
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

      {/* Pendidikan Section */}
      <section className="py-8 border-t border-slate-200 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          eyebrow="Pendidikan"
          title="Latar Belakang Akademik"
          description="Riwayat studi formal dan fokus keilmuan teknologi informasi."
        />

        <div className="space-y-6 max-w-4xl">
          {EDUCATION.map((item, index) => (
            <Card key={index} className="relative pl-6 border-l-4 border-l-brand-600 dark:border-l-brand-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary flex items-center gap-2">
                    <FaGraduationCap className="text-brand-600 dark:text-brand-400" />
                    {item.institution}
                  </h3>
                  <p className="text-body-sm font-medium text-brand-600 dark:text-brand-400">
                    {item.major}
                  </p>
                </div>
                <Badge variant="default" size="sm" className="self-start sm:self-auto flex items-center gap-1">
                  <FiCalendar className="w-3 h-3" />
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

      {/* Pengalaman Timeline Section */}
      <section className="py-8 border-t border-slate-200 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          eyebrow="Pengalaman"
          title="Pengalaman & Proyek Utama"
          description="Rekam jejak eksekusi proyek pengembangan web, mobile, dan sistem informasi."
        />

        <div className="space-y-6 max-w-4xl">
          {EXPERIENCE.map((item, index) => (
            <Card key={index} className="relative pl-6 border-l-4 border-l-brand-600 dark:border-l-brand-500 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary flex items-center gap-2">
                    <FiBriefcase className="text-brand-600 dark:text-brand-400" />
                    {item.title}
                  </h3>
                  <p className="text-body-sm font-medium text-brand-600 dark:text-brand-400">
                    {item.role}
                  </p>
                </div>
                <Badge variant="default" size="sm" className="self-start sm:self-auto">
                  {item.period}
                </Badge>
              </div>
              
              <p className="text-body-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {item.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Sertifikasi Section */}
      <section className="py-8 border-t border-slate-200 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          eyebrow="Sertifikasi"
          title="Sertifikat & Lisensi Keahlian"
          description="Sertifikasi resmi yang telah diselesaikan di bidang teknologi."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <Card key={index} className="p-5 space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-2 rounded-lg bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 w-fit">
                  <FaCertificate className="w-5 h-5" />
                </div>
                <h4 className="text-body-sm font-bold text-ink-primary dark:text-ink-dark-primary">
                  {cert.title}
                </h4>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-ink-muted dark:text-ink-dark-muted flex justify-between items-center">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack / Skills Section */}
      <section className="py-8 border-t border-slate-200 dark:border-surface-dark-border space-y-8">
        <SectionHeading
          eyebrow="Keahlian Teknikal"
          title="Bahasa Pemrograman, Framework & Tools"
          description="Daftar lengkap teknologi yang saya kuasai dan operasikan sesuai CV."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill) => {
            const Icon = ICON_MAP[skill.iconKey] || FiTerminal;
            return (
              <Card key={skill.id} className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-btn bg-slate-100 dark:bg-slate-800 shrink-0">
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
