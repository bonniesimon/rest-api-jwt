const router = require('express').Router();
const User = require('../models/User');


router.post('/register', async (req, res) => {
    const user = new User({
        name:req.body.name,
        password: req.body.password,
        email:req.body.email
    })  
    
    try{
        const savedUser = await user.save();
    }catch(err){
        res.status(400).send(err);
    }

    console.log(user);
    res.json(user);
})

module.exports = router;