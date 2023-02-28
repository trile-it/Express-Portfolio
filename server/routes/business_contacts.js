let express = require('express');
let router = express.Router();
let businessContactsController = require('../controllers/business_contacts');

// helper function for guard purposes
function requireAuth(req, res, next)
{
  // check if the user is logged in
  if (!req.isAuthenticated())
  {
    return res.redirect('/login')
  }
  next();
}

// GET ROUTE for the Business Contact List page - READ OPERATION
router.get('/', requireAuth, businessContactsController.displayBusinessContactList);

/* GET Route for displaying the Update Page - UPDATE operation*/
router.get('/update/:id', requireAuth, businessContactsController.displayUpdatePage);

/* POST Route for processing the Update Page - UPDATE operation*/
router.post('/update/:id', requireAuth, businessContactsController.processUpdateBusinessContact);

/* GET Route for performing Deletion - DELETE Operation*/
router.get('/delete/:id', requireAuth, businessContactsController.performDelete);

module.exports = router;
