import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    // host: true,
    // host: '127.0.0.1',
    port: 5173,
    hmr: {
      host: 'localhost',
      // host: 'localhost',
      protocol: 'ws',
    },
    watch: {
      usePolling: true,
    },

  },
  plugins: [
    laravel({
      input: [ 'resources/css/app.css', 'resources/js/app.js' ],
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      }
    }),
  ],
  resolve: {
    alias: {
      ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue.es.js')
    }
  }
})
