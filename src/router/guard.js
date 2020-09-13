/**
 * 导航守卫
 */

import router from '@/router/index'
import store from '@/store/index.js'

// import { filterAuthRoutes, addRoutes } from '@/utils/asyncRoutes.js';
// if (to.fullPath === '/modbus') {
//   const authRoutes = filterAuthRoutes();
//   addRoutes(authRoutes);
// }

// 监听 路由变化
router.beforeEach((to, from, next) => {
  // console.log(to);
  // 记录 当前路由
  store.commit({
      type: 'nav/set_navActive',
      navActive: to.fullPath
  })
  // 设置页面 title
  window.document.title = to.meta.title;
  // 跳转
  next();
});
