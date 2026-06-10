const express = require('express');
const router = express.Router()

router.get('/user', (req, res) => {
    res.send("welcome to user route")
})
router.post('/register', (req, res) => {
    res.send("welcome to register route")
})
router.post('/login', (req, res) => {
    res.send("welcome to login route")
})
router.post('/logout', (req, res) => {
    res.send("welcome to logout route")
})









module.exports = router