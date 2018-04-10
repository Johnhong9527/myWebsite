const express = require('express');
const router = express.Router();
// 网络请求模块
const request = require('superagent');
require('superagent-charset')(request);

var userInfo = require('../util/userInfo');
var findUser = require('../util/findUser');
var Dictionary = require('./url');
let dictionary = new Dictionary();
// 全局变量
let _old = {};
let old_url = '';
let old_text = '';
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/*router.get('/api').end(function (req, res, next)  {
})*/

router.use('/addUser', function(req, res) {
  res.send('访问成功！');
  // setTimeout(userInfo,200);
  // res.header("Access-Control-Allow-Origin", "*");
  userInfo(
    {
      name: '张三',
      passwd: '132546rs!@#$wsa',
      address: '天平路',
      email: 'honghaitzz@sina.com',
      phone: '15267617473',
    },
    res => console.log(res)
  );
});

router.post('/findUser', function(req, res) {
  findUser({
    name: '李四',
    passwd: 'dsdd2*^1dsd&^^3fsd',
    address: '浦电路',
    email: '1310512423@qq.com',
    phone: 15868600329,
  });

  res.send('访问成功！');

  // res.send({
  //   name: '李四',
  //   passwd: 'dsdd2*^1dsd&^^3fsd',
  //   address: '浦电路',
  //   email: '1310512423@qq.com',
  //   phone: 15868600329,
  // })
});
// 跨域params
router.all('/cros', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let url_str = '',
    _res = res;
  // 区分 POST 与 GET 请求,获取数据
  if (req.method == 'POST') {
    url_str = req.query.url;
    for (let i in req.body) {
      url_str += `&${i}=${req.body[i]}`;
    }
  } else if (req.method == 'GET') {
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
      .charset('UTF-8')
      .end(function(req, resq) {
        if (resq.text) {
          // 将数据存入字典中
          dictionary.set(url_str, resq.text);
          _res.send(resq.text);
        } else {
          _res.send('resq.text');
        }
      });
  }, 100);
});
module.exports = router;
