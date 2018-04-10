import { getUser, getUserRole } from "@/config/api";
import config from "@/config/config";

// 常量
const GET_USERINFO = "GET_USERINFO"; // 用户信息
const GET_USERROLE = "GET_USERROLE"; // 用户信息

// state
const state = {
  user_id: localStorage.getItem("wxUserID1") != null ? localStorage.getItem("wxUserID1") : "",
  info: {},
  is_teacher: null
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  GET_USERINFO(state) {
    getUser(state.user_id).then(res => {
      state.info = res.data.data;
    });
  },
  GET_USERROLE(state, self) {
    setTimeout(() => {
      getUserRole(state.user_id).then(res => {
        state.is_teacher = res.data.is_teacher;
        if (state.is_teacher === 1) {
          self.$router.push({ path: "/h/info" });
        } else if (state.is_teacher === 2) {
          self.$router.push({ path: "/m/list" });
        } else {
          self.$router.push({ path: "/" });
        }
        self = null;
      });
    }, 100);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
