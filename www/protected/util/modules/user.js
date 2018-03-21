const mongoose = require('mongoose');
const USER = new mongoose.Schema({
  name: String,
  passwd: String,
  address: String,
  email: String,
  phone: String
})
module.exports = USER;
