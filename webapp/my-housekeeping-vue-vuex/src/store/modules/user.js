import { getUser } from "@/config/api";
import config from "@/config/config";

// 常量
const GET_USERINFO = "GET_USERINFO"; // 用户信息

// state
const state = {
  user_id: localStorage.getItem("wxUserID") != null ? localStorage.getItem("wxUserID") : "",
  info: {}
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
