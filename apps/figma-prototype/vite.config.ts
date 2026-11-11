import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { assetsInlineLimit: 0, cssMinify: false, rolldownOptions: { input: {
    prototype: fileURLToPath(new URL('./index.html', import.meta.url)),
    acceptance: fileURLToPath(new URL('./acceptance.html', import.meta.url))
  } } },
  // Workspace builds change during development; serve their current modules directly.
  optimizeDeps: { exclude: ['@croma/figma-ds', '@croma/figma-foundations'] }
});
