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


router.post('/bookact', function(req, res) {
    	var room;
      let checkin = timein;
      let checkout = timeout;
      let roomType = req.body.roomType;

      if(array.length == 0)
        {
          array = 0;
        }
      let sql = 'SELECT RoomNo FROM RoomInfo WHERE RoomType = ? AND RoomNo NOT IN (?)';
      db.query(sql, [roomType,array], function(err, results, fields){
          if(err) throw err;
          console.log(results);
          if(results.length == 0){
            room = 0;
          } else{
            room = results[0].RoomNo;
          }
          if(room != 0) {
              let sql = 'INSERT INTO BookingInfo SET ?';
              let book = {CheckIn:checkin , CheckOut:checkout , RoomNo:room};
              db.query(sql, book, function(err, results, fields){
              if(err) throw err;
              res.sendFile(path.join(__dirname + '/Project/thankYou.html'));
            });
          } else {
              res.sendFile(path.join(__dirname + '/Project/sorry.html'));
          }
      })

    })

module.exports = router
