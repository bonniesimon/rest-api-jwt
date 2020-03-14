const router = require('express').Router();

router.post('/register', (req, res) => {
    res.send("At register page");
})

module.exports = router;