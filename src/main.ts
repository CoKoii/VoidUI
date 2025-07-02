import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import '@/styles/theme.scss'
import '@/styles/base.scss'
import App from './App.vue'
import router from './router'
import CodePreview from './components/CodePreview/CodePreview.vue'
const app = createApp(App)
app.component('CodePreview', CodePreview)
app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
