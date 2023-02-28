// Connect to our business contacts model
let BusinessContacts = require('../models/business_contacts');

module.exports.displayBusinessContactList = (req, res, next) => {
  BusinessContacts
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
  BusinessContacts
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
  let updatedContact = new BusinessContacts({
    '_id': id,
    'contactName': req.body.contactName,
    'contactNumber': req.body.contactNumber,
    'email': req.body.email,
  });
  BusinessContacts.updateOne({ _id: id }, updatedContact).then(updatedContact => {
    res.redirect('/business-contacts');
  }).catch((err) => {
    console.log(err);
    res.end(err);
  });
}

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  BusinessContacts
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
