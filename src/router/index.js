import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: () => import("../views/recipes.vue"),
  },
  {
    path: '/new-recipes',
    name: 'new-recipes',
    component: () => import("../views/new-recipes.vue"),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import("../views/profile.vue"),
  },
  {
    path: '/patients',
    name: 'patients',
    component: () => import("../views/patients.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
