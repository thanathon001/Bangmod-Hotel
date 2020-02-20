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

router.post('/searchact', function(req, res) {

      var date = req.body.FCheckIn;
      global.timein = date.replace(/(..).(..).(....)/, "$3-$1-$2");
      var date = req.body.FCheckOut;
      global.timeout = date.replace(/(..).(..).(....)/, "$3-$1-$2");
      global.standard;
      global.luxury;
      global.deluxe;
      global.array = [];

      if(Date.parse(timeout)<Date.parse(timein)){
          res.render('index.ejs',{error2: true, error: false});
      } else if (!(timein && timeout)){
            res.render('index.ejs',{error: true, error2:false});
      } else{
        var sql = 'SELECT RoomNo FROM BookingInfo WHERE (CheckIn >= ? AND CheckIn < ?) OR (CheckOut > ? AND CheckOut < ?) OR (CheckIn <= ? AND CheckOut > ?)';

          db.query(sql,[timein,timeout,timein,timeout,timein,timeout], function(err, results, fields) {
          //  if(err) throw err;
            results.forEach(function(item) {
                array.push(item.RoomNo);
              });
            console.log(array);
            if(array.length == 0){
                sql = 'SELECT Count(*) as Count FROM RoomInfo WHERE RoomType = "standard" GROUP BY RoomType';
                db.query(sql, function(err, results, fields) {
                  if(err) throw err;
                  if(results.length != 0){
                    standard = results[0].Count;
                  } else{
                    standard = 0;
                  }

                  })
                sql = 'SELECT Count(*) as Count FROM RoomInfo WHERE RoomType = "deluxe" GROUP BY RoomType';
                db.query(sql, function(err, results, fields) {
                  if(err) throw err;

                  if(results.length != 0){
                    deluxe = results[0].Count;

                  } else{
                    deluxe = 0;
                  }
                })
                sql = 'SELECT Count(*) as Count FROM RoomInfo WHERE RoomType = "luxury" GROUP BY RoomType';
                db.query(sql, function(err, results, fields) {
                  if(err) throw err;

                  if(results.length != 0){
                    luxury = results[0].Count;
                  } else{
                    luxury = 0;
                  }
                  })

            }else{
                sql = 'SELECT Count(*) as Count FROM RoomInfo WHERE RoomNo Not in (?) AND RoomType = "standard" GROUP BY RoomType';
                db.query(sql, [array], function(err, results, fields) {
                  if(err) throw err;

                  if(results.length != 0){
                    standard = results[0].Count;
                  } else{
                    standard = 0;
                  }

                  })
                sql = 'SELECT Count(*) as Count FROM RoomInfo WHERE RoomNo Not in (?) AND RoomType = "deluxe" GROUP BY RoomType';
                db.query(sql, [array], function(err, results, fields) {
                  if(err) throw err;
                  if(results.length != 0){
                    deluxe = results[0].Count;
                  } else{
                    deluxe = 0;
                  }

                })
                sql = 'SELECT Count(*) as Count FROM RoomInfo WHERE RoomNo Not in (?) AND RoomType = "luxury" GROUP BY RoomType';
                db.query(sql, [array], function(err, results, fields) {
                  if(err) throw err;
                  if(results.length != 0){
                    luxury = results[0].Count;
                  } else{
                    luxury = 0;
                  }
                  })
                }
                res.redirect('/Booking');
        })
      }

    });

module.exports = router
