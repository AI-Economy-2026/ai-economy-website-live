import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#004AAD',
        brandOrange: '#E8890C',
        ink: '#111111',
        softGrey: '#F5F5F7',
        midGrey: '#86868B',
        darkPanel: '#1D1D1F',
      },
    },
  },
  plugins: [],
};

export default config;
