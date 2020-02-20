
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


router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());



router.get('/login', function(req, res){
	res.render('login.ejs',{wPass: false, require: false});
});

/*router.get('/login', function(req, res) {
	res.sendFile(path.join(__dirname + '/login.html'));
});*/


router.post('/auth',function(req, res, next) {
	var email = req.body.email;
	var password = req.body.password;
	if (email && password) {
		db.query('SELECT * FROM profile WHERE email = ? AND pass = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				loggedin = req.session.loggedin;
				req.session.email = email;
				req.session.phone = results[0].phone;
				req.session.fname = results[0].fName;
				req.session.lname = results[0].lName;
				req.session.CCard = results[0].CCard;
				res.redirect('/index');
			} else {
				delete req.session.loggedin;
				delete req.session.email;
				delete req.session.phone;
				delete req.session.fname;
				delete req.session.lname;
				delete req.session.CCard;
				//JSAlert.alert('Incorrect email and/or password');
				//global.error = 'Wrong email and password!';
				res.render('login.ejs', {wPass: true, require: false});
			}
			res.end();
		});
	} else {
		res.render('login.ejs', {require: true});
		res.end();
	}
});

router.get('/logout', function(req, res){
	req.session.destroy();
	loggedin = false;
	res.redirect('/index');
});


module.exports = router