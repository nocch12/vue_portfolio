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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),    
    meta: {pageIndex: 1}
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue'),    
    meta: {pageIndex: 3}
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue'),    
    meta: {pageIndex: 4}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
