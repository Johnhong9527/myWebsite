// 获取数据
// const URL = require('url');
// 网络请求模块
const request = require('superagent');
require('superagent-charset')(request);
var Dictionary = require('./_url');
let dictionary = new Dictionary();
module.exports = function(p) {
  return new Promise((resolve, reject) => {
    // let params = URL.parse(_req.url, true).query;
    // 获取数据
    // return resolve(params);
    // //  字典中查询数据是否存在
    // if (dictionary.has(url_str)) {
    //   return resolve(dictionary.get(url_str));
    // }
    // return
    console.log('https://www.boquge.com/search.htm?keyword=' + p.name);
    setTimeout(() => {
      request
        .get('https://www.boquge.com/search.htm?keyword='+p.name)
        .charset('UTF-8')
        .end(function (req, resq) {
          // console.log(req);
          // console.log(resq);
          if (resq.text) {
            // 将数据存入字典中
            // if (dictionary.size() > 50) {
            //   dictionary.clear();
            // }
            // dictionary.set(url_str, resq.text);
            resolve(resq.text);
          } else {
            reject(false);
          }
        });
    }, 100);
  });
};
