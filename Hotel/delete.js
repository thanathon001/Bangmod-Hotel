
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




router.get('/delete', function(req, res){
	res.render('delete.ejs');
});

router.post('/confirmDelete', function(req, res){
	var pass = req.body.pass;
	db.query('SELECT pass FROM profile WHERE email = ?', [req.session.email], function(error, results, fields){
		if (results.length > 0) {
			if (pass == results[0].pass) {
				db.query('DELETE FROM profile WHERE email = ?', [req.session.email], function(error, results, fields){
						res.redirect('/index');
				});
			}
			else{
				res.redirect('/profile');
			}
		}
		else{
			res.redirect('/profile');
		}
	});
});




module.exports = router