import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component("SvgIcon", SvgIcon)
app.component("SvgHolder", SvgHolder)
app.use(createPinia())
app.use(router)

app.mount('#app')
