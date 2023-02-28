/**
 * File name: index.js
 * Student name: Minh Tri Le
 * Student ID: 301323963
 * Date: Feb 27, 2023
 */

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home' });
};

module.exports.postContactForm = (req, res, next) => {
  let { first_name, last_name, contact_number, email, message } = req.body;
  console.log('First Name: ', first_name);
  console.log('Last Name: ', last_name);
  console.log('Contact Number: ', contact_number);
  console.log('Email: ', email);
  console.log('Message: ', message);

  res.redirect('/');
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render('about', { title: 'About' });
};

module.exports.displayProductsPage = (req, res, next) => {
  res.render('products', { title: 'Products' });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render('services', { title: 'Services' });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render('contact', { title: 'Contact' });
};
