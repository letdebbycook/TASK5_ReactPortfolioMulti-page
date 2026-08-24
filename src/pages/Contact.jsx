import React, { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { SITE_CONFIG } from '../lib/constants';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend, FiCheckCircle } from 'react-icons/fi';

export function Contact() {
  useDocumentTitle('Kontak');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission handling without real backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <SectionHeading
        eyebrow="Hubungi Saya"
        title="Mari Berdiskusi Mengenai Proyek Anda"
        description="Punya pertanyaan teknis, penawaran proyek, atau ingin berdiskusi mengenai peluang kerja sama? Silakan kirim pesan melalui form atau kontak langsung."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="space-y-6 bg-slate-50 dark:bg-surface-dark-card">
            <h3 className="text-heading-sm font-bold text-ink-primary dark:text-ink-dark-primary">
              Informasi Kontak
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-start gap-4 p-3 rounded-btn hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors group"
              >
                <div className="p-2.5 rounded-btn bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 group-hover:scale-105 transition-transform">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-medium">Alamat Email</p>
                  <p className="text-body-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-btn">
                <div className="p-2.5 rounded-btn bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-medium">Domisili Utama</p>
                  <p className="text-body-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-medium">Profil Professional</p>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-btn border border-slate-200 dark:border-slate-700 text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-btn border border-slate-200 dark:border-slate-700 text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                {(SITE_CONFIG.instagram || SITE_CONFIG.twitter) && (
                  <a
                    href={SITE_CONFIG.instagram || SITE_CONFIG.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-btn border border-slate-200 dark:border-slate-700 text-ink-secondary dark:text-ink-dark-secondary hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Interactive Contact Form */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FiCheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-heading-md font-bold text-ink-primary dark:text-ink-dark-primary">
                  Pesan Terkirim!
                </h3>
                <p className="text-body-base text-ink-secondary dark:text-ink-dark-secondary max-w-md mx-auto">
                  Terima kasih telah menghubungi saya. Saya akan membaca pesan Anda dan membalasnya dalam waktu 1x24 jam.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Kirim Pesan Lain
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-body-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-2.5 rounded-btn bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-ink-primary dark:text-ink-dark-primary text-body-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-body-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                      Email Contact <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-4 py-2.5 rounded-btn bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-ink-primary dark:text-ink-dark-primary text-body-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-body-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                    Subjek Diskusi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Diskusi Penawaran Proyek Fullstack"
                    className="w-full px-4 py-2.5 rounded-btn bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-ink-primary dark:text-ink-dark-primary text-body-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-body-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                    Pesan Detail <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan gambaran proyek, timeline, atau pertanyaan Anda di sini..."
                    className="w-full px-4 py-2.5 rounded-btn bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-ink-primary dark:text-ink-dark-primary text-body-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  icon={FiSend}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan Sekarang'}
                </Button>
              </form>
            )}
          </Card>
        </div>

      </div>
    </main>
  );
}
