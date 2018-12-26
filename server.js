const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login.js');

app.use(bodyParser.json());

/*-----CORS--------*/
app.use((req, res, next)=> {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});


//Login Routes
app.use(loginRoutes);



/*-----ERROR HANDLER--------*/
app.use((error, req, res, next)=> {
	//check to see if there is an error status and assign a default if not
	const errorStatus = error.status ? error.status : 500;
	const message = 'Server encountered an error';

	res.status(errorStatus).json({message});
});

/*-----404--------*/
app.use((req, res)=> {
	res.status(404).json({
		message: 'Unknown Route'
	});
});

app.listen(3000);