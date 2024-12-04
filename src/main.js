import { ViteSSG } from 'vite-ssg/single-page'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
export const createApp = ViteSSG(App, ({ app }) => {
    app.use(MotionPlugin)
})

