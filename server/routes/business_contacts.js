let express = require('express');
let router = express.Router();
let businessContactsController = require('../controllers/business_contacts');

// GET ROUTE for the Business Contact List page - READ OPERATION
router.get('/', businessContactsController.displayBusinessContactList);

/* GET Route for displaying the Update Page - UPDATE operation*/
router.get('/update/:id', businessContactsController.displayUpdatePage);

/* POST Route for processing the Update Page - UPDATE operation*/
router.post('/update/:id', businessContactsController.processUpdateBusinessContact);

/* GET Route for performing Deletion - DELETE Operation*/
router.get('/delete/:id', businessContactsController.performDelete);

module.exports = router;
