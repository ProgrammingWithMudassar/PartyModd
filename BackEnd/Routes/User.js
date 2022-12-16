const router = require('express').Router();
const { Register, LogIn, Test} =  require('../Controller/userController.js')
const passport = require('passport')

router.get('/test',Register);

router.post('/register',Register);

router.post('/login', passport.authenticate("local"));

module.exports = router