import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Vazhipokkan Travel Guide',
        short_name: 'Vazhipokkan',
        description: 'Explore the beauty of Tamil Nadu with Vazhipokkan.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/vazhipokkan-pwa.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 7000,
    open: true,
  },
});

