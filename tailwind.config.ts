import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        uv: {
          primary: 'var(--uv-primary)',
          secondary: 'var(--uv-secondary)',
          tertiary: 'var(--uv-tertiary)',
          bg: 'var(--uv-bg)',
          surface: 'var(--uv-surface)',
          text: 'var(--uv-text)',
          card: 'var(--uv-card)',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      container: {
        center: true,
        padding: '24px',
        screens: {
          '2xl': '1200px',
        },
      },
      boxShadow: {
        'uv-glow': '0 0 24px rgba(45,241,255,.25), inset 0 0 24px rgba(111,127,255,.15)',
      },
    },
  },
  plugins: [],
}
export default config

