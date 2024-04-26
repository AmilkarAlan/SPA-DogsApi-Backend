const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
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
  password: {
    type: String,
    required: true
  },
  is_admin: {
    type: Boolean,
    default: false
  },
  two_factor_authentication: {
    type: Boolean,
    default: false
  },
  otp_secret: {
    type: String,
    unique: true
  },
  password_reset_token: {
    type: String,
    unique: true
  },
  password_reset_token_expires: {
    type: Date
  },
  google_id: {
    type: String,
    unique: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
