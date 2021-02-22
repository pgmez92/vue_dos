import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Api from '../views/Api.vue'
import Carrito from '../views/Carrito.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/api',
    name: 'Api',
    component: Api
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
