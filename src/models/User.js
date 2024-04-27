const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  // is_admin: {
  //   type: Boolean,
  //   default: false
  // },
  // two_factor_authentication: {
  //   type: Boolean,
  //   default: false
  // },
  // otp_secret: {
  //   type: String,
  //   unique: true
  // },
  // password_reset_token: {
  //   type: String,
  //   unique: true
  // },
  // password_reset_token_expires: {
  //   type: Date
  // },
  // google_id: {
  //   type: String,
  //   unique: true
  // }
});
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const User = mongoose.model('User', userSchema, "users");

module.exports = User;
