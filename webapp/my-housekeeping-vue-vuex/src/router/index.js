import Vue from "vue";
import Router from "vue-router";
import App from "@/App";
Vue.use(Router);
// 首页
const home = r => require.ensure([], () => r(require("../page/home")), "home");
// 门店老师
const m = r => require.ensure([], () => r(require("../page/m/index")), "m");
const mList = r => require.ensure([], () => r(require("../page/m/children/list")), "mList");
// 家政员
const h = r => require.ensure([], () => r(require("../page/h/index")), "h");
const hInfo = r => require.ensure([], () => r(require("../page/h/children/info")), "hInfo");
const hEdit = r => require.ensure([], () => r(require("../page/h/children/edit")), "hEdit");
const hIsReg = r => require.ensure([], () => r(require("../page/h/children/isReg")), "hIsReg");
// 客户
const order = r => require.ensure([], () => (r = require("../page/order/index.vue")), "order");
const addOrder = resolve => require(["../page/order/children/add.vue"], resolve);
const listOrder = resolve => require(["../page/order/children/list.vue"], resolve);
export default new Router({
  routes: [
    {
      path: "/",
      component: App, // 顶层路由，对应index.html
      children: [
        // 二级路由。对应App.vue
        // 地址为空时跳转home页面
        {
          path: "",
          redirect: "/home"
        },
        // 首页
        {
          path: "/home",
          component: home
        },
        // 门店老师
        {
          path: "/m",
          component: m,
          children: [
            {
              path: "list",
              component: mList
            }
          ]
        },
        // 家政员
        {
          path: "/h",
          component: h,
          children: [
            {
              path: "info",
              component: hInfo
            },
            {
              path: "edit",
              component: hEdit
            },
            {
              path: "isReg",
              component: hIsReg
            }
          ]
        },
        // 客户
        {
          path: "/order",
          component: order,
          children: [
            {
              path: "add",
              component: addOrder
            },
            {
              path: "list",
              component: listOrder
            }
          ]
        }
      ]
    }
  ]
});
