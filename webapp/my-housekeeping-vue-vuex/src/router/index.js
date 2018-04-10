import Vue from "vue";
import Router from "vue-router";
import home from "@/pages/home";
import mList from "@/pages/m/list";
import hInfo from "@/pages/h/info";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/m/list",
      name: "m_list",
      component: mList
    },
    {
      path: "/h/info",
      name: "h_info",
      component: hInfo
    }
  ]
});
