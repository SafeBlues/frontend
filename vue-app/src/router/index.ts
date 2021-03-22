import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Dashboard from "@/views/Dashboard.vue"
import Admin from "@/views/Admin.vue"
import Login from "@/views/Login.vue"

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
