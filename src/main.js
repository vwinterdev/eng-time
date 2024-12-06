import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import routes from './routes.js'

export const createApp = ViteSSG(App, {
    routes,
  }, 
  ({ app }) => {
    app.use(MotionPlugin)
})

