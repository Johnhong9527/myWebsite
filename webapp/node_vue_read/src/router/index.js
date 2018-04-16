import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
Vue.use(Router);
// 首页
const home = r => require.ensure([], () => r(require('../page/home')), 'home');
export default new Router({
  routes: [
    {
      path: '/',
      component: App, // 顶层路由，对应index.html
      children: [
        // 二级路由。对应App.vue
        // 地址为空时跳转home页面
        {
          path: '',
          redirect: '/home',
        },
        // 首页
        {
          path: '/home',
          component: home,
        },
      ],
    },
  ],
});
