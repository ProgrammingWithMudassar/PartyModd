const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "163832356393-325tt1qesh8qeffe0nvrcgv4nj62pvt4.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });

    done(null, profile)
    //later store info in DB
  }
));

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser((user, done)=>{
    done(null, user);
})