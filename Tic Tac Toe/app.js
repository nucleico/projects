//IMPORTS
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');

const User = require('./models/user');

//CONFIG
const app = express();

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

let MONGODB_URI =
  process.env.MONGODB_URL ||
  'mongodb+srv://guido:guido@cluster0-dmbjh.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(MONGODB_URI, options)
  .then((res) => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(err);
  });

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use(
  require('express-session')({
    secret: 'Rusty is the best and cutest dog in the world',
    resave: false,
    saveUninitialized: false,
  })
);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// handle middleware WITH SECRET

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

// ROUTES

app.get('/', (req, res) => {
  res.render('home');
});

// Login routes

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/index', isLoggedIn, (req, res) => {
  res.render('index');
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login',
  }),
  (req, res) => {}
);

// Logout routes

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Auth Routes

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', function (req, res) {
  // calling passport-local-mongoose's register method to register a new user
  // it takes user, password and callback as params
  // it saves new user in database and encrypts the password
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render('register');
      }
      // authenticating user and redirecting to secret page after signup
      passport.authenticate('local')(req, res, function () {
        res.redirect('/secret');
      });
    }
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server Started');
});
