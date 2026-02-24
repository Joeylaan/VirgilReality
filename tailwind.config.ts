import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // VirgilReality brand colors
        'brand-primary': '#00FF00',
        'brand-secondary': '#FF1744',
        'brand-dark': '#0A0A0A',
        'brand-text': '#FFFFFF',
        'brand-accent': '#1ED760',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.2' }],
        'heading': ['2rem', { lineHeight: '1.4' }],
        'subheading': ['1.5rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '5rem',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
