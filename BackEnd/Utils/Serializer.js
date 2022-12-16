const serializeUser = user =>{
    return{
        _id : user.id,
        displayName: user.displayName,
        email: user.email,
        profilePicture: user.profilePicture
    }
}

module.exports = serializeUser