let express = require('express');
let router = express.Router();
let businessContactsController = require('../controllers/business_contacts');

// GET ROUTE for the Business Contact List page - READ OPERATION
router.get('/', businessContactsController.displayBusinessContactList);

module.exports = router;
