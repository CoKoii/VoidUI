import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
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
      children: [
        {
          path: 'install',
          name: 'Install',
          component: () => import('@/VoidComponents/Install/Install.vue'),
        },
        {
          path: 'button',
          name: 'Button',
          component: () => import('@/VoidComponents/Button/Button.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/About.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound/NotFound.vue'),
    },
  ],
})

// 路由切换前开始加载
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// 路由切换后结束加载
router.afterEach(() => {
  NProgress.done()
})

export default router
