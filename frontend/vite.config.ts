import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'], // Ordem de resolução
    alias: {
      '@': '/src', // Aliases para imports (opcional mas útil)
    },
  },
  server: {
    port: 3000, // Porta personalizada (opcional)
  },
});