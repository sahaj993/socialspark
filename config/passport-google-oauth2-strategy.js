const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

passport.use(new googleStrategy({
    clientID: "22412992777-emcmvbn2r2u05gk8k8g3260piu24ol0i.apps.googleusercontent.com",
    clientSecret: "2lp5i4D6wMAVX6b4bZa9yu6a",
    callbackURL: "http://localhost:8000/users/auth/google/callback",
},
function(accessToken, refreshToken, profile, done){
    User.findOne({email: profile.emails[0].value}).exec(function(err, user){
        if (err){console.log('error', err); return;}
        // console.log(profile);
        if (user){
            return done(null, user);
        }else{
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            }, function(err, user){
                if (err){console.log('error', err); return;}
                return done(null, user);
            })
        }
    })
}

));

module.exports = passport;

