let mongoose = require('mongoose');
let businessContactsModel = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    email: String,
  },
  {
    collection: 'business_contacts',
  });

module.exports = mongoose.model('business_contact', businessContactsModel);
