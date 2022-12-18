const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../Model/userSchema');

const baseUrl = process.env.BASE_URL || "http://localhost:8000"

passport.use(new FacebookStrategy({
  
    clientID: "890840515260983",
    clientSecret: "8aff3630501b9dafbdeab8fdb134ba5c",
    callbackURL: `${baseUrl}/auth/facebook/callback`,
    profileFields: ['id', 'displayName', 'photos', 'email']

  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("fb Profile: ", profile)
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    // });
  }
));