/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bubbles: {
          pink: '#ffb3e6',
          blue: '#7ec8e3',
          yellow: '#fff4b8',
          dress: '#ff9ed2',
          hair: '#fff5cc',
        },
      },
      fontFamily: {
        cute: ['"Nunito"', '"Comic Neue"', 'cursive', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
        'sparkle': 'sparkle 1.2s ease-in-out infinite',
        'heart-float': 'heartFloat 2.5s ease-in-out infinite',
        'bubble-rise': 'bubbleRise 4s ease-in infinite',
        'wink': 'wink 0.4s ease-in-out',
        'wink-reaction': 'wink 0.5s ease-in-out 2',
        'bounce-soft': 'bounceSoft 0.6s ease-out',
        'glow': 'glow 2.5s ease-in-out infinite',
        'glitter': 'glitter 1.5s ease-in-out infinite',
        'fly-float': 'fly-float 2.2s ease-in-out infinite',
        'correct-pop': 'correct-pop 0.5s ease-out',
        'sparkle-float': 'sparkle-float 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.3)' },
        },
        heartFloat: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(-120px) scale(1.2)', opacity: '0' },
        },
        bubbleRise: {
          '0%': { transform: 'translateY(0) scale(0.6)', opacity: '0.7' },
          '100%': { transform: 'translateY(-200px) scale(1)', opacity: '0' },
        },
        wink: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '45%, 55%': { transform: 'scaleY(0.05)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 12px rgba(255,182,230,0.8))' },
          '50%': { filter: 'drop-shadow(0 0 24px rgba(255,182,230,1)) drop-shadow(0 0 32px rgba(126,200,227,0.6))' },
        },
        glitter: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        'fly-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        'correct-pop': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        'sparkle-float': {
          '0%, 100%': { opacity: '0.6', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '1', transform: 'translateY(-6px) scale(1.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
