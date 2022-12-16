const Users = require('../Model/userSchema')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/config')
const passport = require('passport')

const userRegister = async (details, role, res) => {
    try {
        console.log(details)
        let userNameNotTaken = await validateUsername(details.displayName)
        console.log("username Not Taken"+userNameNotTaken);
        if (!userNameNotTaken) {
            return res.status(400).json({
                message: "Username is already Taken...",
                success: false
            })
        }

        let emailNotRegistered = await validateEmail(details.email)

        !emailNotRegistered ? res.satus(400).json({
            message: 'Email is already Taken...'
        }) : null

        const hashedPassword = await bcrypt.hash(details.password, 12)
        console.log("Hashed Password: ", hashedPassword)

        const newUser = new Users({
            ...details,
            password: hashedPassword,
            role: role
        })
        const savedUser = await newUser.save();
        console.log("SAVED USER", savedUser)

        if (savedUser) {

            return res.status(200).json(
                {
                    message: "User creation Success!! 🎉",
                    success: true
                })

        }

    } catch (err) {
        return res.status(500).json({
            message: `Unable to create an account.`,
            success: false

        })

    }
}

const userLogin = async (userCredentials, role, res) => {
    let { email, password } = userCredentials;

    const user = await Users.findOne({ email })
    if (!user) {
        return res.status(404).json({
            message: "User not found, Invalid Credentials.",
            success: true
        })
    }

    if (user.role !== role) {
        return res.status(403).json({
            message: "Please make sure you are logging in from the Right Portal...",
            success: false
        })
    }

    let isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(403).json({
            message: "Incorrect Password",
            success: false
        })
    } else {
        let token = jwt.sign(
            {
                user_id: user._id,
                role: user.role,
                username: user.username,
                email: user.email
            },
            SECRET, { expiresIn: "2 days" }
        )
        console.log("Token => ", token);

        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168
        }
        console.log("Result => ", result);


        return res.status(200).json({
            ...result,
            message: "Congrats!!! You are successfully Loged in.",
            success: true
        })
    }

}

const validateUsername = async (username) => {
    let userFound = await Users.findOne({ username });

    if (userFound) {
        return false
    } else {
        return true
    }

}

const validateEmail = async (email) => {
    let userFound = await Users.findOne({ email });

    if (userFound) {
        return false
    } else {
        return true
    }
}

//Passport Middleware
const userAuth = passport.authenticate('jwt', { session: false })

//Role Check Middleware
const checkRole = roles => (req, res, next) => {
    console.log("Check ----> ", roles)
    if (roles.includes(req.user.role)) {
        return next();
    }
    else {
        return res.status(401).json("Unauthorized")
    }
}

module.exports = {
    userRegister,
    userLogin,
    userAuth,
    checkRole

}