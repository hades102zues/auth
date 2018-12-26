const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/login.js');


router.get('/signup', loginControllers.getSignUp);

module.exports = router;