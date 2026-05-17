import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 850,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
          if (id.includes('/src/data/quizData.js') || id.includes('\\src\\data\\quizData.js')) return 'quiz-data'
          if (id.includes('/src/data/summaries.js') || id.includes('\\src\\data\\summaries.js')) return 'summaries'
          return undefined
        },
      },
    },
  },
})
