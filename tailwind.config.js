/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)',
          800: 'rgb(var(--color-surface) / <alpha-value>)',
          700: 'rgb(var(--color-surface-strong) / <alpha-value>)',
          600: 'rgb(var(--color-surface-deep) / <alpha-value>)',
        },
        slate: {
          DEFAULT: 'rgb(var(--color-slate) / <alpha-value>)',
          light: 'rgb(var(--color-slate-light) / <alpha-value>)',
        },
        mint: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          dim: 'rgb(var(--color-accent-dim) / <alpha-value>)',
          muted: 'rgb(var(--color-accent-muted) / <alpha-value>)',
        },
        offwhite: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans:    ['"Poppins"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'line-grow':  'lineGrow 1.2s ease forwards',
        'cursor-blink':'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        fadeUp:    { from:{ opacity:'0', transform:'translateY(24px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:    { from:{ opacity:'0' }, to:{ opacity:'1' } },
        lineGrow:  { from:{ width:'0' }, to:{ width:'100%' } },
        cursorBlink:{ '0%,100%':{ opacity:'1' }, '50%':{ opacity:'0' } },
      },
    },
  },
  plugins: [],
}
