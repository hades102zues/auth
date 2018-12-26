exports.getSignUp = (req, res, next)=> {
	console.log(req.body);
	res.status(200).json({message: "Welcome to signup"});
};