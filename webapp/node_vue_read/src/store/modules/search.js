import {getSearchList} from "@/config/api";
import config from "@/config/config";

// 常量
const GET_SEARCH_LIST = "GET_SEARCH_LIST"; // 搜素列表
// state
const state = {
  list: {}
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  GET_SEARCH_LIST(state, name) {
    getSearchList(name).then(res => {
      console.log(res.data);
      state.list = res.data.data;
    });
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};
