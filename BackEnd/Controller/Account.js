import UserModel from '../Model/UserModel.js'

//New User Register Api
export const Register = async (req,res)=>{
    const { name , email , password } = req.body;
    try {
        
        let  oldUser = await UserModel.findOne({ email });
        if(oldUser) res.status(400).json({ message: "User is already exist...!!!"}); 
        
        const savedUserData = await UserModel.create({
            name, email, password 
        });        
        res.status(200).json({savedUserData})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const LogIn = (req,res)=>{
    res.send("This is ok.");
}