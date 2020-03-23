/**
 * *This is a private route
 */

 const router = require('express').Router();

 //Adding the verifyToken middleware
 const verifyToken = require('./verifyToken');

router.get('/', verifyToken, (req, res) => {
    res.json({posts: {title: 'post one', desc: 'private routes'}});
})

 module.exports = router;