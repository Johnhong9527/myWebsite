var express = require('express')
var router = express.Router()
// 网络请求模块
const request = require('superagent')
require('superagent-charset')(request)

var userInfo = require('../util/userInfo')
var findUser = require('../util/findUser')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

/*router.get('/api').end(function (req, res, next)  {
})*/

router.use('/addUser', function(req, res) {
  res.send('访问成功！')
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
  )
})

router.post('/findUser', function(req, res) {
  // findUser({
  //   name: '李四',
  //   passwd: 'dsdd2*^1dsd&^^3fsd',
  //   address: '浦电路',
  //   email: '1310512423@qq.com',
  //   phone: 15868600329,
  // })
  // res.send('访问成功！')
  res.send({
    name: '李四',
    passwd: 'dsdd2*^1dsd&^^3fsd',
    address: '浦电路',
    email: '1310512423@qq.com',
    phone: 15868600329,
  })
})
// 跨域
router.all('/cros', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  let _res = res,
    _url = req.originalUrl,
    _index = _url.indexOf('http');
  _url = req.url.slice(_index);
  console.log(req);
  console.log(_url);
  request
    .post(_url)
    .charset('UTF-8')
    .end(function(req, resq) {
      _res.send(resq.text)
    })
})
module.exports = router
