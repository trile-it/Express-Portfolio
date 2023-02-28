/**
 * File name: index.js
 * Student name: Minh Tri Le
 * Student ID: 301323963
 * Date: Feb 27, 2023
 */
let passport = require('passport');
let userModel = require('../models/users');

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

module.exports.displayLoginPage = (req, res, next) => {
  // check if the user is already logged in
  if (!req.user) {
    res.render('auth/login', {
      title: 'Login',
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : '',
    });
  } else {
    return res.redirect('/');
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, User, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!User) {
      req.flash('loginMessage',
        'Authentication Error');
      return res.redirect('/login');
    }
    req.login(User, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect('/business-contacts');
    });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  //check if the user is not already logged in*/
  if (!req.user) {
    res.render('auth/register',
      {
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : '',
      });
  } else {
    return res.redirect('/business-contacts');
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new userModel({
    username: req.body.username,
    // password: req.body.password,
    email: req.body.email,
    displayName: req.body.displayName,
  });
  userModel.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log('Error: Inserting New User');
      if (err.name == 'UserExits Error') {
        req.flash('registerMessage', 'Registration Error: User Already Exists!');
        console.log('Error: user Already Exists');
      }

      return res.render('auth/register',
        {
          title: 'Register',
          messages: req.flash('registerMessage'),
          displayName: req.user ? req.user.displayName : '',
        });
    } else {
      // if no error exists, then registration is successful
      // redirect the user and authenticate them
      return passport.authenticate('local')(req, res, () => {
        res.redirect('/business-contacts');
      });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
