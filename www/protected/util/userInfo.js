const mongoose = require('mongoose');
const users = require('../model/user_model')
function userInfo(params,cb){

	mongoose.connect('mongodb://localhost:27017/test');

	params.regTime = Date.parse(new Date())/1000
	const user = new users(params);
	user.save().then(() => cb('ok'));

	/*const Cat = mongoose.model('Cat', { name: String });
	const kitty = new Cat({ name: 'Zildjian' });
	kitty.save().then(() => cb('ok'));*/
}
module.exports = userInfo;
/*
usernfo 
	set
	get
	all
	find
*/