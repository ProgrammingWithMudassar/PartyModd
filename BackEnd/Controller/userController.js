// const UserModel = require('../Model/userSchema')
// //New User Register Api
const Register = async (req, res) => {
    try {

        console.log("TEST",req.body)

        const { name, email, password } = req.body;

        let oldUser = await UserModel.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ message: "User is already exist...!!!" });
        }

        const savedUserData = await UserModel.create({
            name, email, password
        });
        res.status(200).json({ data: savedUserData })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// //LogIn Api
// const LogIn = async (req, res) => {
//     try {
//         const { email,password } = req.body;
//         const user = await UserModel.findOne({ email , password});
//         if (!user) res.status(400).send({ message: "Invailed Credational" });

//         res.status(200).send({ data : {email, password}})
//     } catch (error) {
//         res.status(500).send("something went wrong")
//     }
// }

// const Test = async (req, res)=>{
//     res.send("hi")

// }

// module.exports= {Register, LogIn, Test}