import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import type { ViteUserConfig } from 'vitest/config';

const viteConfig = defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});

const vitestConfig: ViteUserConfig = {
  test: {
    globals: true,
    setupFiles: './test/setup-test.ts',
    environment: 'jsdom',
    include: ['src/**/*.spec.tsx'],
    exclude: ['src/**/*.stories.tsx'],
  },
};

export default mergeConfig(viteConfig, vitestConfig);
