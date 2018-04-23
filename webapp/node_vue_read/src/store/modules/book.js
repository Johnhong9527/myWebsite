import {getBookList} from "@/config/api";
import config from "@/config/config";

// 常量
const GET_BOOK_LIST = "GET_BOOK_LIST"; // 搜素列表
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
  GET_BOOK_LIST(state, url) {
    getBookList(url).then(res => {
      state.list = res.data;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
