import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
        {
        registerType: 'autoUpdate',
        devOptions: {
        enabled: true
        },
        manifest: {
        name: "Soja's boilerplate",
        short_name: 'Sojaplate',
        description: "Soja's boilerplate with vite and react",
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/pwa-icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      }
    })
  ],
});
