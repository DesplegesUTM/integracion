import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/integracion/', // MUY IMPORTANTE, EXACTO como el nombre del repo en GitHub
});
