import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router";
import store from "@/store";
import "@/permission/index"

createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(store)
    .mount('#app')
