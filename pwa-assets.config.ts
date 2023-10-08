import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
  images: ['public/logo.svg'],
  preset: {
    apple: {
      sizes: [180],
    },
    maskable: {
      sizes: [512],
    },
    transparent: {
      favicons: [[48, 'favicon.ico']],
      sizes: [64, 192, 512],
    },
  },
});
