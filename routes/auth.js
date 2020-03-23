const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {

    //Checking if email exists
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) {
        return res.status(400).send("Email already exist");
    }

    //Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name:req.body.name,
        password: hashedPassword,
        email:req.body.email
    });  

    try{
        const savedUser = await user.save();
        res.send(savedUser);
        console.log(savedUser);
    }catch(err){
        res.status(400).send(err);
    }   

    
})


router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if (!user){
        return res.status(400).send("Email not registered!!");
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass){
        return res.status(400).send("Password is wrong");
    }

    //Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

})



module.exports = router;