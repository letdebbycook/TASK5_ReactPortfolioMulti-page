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
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        surface: {
          light:        '#faf9ff',   // warm-tinted white (slight purple undertone)
          'light-card': '#ffffff',
          dark:         '#060b18',   // deep navy-black
          'dark-card':  '#0d1426',   // slightly lighter navy
          'dark-border':'#1a2540',
        },
        ink: {
          primary:       '#0f0a1e',   // near-black with purple undertone
          secondary:     '#4b5280',   // cool gray-purple
          muted:         '#9196b0',   // muted purple-gray
          'dark-primary':  '#f0eeff',   // warm white
          'dark-secondary':'#c4c8e8',   // cool lavender
          'dark-muted':    '#6b7299',   // muted purple
        },
      },
      fontSize: {
        // Display scale (hero)
        'display':    ['4rem',   { lineHeight: '1.05', fontWeight: '900', letterSpacing: '-0.03em' }],
        'display-sm': ['3rem',   { lineHeight: '1.1',  fontWeight: '900', letterSpacing: '-0.025em' }],
        // Heading scale
        'heading-xl': ['2.75rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.025em' }],
        'heading-lg': ['2rem',    { lineHeight: '1.25', fontWeight: '700', letterSpacing: '-0.02em' }],
        'heading-md': ['1.5rem',  { lineHeight: '1.35', fontWeight: '600', letterSpacing: '-0.015em' }],
        'heading-sm': ['1.125rem',{ lineHeight: '1.4',  fontWeight: '600' }],
        // Body scale
        'body-base':  ['1rem',    { lineHeight: '1.6',  fontWeight: '400' }],
        'body-sm':    ['0.875rem',{ lineHeight: '1.5',  fontWeight: '400' }],
      },
      borderRadius: {
        'flat':    '0.25rem',   // 4px  — data/timeline cards
        'card':    '0.5rem',    // 8px  — default cards
        'btn':     '0.5rem',    // 8px  — buttons
        'xl-card': '1.25rem',   // 20px — media/project cards
      },
      boxShadow: {
        'card':           '0 1px 3px rgba(0,0,0,0.05)',
        'card-hover':     '0 20px 40px -12px rgba(124,58,237,0.15), 0 8px 16px -8px rgba(124,58,237,0.08)',
        'elevated':       '0 8px 24px -4px rgba(124,58,237,0.12), 0 4px 8px -4px rgba(0,0,0,0.06)',
        'elevated-hover': '0 24px 48px -8px rgba(124,58,237,0.22), 0 12px 24px -8px rgba(0,0,0,0.1)',
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'fade-up':  'fadeUp 0.6s ease-out forwards',
        'fade-in':  'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
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
