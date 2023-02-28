// Connect to our business contacts model
let businessContacts = require('../models/business_contacts');

module.exports.displayBusinessContactList = (req, res, next) => {
  businessContacts
    .find()
    .then(businessContactList => {
      res.render('business_contacts', { title: 'Business Contacts', BusinessContactList: businessContactList });
    })
    .catch(err => console.error(err));
};
