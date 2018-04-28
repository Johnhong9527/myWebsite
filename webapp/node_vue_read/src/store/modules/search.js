import {getSearchList} from "@/config/api";
import config from "@/config/config";
import {Loading} from 'element-ui';
// 常量
const GET_SEARCH_LIST = "GET_SEARCH_LIST"; // 搜素列表
// state
const state = {
  list: {},
  search_name: ''
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  GET_SEARCH_LIST(state, name) {
    let loading = Loading.service({
      lock: true,
      text: '加载中',
      // spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    getSearchList(name).then(res => {
      state.search_name = name
      state.list = res.data;
      loading.close();
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
