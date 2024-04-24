// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss'; // ou o plugin que você estiver usando para o Tailwind CSS

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
  ],
});



{/*

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
*/}