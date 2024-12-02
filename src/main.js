import { ViteSSG } from 'vite-ssg/single-page'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Widget from './widget.vue'

ViteSSG(App)
createApp(Widget).mount('#widget')