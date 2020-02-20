const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');


const app = express();
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
global.emailExist = false;
global.ccard = false;


router.get('/register', function(req, res) {
    	res.render('Regis.ejs');
    });

router.post('/registact', function(req, res) {
    	var email = req.body.email;
    	var password = req.body.password;
      var phone = req.body.phone;
      var fname = req.body.fname;
      var lname = req.body.lname;
      var creditcard = req.body.creditcard;
      if (creditcard.length != 16) {
            res.render('Regis.ejs',{emailExist: false, ccard: true});
      }else{
        console.log(phone)
        console.log(email)
        db.query('SELECT * FROM profile WHERE email = ?', [email],
          function(error, results, fields) {
            if (results.length == 0) {
              let profile = {email:email, pass:password,phone:phone,fName:fname,lName:lname,CCard:creditcard};
              let sql = 'INSERT INTO profile SET ?';
              let query = db.query(sql, profile, (err, result) => {
                  if(err) throw err;
                    res.redirect('/login');
                  });
            } else {
              res.render('Regis.ejs',{emailExist: true,ccard: false});
            }
          });
      }


    });




module.exports = router
