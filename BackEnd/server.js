const mongoose = require('mongoose');
const morgan = require('morgan')
const session = require('express-session');
const express = require('express') 
const cors = require('cors')
const passport = require('passport')

// const cookieSession = require("cookie-session");


//Routing 
const SocialAuth = require("./Routes/SociaLAuth");
const userRoute = require("./Routes/UserRoute");
const EventsRoute = require("./Routes/EventsRoute");
const TicketsRoute = require("./Routes/TicketRoute");
const StripeRoute = require("./Routes/Stripe")
const OrdersRoute = require("./Routes/OrdersRoute");


//Creating App
const app = express();
app.use(morgan("dev"));

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.use(cookieSession({ name: "session", keys: ["anysecretkeyulike"], maxAge: 24 * 60 * 60 * 100 }))
app.use(session({ secret: 'anyyyyyything', resave: false, saveUninitialized: false }));
app.use(passport.initialize())
app.use(passport.session()); 
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
//passport setup
require('./Utils/FacebookAuth')
require('./Utils/GoogleAuth');
require('./Utils/LocalAuth');
require('./Utils/Serializer');

app.get('/', (req, res)=>{
  res.send("Welcome to Party Modd Server...")
})
app.use('/auth',SocialAuth);
app.use('/api/users',userRoute);
app.use('/events',EventsRoute);
app.use('/tickets', TicketsRoute);
app.use('/stripe', StripeRoute);
app.use('/orders', OrdersRoute);

app.get('/testget', (req,res)=>{
  res.status(200).json({ testData: true, message: "meow ", })
})
//CookieSession Settings -> this is only for social auth

//Port on that server will run
const port = process.env.PORT || 8000;
//https://cloud.mongodb.com/v2/6398bc525f969e01efec3653#metrics/replicaSet/6398bc93ea3998513d0f8a04/explorer/MartyMood/userdatas/find
const URL = "mongodb+srv://Admin:Admin@cluster0.vl9gnuf.mongodb.net/MartyMood?retryWrites=true&w=majority";

app.use('/storage', express.static('Storage'));

app.get('/storage/*', function (req, res) {
  res.sendFile(__dirname+'/public/error.html');
})
app.get('*', function (req, res) {
  res.sendFile(__dirname+'/public/error.html');
})

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Server Connect to MongoDB.");
  }).catch((error) => {
    console.log(`Somthing went wrong ${error}`);
  });

const baseUrl = process.env.BASE_URL || `http://localhost:8000`

app.listen(port, () => {
  console.log(`Server running on ${baseUrl}`);
});
