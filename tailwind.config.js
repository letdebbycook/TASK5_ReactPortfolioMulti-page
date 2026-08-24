/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a',
        },
        surface: {
          light: '#f8fafc', // slate-50
          'light-card': '#ffffff',
          dark: '#090d16',  // deeper slate-950
          'dark-card': '#111827', // slate-900 / gray-900
          'dark-border': '#1f2937',
        },
        ink: {
          primary: '#0f172a',    // slate-900
          secondary: '#475569',  // slate-600
          muted: '#94a3b8',      // slate-400
          'dark-primary': '#f8fafc',   // slate-50
          'dark-secondary': '#cbd5e1', // slate-300
          'dark-muted': '#64748b',     // slate-500
        }
      },
      fontSize: {
        // Defined Typography Scale (4 headings + 1 body base)
        'heading-xl': ['2.75rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.025em' }], // h1 (44px)
        'heading-lg': ['2rem', { lineHeight: '1.25', fontWeight: '700', letterSpacing: '-0.02em' }],     // h2 (32px)
        'heading-md': ['1.5rem', { lineHeight: '1.35', fontWeight: '600', letterSpacing: '-0.015em' }],    // h3 (24px)
        'heading-sm': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],                             // h4 (18px)
        'body-base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],                                   // body (16px)
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],                                 // small (14px)
      },
      borderRadius: {
        'card': '0.75rem',  // standard 12px card radius
        'btn': '0.5rem',    // standard 8px button radius
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
