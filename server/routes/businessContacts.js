let express = require('express');
let router = express.Router();

// Connect to our business contacts model
let businessContacts = require('../models/businessContacts');

//GET ROUTE for the Business Contact List page - READ OPERATION
router.get('/', (req, res, next) => {
    businessContacts
      .find()
      .then(businessContactList => {
          res.render('business_contacts', { title: 'Business Contacts', BusinessContactList: businessContactList });
      })
      .catch(err => console.error(err))
});
module.exports = router;
