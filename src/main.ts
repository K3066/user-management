import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import naive from 'naive-ui'
import SvgIcon from './components/SvgIcon.vue'
import SvgHolder from './components/SvgHolder.vue'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.component('SvgIcon', SvgIcon)
app.component('SvgHolder', SvgHolder)
app.use(createPinia())
app.use(naive)
app.use(pinia)

app.mount('#app')
