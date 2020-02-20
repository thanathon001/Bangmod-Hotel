
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const db = require('./db.js');
const cookies = require('cookie-parser');
const JSAlert = require("js-alert");


router.use(session({
	name: 'sid',
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

router.get('/MyAccount', function(req, res, next){
	if (loggedin) {
		res.render('MyAccount.ejs',{
			email: req.session.email,
			fname: req.session.fname,
			lname: req.session.lname,
			phone: req.session.phone,
			ccard: req.session.CCard
		});
	}
	else{
		res.render('index.ejs', {error: 'need login first'})
	}
});




module.exports = router