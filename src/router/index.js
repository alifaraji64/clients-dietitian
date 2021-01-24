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
  {
    path: '/search-result',
    name: 'search-result',
    component: () => import("../views/search-result.vue"),
  },
  {
    path: '/profile-detail',
    name: 'profile-detail',
    component: () => import("../views/profile-detail.vue"),
  },
  {
    path: '/support',
    name: 'support',
    component: () => import("../views/support.vue"),
  },
  {
    path: '/recipe-list',
    name: 'recipe-list',
    component: () => import("../views/recipe-list.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login.vue"),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/register.vue"),
  },
  {
    path: '/password',
    name: 'password',
    component: () => import("../views/password.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
