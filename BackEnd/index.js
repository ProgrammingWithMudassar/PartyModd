import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan'
//Routing 
import AccountRoute from './Routes/AccuontsRoutes.js'

//Creating App
const app = express();
app.use(morgan("dev"));
app.use(cors({origin:"*"}));    
app.use(express.json({limit:"50mb", extended:true}));
app.use(express.urlencoded({limit:"50mb",extended:true}));
app.use('/Account',AccountRoute);

//Port on that server will run
const port = process.env.PORT || 8000;

const URL = "mongodb+srv://Admin:Admin@cluster0.vl9gnuf.mongodb.net/MartyMood?retryWrites=true&w=majority";

mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log("Server Connect to MongoDB.");
  }).catch((error) => {
    console.log(`Somthing went wrong ${error}`);
  });


// app.get('/',(req,res)=>{
//     res.send("This is route.")
// })

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
