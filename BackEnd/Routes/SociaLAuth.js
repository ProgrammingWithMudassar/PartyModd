
const router = require('express').Router();
const passport = require('passport');
const CLIENT_URL = "http://localhost:5173/"

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}
// -----------------------------------------------------------
// --------------------Google Auth Router---------------------
// -----------------------------------------------------------

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:8000/auth/login/success',
        // successRedirect: 'http://localhost:5173/',
        failureRedirect: '/auth/google/failure'
    })
);

router.get('/login/success', isLoggedIn, (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            //   cookies: req.cookies
        });
    }
});

router.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});
// -----------------------------------------------------------

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
});

// -----------------------------------------------------------
// --------------------Facebook Auth Router-------------------
// -----------------------------------------------------------
router.get('/facebook',
    passport.authenticate('facebook'
    ));

router.get('/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: 'http://localhost:8000/auth/login/success',
        // successRedirect: 'http://localhost:5173/',
        failureRedirect: '/auth/faccebook/failure'
    })
);
router.get('/auth/facebook/failure', (req, res) => {
    res.send('Failed to authenticate..');
});


module.exports = router