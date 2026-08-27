/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Psicologi Biru Navy: Kepercayaan, Kompetensi Teknis, Stabilitas, dan Otoritas Profesional
        brand: {
          50:  '#eff6ff', // ice-blue highlight
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // bright navy blue accent
          600: '#1d4ed8', // authoritative deep navy blue
          700: '#1e40af', // deep classic navy
          800: '#1e3a8a', // rich dark navy
          900: '#172554', // midnight navy
          950: '#0a152f', // deepest oceanic navy
        },
        accent: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          400: '#4ade80',
          500: '#10b981', // emerald growth/success accent
          600: '#059669',
          700: '#047857',
        },
        surface: {
          light:        '#f8fafc', // crisp clean slate canvas
          'light-card': '#ffffff', // pure white card
          dark:         '#070d19', // deep oceanic midnight navy canvas
          'dark-card':  '#0d172e', // refined deep navy card
          'dark-border':'#172647', // subtle navy border
        },
        ink: {
          primary:        '#091322', // deep navy-black ink
          secondary:      '#334155', // slate-600
          muted:          '#64748b', // slate-500
          'dark-primary': '#f0f6fc', // crisp ice-white
          'dark-secondary':'#c2d4ec', // light navy-tinted text
          'dark-muted':   '#6b829e', // muted oceanic slate
        },
      },
      fontSize: {
        'display':    ['4rem',    { lineHeight: '1.05', fontWeight: '900', letterSpacing: '-0.03em' }],
        'display-sm': ['3rem',    { lineHeight: '1.1',  fontWeight: '900', letterSpacing: '-0.025em' }],
        'heading-xl': ['2.75rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.025em' }],
        'heading-lg': ['2rem',    { lineHeight: '1.25', fontWeight: '700', letterSpacing: '-0.02em' }],
        'heading-md': ['1.5rem',  { lineHeight: '1.35', fontWeight: '600', letterSpacing: '-0.015em' }],
        'heading-sm': ['1.125rem',{ lineHeight: '1.4',  fontWeight: '600' }],
        'body-base':  ['1rem',    { lineHeight: '1.6',  fontWeight: '400' }],
        'body-sm':    ['0.875rem',{ lineHeight: '1.5',  fontWeight: '400' }],
      },
      borderRadius: {
        'flat':    '0.25rem',   // 4px
        'card':    '0.5rem',    // 8px
        'btn':     '0.5rem',    // 8px
        'xl-card': '1rem',      // 16px
      },
      boxShadow: {
        'card':           '0 1px 3px 0 rgba(7, 13, 25, 0.05), 0 1px 2px -1px rgba(7, 13, 25, 0.05)',
        'card-hover':     '0 12px 28px -6px rgba(10, 21, 47, 0.1), 0 6px 12px -4px rgba(10, 21, 47, 0.05)',
        'elevated':       '0 4px 6px -1px rgba(7, 13, 25, 0.06), 0 2px 4px -2px rgba(7, 13, 25, 0.04)',
        'elevated-hover': '0 16px 32px -8px rgba(29, 78, 216, 0.15), 0 8px 16px -4px rgba(7, 13, 25, 0.06)',
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'fade-up':  'fadeUp 0.6s ease-out forwards',
        'fade-in':  'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
