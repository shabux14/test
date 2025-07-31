// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",  // این خط باید باشد
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1E40AF',
        secondaryOrange: '#F97316',
        accentYellow: '#FBBF24',
        lightBlue: '#DBEAFE',
        lightOrange: '#FFD8A8',
        lightYellow: '#FEF3C7',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s ease-in-out infinite',
        'bounce-slow': 'bounce 6s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':   { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.7 },
          '50%':      { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
