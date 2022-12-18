const passport = require('passport');
const User = require('../Model/userSchema')

passport.serializeUser(async function (user, done) {
    console.log("SERIALIZER EMAIL,,,,,,", user.email)
    try {
        const foundUser = await User.findOne({ email: user.email })
        if (foundUser) {
            return done(null, foundUser)

        }

        return done(null, user)

    } catch (err) {
        return done(null, err)

    }
});

passport.deserializeUser(function (user, done) {
    return done(null, user);
});
