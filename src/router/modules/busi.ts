import { RouteRecordRaw, RouterView } from 'vue-router'
const busiRoutes: RouteRecordRaw = {
  path: 'busi',
  name: 'busi',
  component: RouterView,
  meta: {
    title: '业务管理'
  },
  children: [
    {
      path: 'recommendposition',
      name: 'recommendposition',
      component: () => import('@/views/busi/recommendposition/index.vue'),
      meta: {
        title: '推荐位管理'
      }
    },
    {
      path: 'productMsg',
      name: 'productMsg',
      component: () => import('@/views/busi/productMsg/index.vue'),
      meta: {
        title: '产品消息'
      }
    },
    {
      path: 'template',
      name: 'template',
      component: () => import('@/views/busi/template/index.vue'),
      meta: {
        title: '消息模板'
      }
    }
  ]
}

export default busiRoutes
