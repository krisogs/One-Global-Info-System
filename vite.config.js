import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Listen on all network interfaces so phones/tablets on the same
    // Wi-Fi can reach the dev server at http://<your-ip>:5173
    host: true,
    // Allow tunnel hostnames (cloudflared, ngrok, etc.) to load the site.
    // Dev-server only — has no effect on the production build.
    allowedHosts: true,
  },
})
