const express = require('express');
const router = express.Router();
// 网络请求模块
const request = require('superagent');
require('superagent-charset')(request);
// 缓存数据
const Dictionary = require('./Dictionary');
const dictionary = new Dictionary();

// 跨域
router.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let url_str = '',
    _res = res;
  // 区分 POST 与 GET 请求,获取数据
  if (req.method === 'POST') {
    url_str = req.query.url;
    for (let i in req.body) {
      url_str += `&${i}=${req.body[i]}`;
    }
  } else if (req.method === 'GET') {
    let _url = req.url,
      _index = _url.indexOf('http');
    url_str = req.url.slice(_index);
  } else {
    _res.send('error');
  }
  //  字典中查询数据是否存在
  if (dictionary.has(url_str)) {
    return _res.send(dictionary.get(url_str));
  }
  setTimeout(() => {
    request
      .get(url_str)
      .charset('gb2312')
      .end(function (req, resq) {
        if (resq.text) {
          // 将数据存入字典中
          if (dictionary.size() > 20) {
            dictionary.clear();
          }
          dictionary.set(url_str, resq.text);
          _res.send(resq.text);
        } else {
          _res.send('resq.text');
        }
      });
  }, 100);
});
module.exports = router;
