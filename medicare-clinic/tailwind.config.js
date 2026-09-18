/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#e0edfe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#38acf7',
          500: '#0e90e6',
          600: '#0272c4',
          700: '#035ba0',
          800: '#074d84',
          900: '#0c416e',
          950: '#082a4a',
        },
        dark: {
          bg: '#000000',
          surface: '#08080a',
          card: '#0d0d10',
          'card-hover': '#131317',
          border: 'rgba(255, 255, 255, 0.09)',
          'border-highlight': 'rgba(255, 255, 255, 0.2)',
          muted: '#888892',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px -2px rgba(0,0,0,0.06)',
        'card': '0 4px 20px -2px rgba(0,0,0,0.4)',
        'card-lg': '0 12px 36px -4px rgba(0,0,0,0.6)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(.16,1,.3,1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(.16,1,.3,1) forwards',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        scaleIn: { from: { opacity: 0, transform: 'scale(0.95)' }, to: { opacity: 1, transform: 'scale(1)' } },
      },
    },
  },
  plugins: [],
};
