const mongoose = require('mongoose');

async function findUser(params) {
  console.log(params);
}

/*mongoose.Promise = global.Promise;
const GITHUB_ISSUE = `test`;
const connectionString = `mongodb://localhost:27017/${ GITHUB_ISSUE }`;

function userInfo() {
  run().catch(error => console.error(error.stack));

  async function run(params) {
    await mongoose.connect(connectionString);
    const schema = new mongoose.Schema({
      name: String,
      passwd: String,
      address: String,
      email: String,
      phone: Number
    });
    const Model = mongoose.model('Model', schema);
    console.log(params);
    console.log(await Model.create(params));
  }
}*/

module.exports = findUser;
/*
usernfo
	set
	get
	all
	find
*/