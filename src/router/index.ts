import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ComponentsChildren } from './autoImport'
function waitForEl(selector: string, timeout = 3000, interval = 50) {
  return new Promise<void>((resolve) => {
    const start = Date.now()
    const handle = setInterval(() => {
      if (document.querySelector(selector) || Date.now() - start > timeout) {
        clearInterval(handle)
        resolve()
      }
    }, interval)
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      redirect: '/components/button',
      children: ComponentsChildren(),
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
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(async (to) => {
  NProgress.done()
  await nextTick()
  const container = document.querySelector('.SideMainLayout .main') as HTMLElement | null
  if (!container) return

  const header = document.querySelector('.Nav') as HTMLElement | null
  const offset = header ? header.offsetHeight : 0

  if (to.hash) {
    await waitForEl(to.hash)
    const target = container.querySelector(to.hash) as HTMLElement | null
    if (target) {
      const top =
        target.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop -
        offset
      container.scrollTo({ top, behavior: 'smooth' })
      return
    }
  }
  container.scrollTo({ top: 0 })
})

export default router
