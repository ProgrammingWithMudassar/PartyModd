import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan'
import router from './Router/Route.js';
import user from './Router/userRoute.js';

const app = express();

app.use(morgan("dev"));
app.use(cors({origin:"*"}));    
app.use(express.json({limit:"50mb", extended:true}));
app.use(express.urlencoded({limit:"50mb",extended:true}));
app.use('/posts',router);
app.use("/public",express.static("public"));
app.use('/user',user);

const port = process.env.PORT || 8000;

const URL = "mongodb://0.0.0.0:27017/ECommerce";

mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(()=>app.listen(port,()=>console.log(`Server is runing on port: ${port}`)))
.catch((error)=>{
    console.log(error.message);
});
