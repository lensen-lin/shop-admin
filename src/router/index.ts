import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import busiRoutes from './modules/busi'
import Layout from '@/layout/layout.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: async () => await import('../views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      busiRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: async () => await import('../views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  nprogress.start()
})

router.afterEach(() => {
  nprogress.done()
})
export default router
