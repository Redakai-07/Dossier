import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animations': ['framer-motion', 'gsap'],
          'vendor-ui': ['antd'],
          
          // Feature chunks
          'components-core': [
            './src/components/Navbar/Navbar',
            './src/components/Footer/Footer',
            './src/components/Layout/Layout'
          ],
          'components-heavy': [
            './src/components/Split Text/SplitText',
            './src/components/Count Up/CountUp',
            './src/components/PDFModal/PDFModal'
          ],
          'pages': [
            './src/models/Home/Home',
            './src/models/AboutMe/AboutMe',
            './src/models/Contact/Contact',
            './src/models/PageNotFound/PageNotFound',
            './src/models/UnderConstruction/UnderConstruction'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase warning limit for better control
  }
})
