import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/home/Home.vue';

const rootPath = '/Vue2_dev';
export const StaticRoutes = [
  {
    path: `${rootPath}/`,
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'icon-home',
    },
  },
  {
    path: `${rootPath}/modbus`,
    name: 'Modbus',
    component: () => import('@/views/modbus/Modbus.vue'),
    meta: {
      title: 'Modbus',
      icon: 'icon-iot',
    },
  },
  {
    path: `${rootPath}/pagemaking`,
    name: 'PageMaking',
    component: () => import('@/views/pageMaking/PageMaking.vue'),
    meta: {
      title: '自定义表单',
      icon: 'icon-biaodan',
    },
    children: [
      {
        path: `${rootPath}/pagemaking/makingpage`,
        name: 'MakingPage',
        component: () => import('@/views/pageMaking/children/MakingPage.vue'),
        meta: {
          title: '生成页面',
        },
      },
      // {
      //   path: '/pagemaking/generatepage',
      //   name: 'GeneratePage',
      //   component: () => import('@/views/pageMaking/children/GeneratePage.vue'),
      //   meta: {
      //     title: '渲染页面',
      //   },
      // },
    ]
  },
  { path: `**`, redirect:  `${rootPath}/` },
];

const createRouter = () =>
  new Router({
    mode: 'history',
    routes: StaticRoutes,
  });

const router = createRouter();

// 暂时 不懂 这个方法 是干嘛
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
