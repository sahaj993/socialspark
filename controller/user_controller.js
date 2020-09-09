const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: "User Profile"
    })
}

module.exports.signIn = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in', {
        title: "Sign In"
    })
}

module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: "Sign Up"
    })
}

module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        req.flash('error', 'Passwords Do Not Match')
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            req.flash('error', 'Unable to LogIn')
            return res.redirect('back');
        }

    });
}

module.exports.resetPassword = function(req, res){
    if (req.body.new_password != req.body.confirm_new_password){
        req.flash('error', 'Password Do Not Match')
        return res.redirect('back');
    }
    User.findOne({email: req.user.email}, function(err, user){
        if (err){console.log('Error', err); return;}
        if (!user){
            req.flash('error', 'Cannot find the user Try Again!')
            return res.redirect('back');
        }
        if (req.body.old_password != req.user.password){
            req.flash('error', 'Password Do Not Match')
            return res.redirect('back');
        }
        User.findByIdAndUpdate(user.id, {password: req.body.new_password}, function(err, user){
            if (err){console.log('error', err); return;}
            if (user){
                // console.log('updated');
                req.logout();
                req.flash('success', 'Password Reset Done')
                return res.redirect('/users/sign-in');
            }
        })
    })
}

module.exports.resetingPassword = function(req, res){
    return res.render('reset_password', {
        title: "Reset Password"
    });
}

module.exports.createSession = function(req, res){
    req.flash('success', 'Logged In')
    return res.redirect('/users/profile');
}

module.exports.destroySession = function(req,res){
    req.logout();
    req.flash('success', 'Logged Out')
    return res.redirect('/');
}
