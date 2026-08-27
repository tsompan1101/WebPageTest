// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: node({ mode: 'standalone' }),
    integrations: [react()],

  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 3000,
      watch: {
        ignored: ['**/*.rar', '**/*.zip', '**/*.7z', '**/public/videos/**'],
      },
      allowedHosts: [
            'intermetatarsal-monnie-discriminatively.ngrok-free.dev'
      ],
    },
  },
});
