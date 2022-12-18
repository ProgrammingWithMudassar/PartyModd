const express = require('express')
const router = express.Router()
const passport = require('passport');
const User = require('../Model/userSchema')

const baseUrl = process.env.BASE_URL || "http://localhost:8000"

router.post('/register', async (req, res) => {
    try {

        console.log("TEST", req.body)

        const { username, email, password } = req.body;

        let oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ message: "User is already exist...!!!" });
        }

        const savedUserData = await User.create({
            username, email, password
        });
        res.status(200).json({ data: savedUserData })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
)

router.post('/login',
    passport.authenticate('local'),
    async (req, res) => {
        console.log("Working?")
        res.redirect(`${baseUrl}/auth/login/success`)
    })

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send("User has been logged out...");
});



module.exports = router