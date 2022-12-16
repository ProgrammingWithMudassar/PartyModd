
const router = require('express').Router();
const passport = require('passport');
const CLIENT_URL = "http://localhost:5173/"

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:5173/',
        failureRedirect: '/auth/google/failure'
    })
);

router.get('/protected', isLoggedIn, (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            //   cookies: req.cookies
        });
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
});

router.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});

module.exports = router