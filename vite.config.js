import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so assets resolve correctly when served from the
  // GitHub Pages project subpath (jhiguita11.github.io/Right_Talent/).
  base: './',
  plugins: [react()],
})
