const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
console.log(3);
const GITHUB_ISSUE = `test`;
const connectionString = `mongodb://localhost:27017/${ GITHUB_ISSUE }`;

function userInfo() {
  run().catch(error => console.error(error.stack));

  async function run() {
    await mongoose.connect(connectionString);
    const schema = new mongoose.Schema({name: String});
    const Model = mongoose.model('Model', schema);
    console.log(await Model.create({name: 'test'}));
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