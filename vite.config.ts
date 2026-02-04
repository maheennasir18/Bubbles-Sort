import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Bubbles Bubble Sorting',
        short_name: 'Bubbles Sort',
        description: 'Sort tech bubbles into Future Tech or Fun Tech — cute & fun',
        theme_color: '#ffb3e6',
        background_color: '#fff5f8',
        icons: [
          { src: '/assets/Bubbles1.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/assets/Bubbles1.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
