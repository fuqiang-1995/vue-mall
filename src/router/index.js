import {createRouter, createWebHashHistory} from "vue-router";
import IndexPage from "@/pages/IndexPage";
import LoginPage from "@/pages/LoginPage";
const routes = [
    {
        path:'/',
        component:IndexPage
    },
    {
        path: '/login',
        component: LoginPage
    }
]

export default createRouter({
    history:createWebHashHistory(),
    routes
})