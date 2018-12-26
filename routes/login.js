const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/login.js');
const { body } = require('express-validator/check');


router.get('/signup', 
[
	body('email').isEmail().withMessage('Invalid Email'),
	body('password').isLength({min:5}).withMessage('Password Must be atleast 5 characters long'),
	body('confirmPassword').custom((confirmPasswordValue, { req })=>{

		if (confirmPasswordValue !== req.body.password) {
				//if failed then we will send to the error handler
				const error = new Error('Passwords do not match.');
				error.code = 400;
				throw error;
		}else{
			return true;
		}
	})
],

 loginControllers.getSignUp

);

module.exports = router;