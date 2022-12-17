const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "163832356393-325tt1qesh8qeffe0nvrcgv4nj62pvt4.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8000/auth/google/callback",
  passReqToCallback: true,

},
function(request, accessToken, refreshToken, profile, done) {
  console.log("imp")
  return done(null, profile);
}));

