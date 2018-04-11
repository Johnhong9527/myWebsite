import { getUser, getUserRole } from "@/config/api";
import config from "@/config/config";
// 常量
const ORDER_LIST = "ORDER_LIST"; // 订单列表
const ADDANORDER = "ADDANORDER"; // 用户信息

// state
const state = {
  list: null,
  add_an_order: null
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  ORDER_LIST(state) {}
};

export default {
  state,
  getters,
  actions,
  mutations
};
