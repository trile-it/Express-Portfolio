/**
 * File name: index.js
 * Student name: Minh Tri Le
 * Student ID: 301323963
 * Date: Feb 9, 2023
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.post('/', function(req, res, next) {
  let { first_name, last_name, contact_number, email, message } = req.body;
  console.log('First Name: ', first_name);
  console.log('Last Name: ', last_name);
  console.log('Contact Number: ', contact_number);
  console.log('Email: ', email);
  console.log('Message: ', message);

  res.redirect('/');
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
