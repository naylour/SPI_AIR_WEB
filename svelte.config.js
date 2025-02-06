import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'svelte-adapter-bun';

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        files: {
            appTemplate: './template/index.html',
            errorTemplate: './template/error.html',
            assets: './assets',
            hooks: {
                client: './lib/hooks/client.ts',
                server: './lib/hooks/server.ts',
                universal: './lib/hooks/universal.ts'
            },
            lib: './lib',
            routes: './template/routes',
            serviceWorker: './src/worker.ts'
        },
        alias: {
            styles: './src/styles',
            components: './src/components',
            sections: './src/sections',
            lib: './lib',
            stores: './lib/stores'
        },
        appDir: 'storage',
        output: {
            bundleStrategy: 'single',
            preloadStrategy: 'modulepreload'
        },
        typescript: {
            config: (config) => ({ ...config, esModuleInterop: true })
        }
    },
    compilerOptions: {
        runes: true
    }
};
