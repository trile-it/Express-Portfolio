// Connect to our business contacts model
let businessContacts = require('../models/business_contacts');

module.exports.displayBusinessContactList = (req, res, next) => {
  businessContacts
    .find()
    .then(businessContactList => {
      res.render('business_contacts/list', { title: 'Business Contacts', BusinessContactList: businessContactList });
    })
    .catch(err => {
      console.error(err);
      res.end(err);
    });
};

module.exports.displayUpdatePage = (req, res, next) => {
  businessContacts
    .findById(req?.params?.id)
    .then(businessContactToUpdate => {
      res.render('business_contacts/update', { title: 'Update Business Contact', businessContact: businessContactToUpdate });
    })
    .catch(err => {
      console.error(err);
      res.end(err);
    });
};

module.exports.processUpdateBusinessContact = (req, res, next) => {
  let id = req.params.id
  let updatedContact = businessContacts({
    '_id': id,
    'contactName': req.body.contactName,
    'contactNumber': req.body.contactNumber,
    'email': req.body.email,
  });
  businessContacts.updateOne({ _id: id }, updatedContact).then(updatedContact => {
    res.redirect('/business-contacts');
  }).catch((err) => {
    console.log(err);
    res.end(err);
  });
}

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  businessContacts
    .findOneAndDelete({ _id: id })
    .then(result => {
      console.log('Result: ', result);
      res.redirect('/business-contacts');
    })
    .catch(err => {
      console.error(err);
      res.end(err);
    });
};
