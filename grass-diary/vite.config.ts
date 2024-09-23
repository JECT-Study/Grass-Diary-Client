import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleX from 'vite-plugin-stylex';
import path from 'path';
import svgr from '@svgr/rollup';

export default defineConfig({
  plugins: [react(), styleX(), svgr()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@icon': path.resolve(__dirname, 'src/assets/icon'),
      '@state': path.resolve(__dirname, 'src/state'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@image': path.resolve(__dirname, 'src/assets/image'),
    },
  },
});
