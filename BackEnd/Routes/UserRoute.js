const express = require('express')
const router = express.Router()
const passport = require('passport');
const User = require('../Model/userSchema')
const AuthGuard = require('../middleware/AuthGuard')

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

router.put('/update/:userId', async (req, res) => {
    const UserID = req.params.userId;
    console.log("Params User ID: ", UserID);
    const { picture, password, email, username } = req.body;
    if (password) {
        console.log("Pehly password encrypt hojai ga");
    }

    User.findByIdAndUpdate(UserID, { picture, password, email, username }, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: false, message: "Error updating user Details" });
        } else {
            res.status(200).json({ status: true, message: "User Deatils updated successfully" });
        }
    })
})


router.get('/getall', AuthGuard, async (req, res) => {
    const users = await User.find({});
    console.log(users);
    return res.status(200).json(users);
})

module.exports = router