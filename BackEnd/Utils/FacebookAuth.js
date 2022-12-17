const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../Model/userSchema');


passport.use(new FacebookStrategy({
    clientID: "8aff3630501b9dafbdeab8fdb134ba5c",
    clientSecret: "8aff3630501b9dafbdeab8fdb134ba5c",
    callbackURL: "http://localhost:8000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("fb Profile: ", profile)
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    // });
  }
));