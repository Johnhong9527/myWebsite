var express = require('express');
var router = express.Router();
var userInfo = require('../util/userInfo')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/api',function(req,res,next){
	const that = res;
	userInfo({
		name:'李四',
		passwd:'dsdd2*^1dsd&^^3fsd',
		address:'浦电路',
		email:'1310512423@qq.com',
		phone:15868600329
	},res=>that.send(res));
})

module.exports = router;
