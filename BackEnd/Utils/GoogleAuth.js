const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('../Model/userSchema');

const GOOGLE_CLIENT_ID = "163832356393-325tt1qesh8qeffe0nvrcgv4nj62pvt4.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const baseUrl = process.env.BASE_URL || "http://localhost:8000"


passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${baseUrl}/auth/google/callback`,
  passReqToCallback: true,

},
  async function (request, accessToken, refreshToken, profile, done) {
    const { id, email, displayName, picture, provider } = profile

    console.log("Piture: ", picture)
    console.log("Provider: ", provider)

    console.log("BEFORE CHECk")
    const userFound = await User.findOne({ email })
    console.log("After CHECk")

    if (userFound) {
      return done(null, profile)

    } else {
      console.log("Creating New user before")
      await User.create({
        email: email,
        username: displayName,
        password: "",
        picture: picture,
        provider: provider
      });

    }

    // console.log("Request", request);

    return done(null, profile);
  }));

