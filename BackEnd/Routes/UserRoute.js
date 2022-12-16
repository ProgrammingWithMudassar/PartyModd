const express = require('express')
const router = express.Router()
const {
    userRegister,
    userLogin,
    userAuth,
    checkRole
} = require('../utils/Authentication')

const serializeUser = require('../utils/Serializer')

const User = require('../Model/userSchema')

router.post('/register/user', async ( req, res ) =>{
    await userRegister(req.body, 'user' ,res)
})

router.post('/login/user',  async ( req, res ) =>{
    await userLogin(req.body, 'user' ,res)
})

router.get('/profile/user', userAuth, checkRole(['user']), async(req, res)=>{
   console.log("PROFILE ACCESSED ==> ",req.user)
   
    return res.json(serializeUser(req.user))

})


module.exports = router