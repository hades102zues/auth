const { validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

exports.getSignUp = (req, res, next)=> {

	const validationErrors = validationResult(req);
	if (validationErrors.length) {
		return res.status(400).json({errors : validationErrors.array()});
	}
	
	//create the jwt token
	const token = jwt.sign({ email: req.body.email }, 'pizza', { expiresIn: 3600 });

	res.status(201).json({
		token,
		message: "Welcome to signup"
	});
};


exports.getLogin = (req, res, next)=> {

	//get the token from header
	const token = req.get('Authorization').split(' ')[1];

	//verify the token
	jwt.verify(token, 'pizza', (err, decoded)=> {
		if (err) {
			next(err);
		} 
		else {
			res.status(200).json({ message: 'Succesfully Logged In' });
		}
	});
	
};