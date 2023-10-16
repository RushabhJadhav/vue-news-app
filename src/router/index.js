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
      path: '/world',
      name: 'world',
      component: () => import('../modules/WorldView.vue')
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
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: () => import('../modules/EntertainmentView.vue')
    },
    {
      path: '/sports',
      name: 'sports',
      component: () => import('../modules/SportsView.vue')
    },
    {
      path: '/science',
      name: 'science',
      component: () => import('../modules/ScienceView.vue')
    },
    {
      path: '/health',
      name: 'health',
      component: () => import('../modules/HealthView.vue')
    }
  ]
})

export default router
