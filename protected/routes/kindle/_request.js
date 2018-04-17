// 网络请求模块
let originRequest = require('request');
let headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
}

// 封装的方法
function request(url, callback) {
  let _callback = callback;
  let options = {
    url: url,
    encoding: null,
    //代理服务器
    //proxy: 'http://xxx.xxx.xxx.xxx:8888',
    headers: headers
  }
  originRequest(options, _callback)
}

module.exports = request;