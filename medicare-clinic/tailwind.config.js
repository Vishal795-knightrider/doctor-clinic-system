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
          500: '#3370f5',
          600: '#1a4fea',
          700: '#143dd8',
          800: '#1632af',
          900: '#172e89',
          950: '#111d53',
        },
        slate: {
          850: '#172033',
        }
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 16px -2px rgba(20,61,216,0.10)',
        'card': '0 4px 32px -4px rgba(20,61,216,0.12)',
        'card-lg': '0 16px 48px -8px rgba(20,61,216,0.18)',
        'glow': '0 0 40px rgba(51,112,245,0.25)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(ellipse 80% 60% at 60% 0%, rgba(51,112,245,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 60%, rgba(8,145,178,0.1) 0%, transparent 60%)',
        'section-mesh': 'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(51,112,245,0.06) 0%, transparent 60%)',
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
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        scaleIn: { from: { opacity: 0, transform: 'scale(0.95)' }, to: { opacity: 1, transform: 'scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
};
