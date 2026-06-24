import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'sitemap.xml'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      },
      manifest: {
        name: 'JSON Tools - Free Online Developer Utilities',
        short_name: 'JSON Tools',
        description: 'Free online developer utilities. JSON formatter, Base64 encoder, hash generator, and 15+ more tools. 100% browser-side processing.',
        theme_color: '#3b82f6',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚡</text></svg>',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      }
    })
  ],
})
