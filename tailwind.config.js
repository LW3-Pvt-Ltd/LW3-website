/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C9A84C',
          white: '#F5F2EC',
        },
        surface: {
          base: '#0A0A08',
          elevated: '#1A1A16',
        },
        text: {
          primary: '#F5F2EC',
          dim: '#4A4A45',
          muted: '#888780',
          dark: '#1A1A16',
          near_black: '#0A0A08',
        },
        accent: {
          blue: '#0033FF',
          yellow: '#FFCC00',
          red: '#E24B4A',
          gold: '#C9A84C',
        },
      },
      fontFamily: {
        monument: ['"Monument Extended"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sf-pro': ['"SF Pro Display"', 'system-ui', 'sans-serif'],
        'dm-mono': ['"DM Mono"', 'monospace'],
        neopixel: ['"Neopixel"', 'monospace'],
      },
    },
  },
  plugins: [],
}
