const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String
});

//before creating each user, bcrypt hashes the password
userSchema.pre('save', function(){
  this.password = bcrypt.hashSync(this.password, 8);
});

//this adds a method to our user schema called validatePassword (a function that compares the attempted password to the true (hashed) password). This function can be invoked when a user is trying to log in.

userSchema.methods.validatePassword = function(attemptedPassword){
  return bcrypt.compareSync(attemptedPassword, this.password);
};


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
