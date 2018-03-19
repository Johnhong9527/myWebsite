var express = require('express');
var router = express.Router();
var userInfo = require('../util/userInfo');
/* GET home page. */
router.get('/', function (req, res) {
  console.log(index++);
  res.render('index', {title: 'Express'});
  // next();
});

/*router.get('/api').end(function (req, res, next)  {

})*/

router.use('/api', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('访问成功！');
  /* const that = res;
   let  i = 1;
   if(i ==1){
       console.log(123);
       userInfo({
         name: '李四',
         passwd: 'dsdd2*^1dsd&^^3fsd',
         address: '浦电路',
         email: '1310512423@qq.com',
         phone: 15868600329
       }, res => that.send(res));
     i = 2;
   }*/
});

module.exports = router;
