
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const db = require('./db.js');
const cookies = require('cookie-parser');
const JSAlert = require("js-alert");

//const {check,validationResult} = require(‘express-validator’);

var app = express();
app.set('view','/');
router.use(session({
	name: 'sid',
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));




router.get('/resetPass', function(req, res){
	res.render('resetPass.ejs', {error: ''});
});

router.post('/reset', function(req, res){
	var pass = req.body.pass;
	var rpass = req.body.rpass;
	var rnpass = req.body.rnpass;
	db.query('SELECT pass FROM profile WHERE email = ?', [req.session.email], function(error, results, fields){
		if (results.length > 0) {
			console.log(pass);
			console.log(results[0].pass);
			if (pass != results[0].pass) {
				res.render('resetPass.ejs', {error: 'passwords are not the same'});
			}
			else if (rpass === rnpass) {
				db.query('UPDATE profile SET pass = ? WHERE email = ?', [rpass,req.session.email], function(error, results, fields){
					res.rediect('/profile');
				});
			}
		}
	});
});




module.exports = router