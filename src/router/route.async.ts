// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/dashboard/index.vue'),
  },
];

export default asyncRoutes;
