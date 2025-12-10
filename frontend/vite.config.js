// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/DesplegesUTM/integracion', // <- CAMBIA este nombre por el repo real en GitHub
});
