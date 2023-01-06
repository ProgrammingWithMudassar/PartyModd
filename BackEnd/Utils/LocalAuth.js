const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

const User = require('../Model/userSchema')

passport.use(new LocalStrategy( 
  {
    usernameField: 'email',
    passwordField: 'password'
  },
   function (email, password, done) {

    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Incorrect email' }); }
      if (user.password !== password) { return done(null, false, { message: 'Incorrect password' }); }
      return done(null, user);
    })
  }


));

// passport.serializeUser(function (user, done) {
//   console.log("User => ",user)
//   if(user){
//     return done(null, user._id)
//   }
//   return done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   User.findById(_id, (err,user)=>{
//     if(err){
//       return done(null,false);
//     }
//     return done(null, user);

//   })
// });
