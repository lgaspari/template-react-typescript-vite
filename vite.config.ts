import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Let's Vite understand non-relative imports via baseUrl or paths.
    tsconfigPaths(),

    // Allows importing svgs as React components (e.g. `import Logo from './logo.svg?react'`).
    svgr(),

    // Enables fast refresh and jsx runtime (no `import React from 'react'`).
    react(),
  ],
});
