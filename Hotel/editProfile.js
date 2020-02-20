const express = require('express');
const app  = express();
const path = require('path');
const plug = require('ejs');
const router = express.Router();
const db = require('./db.js');


router.post('/edit', function(req, res){
	var oldEmail = req.session.email;
	var email = req.body.email;
	var fname = req.body.fname;
	var lname = req.body.lname;
	var phone = req.body.phone;
	var ccard = req.body.ccard;
	db.query('UPDATE profile SET email = ?, fName =?, lName = ?, phone = ?, CCard = ? WHERE email = ?', 
			[email,fname,lname,phone,ccard,oldEmail], function(error, results, fields) {
	req.session.email = email;
	req.session.fname = fname;
	req.session.lname = lname;
	req.session.phone = phone;
	req.session.CCard = ccard;
	res.redirect('/MyAccount');
				
				
	});
});


module.exports = router