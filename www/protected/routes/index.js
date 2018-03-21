var express = require('express');
var router = express.Router();

var userInfo = require('../util/userInfo');
/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: 'Express'});
});

/*router.get('/api').end(function (req, res, next)  {

})*/

router.use('/addUser', function (req, res) {

  res.send('访问成功！');
  console.log(123);
  // setTimeout(userInfo,200);
  // res.header("Access-Control-Allow-Origin", "*");

  userInfo({
    name: '李四',
    passwd: 'dsdd2*^1dsd&^^3fsd',
    address: '浦电路',
    email: '1310512423@qq.com',
    phone: 15868600329
  }, res => that.send(res));
});

module.exports = router;
