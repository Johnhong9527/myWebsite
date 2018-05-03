var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  passwd: String,
  address: String,
  email: String,
  phone: Number,
  regTime: Number,
});

module.exports = mongoose.model('users', userSchema);
