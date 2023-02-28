let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let usersModel = mongoose.Schema({
    username: {
      type: String,
      default: '',
      trim: true,
      required: 'username is required',
    },
    // password: {
    //   type: String,
    //   default: '',
    //   trim: true,
    //   required: 'password is required',
    // },
    email: {
      type: String,
      default: '',
      trim: true,
      required: 'email address is required',
    },
    displayName: {
      type: String,
      default: '',
      trim: true,
      required: 'Display Name is required',
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
      collection: 'users',
  });

// Configure options for users model
let options = ({ missingPasswordError: 'Wrong/Missing Password' });
usersModel.plugin(passportLocalMongoose, options);

module.exports = mongoose.model('user', usersModel);
