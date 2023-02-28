let mongoose = require('mongoose');
let businessContactsModel = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    email: String,
  },
  {
    collection: 'businessContacts',
  });

module.exports = mongoose.model('businessContacts', businessContactsModel);
