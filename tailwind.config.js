/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#03060f',
          900: '#060b1a',
          800: '#0a1226',
          700: '#101c38',
          600: '#18294f',
        },
        cyan: {
          glow: '#5eeaff',
          core: '#22d3ee',
          deep: '#0891b2',
        },
        // Fiorella
        cream: '#FBF7F0',
        ink: '#241A14',
        terracotta: '#B4522F',
        olive: '#5B6B45',
        // Meridian
        clinical: '#F4F7FB',
        navy: '#0C1B2A',
        clinicblue: '#1B69C4',
        // Rooted
        stone: '#F6F4EE',
        bark: '#1E2A22',
        forest: '#2F6B45',
        moss: '#7A8B5F',
        clay: '#C2703D',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        // demo-site identities
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        dm: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
