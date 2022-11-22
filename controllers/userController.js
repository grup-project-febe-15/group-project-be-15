const asyncHandler = require('express-async-handler');
const User = require('../models/User');
// const bcrypt = require('bcrypt');

module.exports.signup = asyncHandler(async (req, res) => {
    const { full_name, email, username, password, role, pic } = req.body;

    const emailExists = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });

    if(emailExists){
        res.status(400);
        throw new Error('Email Already Exists');
    }else if(usernameExists){
        res.status(400);
        throw new Error('Username Already Exists');
    }

    const user = await User.create({
        full_name, 
        email, 
        username, 
        password, 
        role, 
        pic
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            full_name: user.full_name,
            email: user.email, 
            username: user.username,
            role: user.role,
            pic: user.pic
        });
    }else{
        res.status(400)
        throw new Error('User Not Found')
    }

    res.json({
        full_name,
        email
    })
});

module.exports.signin = (req, res) => {

}

module.exports.update_profile = (req, res) => {

}