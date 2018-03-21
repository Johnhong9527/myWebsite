const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
console.log(3);
const GITHUB_ISSUE = `test`;
const connectionString = `mongodb://jsmith:some-initial-password@localhost:27017/${ GITHUB_ISSUE }`;

function userInfo(){
	console.log(7);
	run().catch(error=> console.error(error.stack));
	console.log(9);
	async function run() {
		await mongoose.connect(connectionString);

		const schema = new mongoose.Schema({ name: String })

		const Model = mongoose.model('Model', schema);

		console.log(await Model.create({ name: 'test' }));


	}
}


/*const users = require('../model/user_model')
function userInfo(params,cb){
	mongoose.connect('mongodb://127.0.0.1:27017/test');

	params.regTime = Date.parse(new Date())/1000
	const user = new users(params);
	user.save().then(() => cb('ok'));*/

	/*const Cat = mongoose.model('Cat', { name: String });
	const kitty = new Cat({ name: 'Zildjian' });
	kitty.save().then(() => cb('ok'));*/
	/*}*/
	module.exports = userInfo;
/*
usernfo 
	set
	get
	all
	find
*/