const passport = require('passport');

passport.serializeUser(function(user, done) {
    console.log("Serialize User...", user)
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    console.log("Deseriallize User...")
  
    done(null, user);
  });
  