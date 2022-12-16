const mongoose = require('mongoose');
const morgan = require('morgan')
const session = require('express-session');
const express = require('express') 
const cors = require('cors')
const passport = require('passport')

//passport setup
require('./Utils/SocialAuth')
require('./middlewares/passport')(passport);

//Routing 
const SocialAuth = require("./Routes/SociaLAuth")
const userRoute = require("./Routes/UserRoute")

//Creating App
const app = express();
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.use(cookieSession({ name: "session", keys: ["anysecretkeyulike"], maxAge: 24 * 60 * 60 * 100 }))
app.use(session({ secret: 'anyyyyyything', resave: false, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session()); 
 
app.use('/auth',SocialAuth)
app.use('/api/users',userRoute)

//CookieSession Settings -> this is only for social auth

//Port on that server will run
const port = process.env.PORT || 8000;
//https://cloud.mongodb.com/v2/6398bc525f969e01efec3653#metrics/replicaSet/6398bc93ea3998513d0f8a04/explorer/MartyMood/userdatas/find
const URL = "mongodb+srv://Admin:Admin@cluster0.vl9gnuf.mongodb.net/MartyMood?retryWrites=true&w=majority";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Server Connect to MongoDB.");
  }).catch((error) => {
    console.log(`Somthing went wrong ${error}`);
  });


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
