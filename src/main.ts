import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import SvgIcon from '@/components/SvgIcon.vue'
import SvgHolder from '@/components/SvgHolder.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component("SvgIcon", SvgIcon)
app.component("SvgHolder", SvgHolder)
app.use(createPinia())
app.use(naive)
app.use(router)

app.mount('#app')
