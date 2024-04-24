// tailwind.config.js
import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
