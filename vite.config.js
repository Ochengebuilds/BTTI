import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repository-name' with your exact GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: 'BTTI', 
})