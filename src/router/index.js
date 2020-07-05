import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {pageIndex: 0}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),    
    meta: {pageIndex: 1}
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue'),    
    meta: {pageIndex: 2}
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue'),    
    meta: {pageIndex: 3}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
