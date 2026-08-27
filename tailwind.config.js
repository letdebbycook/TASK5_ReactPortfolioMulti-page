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
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5', // modern crisp tech indigo
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        surface: {
          light:        '#f8fafc',   // crisp clean slate-50 canvas
          'light-card': '#ffffff',   // pure white card
          dark:         '#090d16',   // deep clean pitch-slate canvas
          'dark-card':  '#111827',   // clean slate-900 card
          'dark-border':'#1e293b',   // slate-800 border
        },
        ink: {
          primary:        '#0f172a',   // neutral slate-900
          secondary:      '#475569',   // neutral slate-600
          muted:          '#94a3b8',   // neutral slate-400
          'dark-primary': '#f8fafc',   // neutral slate-50
          'dark-secondary':'#cbd5e1',  // neutral slate-300
          'dark-muted':   '#64748b',   // neutral slate-500
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
        'card':           '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover':     '0 12px 28px -6px rgba(15, 23, 42, 0.08), 0 6px 12px -4px rgba(15, 23, 42, 0.04)',
        'elevated':       '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'elevated-hover': '0 16px 32px -8px rgba(79, 70, 229, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
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
