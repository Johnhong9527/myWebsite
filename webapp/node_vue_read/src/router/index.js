import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';

Vue.use(Router);
// 首页
const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const search = r => require.ensure([], () => r(require('../page/search')), 'search');
const list = r => require.ensure([], () => r(require('../page/list')), 'list');
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
          redirect: '/search',
        },
        // 首页
        {
          path: '/home',
          component: home,
        },
        // 搜索
        {
          path: '/search',
          component: search
        },
        // 列表
        {
          path: '/list',
          component: list
        }
      ],
    },
  ],
});
