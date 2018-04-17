// 开发模式 —— 触发
if (process.env.NODE_ENV === "development") {
  const wxUserID1 = {
    /* 真.巾帼家政 */
    0: "57e38f1b9f5160ac048b457d", // 客户
    1: "5abda5ac9f5160a9048b6ac2", // 管理员/门店老师:1
    2: "57e38f1b9f5160ac048b457d", // 管理员/门店老师:2
    3: "5823fe6ca84ea02e3e8b45cb", // 立秋:客户
    4: "57fe39259f5160a4048b4583", // Easy:客户
    // 家政人员
    5: "57fa51649f5160c4048b4948", // 我喂自己袋盐
    6: "5823fe35a84ea0c13e8b461c" // 我喂自己袋盐2
  };
  localStorage.setItem("wxUserID1", wxUserID1[3]);
}

module.exports = {
  _url: {
    0: "http://common.yiguanjia.me/index.php?r=/o2o/user/info&user_id=57e38f1b9f5160ac048b457d",
    1: "http://127.0.0.1:3000/findUser",
    2: "http://api.map.baidu.com/place/v2/suggestion?&ak=B349f0b32ef6e78b2e678f45cb9fddaf&output=json&region=上海&query=浦电路"
  },
  _user_id: "57e38f1b9f5160ac048b457d",
  proxyTable: {
    "/j": {
      target: "http://commontest.yiguanjia.me/index.php?r=/j", // 设置调用接口域名和端口号别忘了加http
      changeOrigin: true,
      pathRewrite: {
        "^/j": "/" // 这里理解成用‘/j’代替target里面的地址，组件中我们调接口时直接用/j代替
        // 比如我要调用'http://0.0:300/user/add'，直接写‘/j/user/add’即可 代理后地址栏显示/
      }
    },
    "/o2o": {
      target: "http://commontest.yiguanjia.me/index.php?r=/o2o",
      changeOrigin: true,
      pathRewrite: {
        "^/o2o": "/"
      }
    },
    "/moonclub": {
      target: "http://commontest.yiguanjia.me/index.php?r=/moonclub",
      changeOrigin: true,
      pathRewrite: {
        "^/moonclub": "/"
      }
    }
  },
  apiPath: function() {
    /*
      目标：
        1：区分开发环境与生产环境
        2：在开发环境下使用代理，进行跨域请求
        3：异步发起请求
    */
    const PATH = {
      0: "https://api.honghaitao.net/cros?url=",
      1: "http://127.0.0.1:3000/cros?url="
    };
    const APIPATH = {
      0: "http://common.yiguanjia.me/index.php?r=",
      1: "http://commontest.yiguanjia.me/index.php?r="
    };
    let address = "";
    let apiPath = "";
    // 开发模式 —— 触发
    if (process.env.NODE_ENV === "development") {
      apiPath = `${PATH[1]}${APIPATH[1]}`;
    }
    return apiPath;
  }
};
