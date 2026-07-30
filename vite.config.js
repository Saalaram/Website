import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Redirect all 404s back to index.html so React Router handles routing
    historyApiFallback: true,
  },
});
