const router = require('express').Router();
const User = require('../models/User');


router.get('/register', async (req, res) => {
    const user = new User({
        // name:req.body.name,
        // password: req.body.password,
        // email:req.body.email
        name:"Bonnie Simon",
        passoword:"xyz",
        email:"bonnie@gmail.com"
    });  
    
    try{
        const savedUser = await user.save();
        res.send(savedUser);
        console.log(savedUser);
    }catch(err){
        res.status(400).send(err);
    }

    
})

router.get('/register',(req, res) => {
    res.send("<H1>api/user/register</H1>");
})

module.exports = router;