import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // iGEM 静态托管：使用相对路径，任何二级目录部署都可用
  base: './',

  plugins: [react(), tailwindcss()],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkFileNames: 'assets/js/[name]-[hash].js',
    entryFileNames: 'assets/js/[name]-[hash].js',
    assetFileNames: ({ name }) => {
      const fileName = name ?? '';
      if (/\.(gif|jpe?g|png|svg|webp|ico)$/i.test(fileName)) {
        return 'assets/images/[name]-[hash][extname]';
      }
      if (/\.css$/i.test(fileName)) {
        return 'assets/css/[name]-[hash][extname]';
      }
      if (/\.(woff2?|eot|ttf|otf)$/i.test(fileName)) {
        return 'assets/fonts/[name]-[hash][extname]';
      }
      return 'assets/[name]-[hash][extname]';
    },
  },

  server: {
    port: 5173,
    open: true,
  },
});
