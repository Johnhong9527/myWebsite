// 获取数据
// const URL = require('url');
// 网络请求模块
const request = require('superagent');
require('superagent-charset')(request);

// var Dictionary = require('./_url');
// let dictionary = new Dictionary();
module.exports = function(url) {
  return new Promise((resolve, reject) => {
    /*'https://www.boquge.com/search.htm?keyword=' + p.name*/
    console.log(url);
    setTimeout(() => {
      request
        .get(url)
        .charset('UTF-8')
        .end(function(req, resq) {
          // console.log(req);
          // console.log(resq);
          if (resq.text) {
            // 将数据存入字典中
            // if (dictionary.size() > 50) {
            //   dictionary.clear();
            // }
            // dictionary.set(url_str, resq.text);
<<<<<<< HEAD
=======

            console.log(resq.text);
>>>>>>> 592ba159dbde0854ca73ff2c6e09202945ecb28a
            resolve(resq.text);
          } else {
            reject('数据请求失败！');
          }
        });
    }, 100);

    // let params = URL.parse(_req.url, true).query;
    // 获取数据
    // return resolve(params);
    // //  字典中查询数据是否存在
    // if (dictionary.has(url_str)) {
    //   return resolve(dictionary.get(url_str));
    // }
    // return
  });
};
