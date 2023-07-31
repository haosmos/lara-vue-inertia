import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    // server: {
    //     host: '0.0.0.0',
    //     hmr: {
    //         host: 'localhost',
    //         protocol: 'ws'
    //     },
    //     watch: {
    //         usePolling: true,
    //     }
    // },

    server: {
        // host: '0.0.0.0',
        host: true,
        // host: '127.0.0.1',
        port: 5173,
        hmr: {
            host: 'localhost',
            // host: 'localhost',
            protocol: 'ws',
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
    }}
)
