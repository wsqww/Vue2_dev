import store from '@/store/index';
import router from '@/router/index';

function filterAuthRoutes() {
  return [
    {
      path: '/async_router',
      name: 'AsyncRouter',
      component: () => import('@/views/asyncRoutes/AsyncRoutes.vue'),
      meta: {
        title: 'AsyncRouter',
        icon: 'icon-ce',
      },
    },
  ];
}

function addRoutes(routes) {
  router.addRoutes(routes);
  store.commit('nav/set_navList', routes);
}

export {
  filterAuthRoutes,
  addRoutes
}
