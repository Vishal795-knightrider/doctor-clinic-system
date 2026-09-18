/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd4fe',
          300: '#8eb8fd',
          400: '#5990fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#0a1024',
        },
        dark: {
          bg: '#06080e',
          surface: '#0c101a',
          card: '#101625',
          'card-hover': '#161e31',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(59, 130, 246, 0.35)',
          muted: '#8e9bb3',
        },
        slate: {
          850: '#131a29',
          925: '#0b101c',
        }
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 16px -2px rgba(0,0,0,0.4)',
        'card': '0 8px 32px -4px rgba(0,0,0,0.5)',
        'card-lg': '0 20px 50px -10px rgba(0,0,0,0.7)',
        'glow-brand': '0 0 30px -5px rgba(59, 130, 246, 0.45)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.45)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.45)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
      },
      backgroundImage: {
        'dark-mesh': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 60%), radial-gradient(circle at 85% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
        'glow-radial': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15), transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
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
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        scaleIn: { from: { opacity: 0, transform: 'scale(0.95)' }, to: { opacity: 1, transform: 'scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseSubtle: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.6 } },
      },
    },
  },
  plugins: [],
};

