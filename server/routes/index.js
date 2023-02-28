/**
 * File name: index.js
 * Student name: Minh Tri Le
 * Student ID: 301323963
 * Date: Feb 9, 2023
 */

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.post('/', indexController.postContactForm);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/products', indexController.displayProductsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactPage);

module.exports = router;
