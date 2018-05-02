const mongoose = require('mongoose');
const USER = require('./modules/user');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

mongoose.Promise = global.Promise;
const GITHUB_ISSUE = `test`;
const connectionString = `mongodb://localhost:27017/${GITHUB_ISSUE}`;

function userInfo(params) {
  run().catch(error => console.error(error.stack));
  async function run() {
    await mongoose.connect(connectionString);
    params.passwd = bcrypt.hashSync(params.passwd, salt);
    const Model = mongoose.model('Model', USER);
    console.log(await Model.create(params));
  }
}

module.exports = userInfo;
/*
usernfo 
	set
	get
	all
	find
*/
