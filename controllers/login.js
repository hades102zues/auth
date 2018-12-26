const { validationResult } = require('express-validator/check');

exports.getSignUp = (req, res, next)=> {
	const errors = validationResult(req);
	if (errors) {
		return res.status(400).json({errors : errors.array()});
	}
	res.status(200).json({message: "Welcome to signup"});
};