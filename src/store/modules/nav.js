import { StaticRoutes } from '@/router/index';

const nav = {
  namespaced: true,
  state: {
    navList: StaticRoutes,
    navActive: '', // 记录 当前页面 路由
  },
  getters: {
    get_navList(state) {
      return state.navList;
    },
    get_navActive(state) {
      return state.navActive;
    },
  },
  mutations: {
    set_navList(state, routes) {
      // console.log(StaticRoutes, routes);
      state.navList = StaticRoutes.concat(routes);
    },
    set_navActive(state, data) {
      state.navActive = data.navActive;
    },
  },
};

export default nav;
