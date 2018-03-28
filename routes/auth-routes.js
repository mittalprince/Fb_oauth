const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// auth with google+
router.get('/facebook', passport.authenticate('facebook', {
    scope: 'email'
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    // res.send(req.user);
    res.redirect('/profile');
});

module.exports = router;