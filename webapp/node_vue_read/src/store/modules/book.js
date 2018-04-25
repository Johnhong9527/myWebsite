import {getBookList, getDown} from "@/config/api";
import config from "@/config/config";
import {Loading} from 'element-ui';

// 常量
const GET_BOOK_LIST = "GET_BOOK_LIST"; // 搜素列表
const GET_BOOK_DOWN = "GET_BOOK_DOWN"; // 下载列表
// state
const state = {
  list: {},
  info: {}
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  GET_BOOK_LIST(state, self) {
    let loading = Loading.service({
      lock: true,
      text: '加载中',
      // spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    getBookList(self.book.novel_list).then(res => {
      state.list = res.data;
      state.info = self.book;
      self.$router.push({path: '/list'});
      loading.close();
      // self = null
    });
  },
  GET_BOOK_DOWN(state, item) {
    let loading = Loading.service({
      lock: true,
      text: '加载中',
      // spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    getDown(item).then(res => {
      console.log(res)
      // state.list = res.data;
      // state.info = self.book;
      // self.$router.push({path: '/list'});
      loading.close();
      // self = null
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
