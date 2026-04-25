/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neon: {
          green: '#00ff9f',
          blue: '#00d4ff',
          purple: '#b794f6',
          pink: '#ff006e',
        }
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'monospace'],
        body: ['"Inter Variable"', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00ff9f, 0 0 20px #00ff9f, 0 0 30px #00ff9f' },
          '100%': { textShadow: '0 0 20px #00ff9f, 0 0 30px #00ff9f, 0 0 40px #00ff9f' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}
