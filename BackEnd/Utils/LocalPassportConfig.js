const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const UserModel = require('../Model/userModel')

passport.use(
    new LocalStrategy(async (email, password, done) => {
        try {

            console.log("login")
            console.log(email, password)

            const user = await UserModel.findOne({ email });
            if (!user) {
                return done(null, false);
            }
            if (user.password !== password) {
                return done(null, false);
            }

            return done(null, user);
        } catch (err) {
            return done(err, false);

        }

    }))
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
    try{
        const user = await UserModel.findById(id);

        done(null, user);

    }catch(err){
        return done(err, false);


    }
});
