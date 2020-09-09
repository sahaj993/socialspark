const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controller/user_controller');

router.get('/profile', passport.checkAuthentication, usersController.profile);

router.get('/password-reset', passport.checkAuthentication, usersController.resetingPassword);

router.get('/sign-in', usersController.signIn);
router.get('/sign-up', usersController.signUp);


router.post('/create', usersController.create);
router.post('/reset-password',passport.checkAuthentication, usersController.resetPassword);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);

router.get('/sign-out', usersController.destroySession);

router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: 'users/sign-in'}), usersController.createSession);

module.exports = router;
