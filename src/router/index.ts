import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'account',
      component: () => import('../views/LoginCard.vue')
    },
    {
      path: '/user-dashboard/:id',
      name: 'userDashboard',
      component: () => import('../views/UserDashboard.vue')
    }
  ]
})

export default router
