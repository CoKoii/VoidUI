import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/Home.vue'),
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('@/views/Components/Components.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/About.vue'),
    },
  ],
})

export default router
