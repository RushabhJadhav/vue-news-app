import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/local',
      name: 'local',
      component: () => import('../modules/LocalView.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../modules/BusinessView.vue')
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../modules/TechnologyView.vue')
    }
  ]
})

export default router
