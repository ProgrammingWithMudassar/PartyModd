const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

const User = require('../Model/userSchema')

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(username, password)

    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: "Incorrect username" }); }
      if (!user.password == password) { return done(null, false, { message: "Incorrect Password" }); }
      return done(null, user);
    });

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
