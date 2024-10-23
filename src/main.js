import './assets/main.css'
import "./assets/icons/fontawesome.js"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('icon', FontAwesomeIcon)

createApp(App)


app.mount('#app')
