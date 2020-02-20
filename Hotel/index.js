const express = require('express');
const app  = express();
const path = require('path');
const plug = require('ejs');
const router = express.Router();



router.get('/', function(req, res) {
  if (!loggedin) {
      res.render('index.ejs');
  }else{
        res.render('indexlog.ejs');
  }
});

router.get('/booking', function(req, res) {
  if (!loggedin) {
      res.render('booking.ejs');
  }else{
        res.render('bookinglog.ejs');
  }
});

router.get('/index', function(req, res) {
  if (!loggedin) {
      res.render('index.ejs');
  }else{
        res.render('indexlog.ejs');
  }
});

router.get('/Meeting', function(req, res) {
  if (!loggedin) {
      res.render('Meeting.ejs');
  }else{
        res.render('Meetinglog.ejs');
  }
});

router.get('/Offer', function(req, res) {
  if (!loggedin) {
      res.render('Offer.ejs');
  }else{
        res.render('Offerlog.ejs');
  }
});



router.get('/RoomService', function(req, res) {
  if (!loggedin) {
      res.render('RoomService.ejs');
  }else{
        res.render('RoomServicelog.ejs');
  }
});

router.get('/contact', function(req, res) {
  if (!loggedin) {
      res.render('contact.ejs');
  }else{
        res.render('contactlog.ejs');
  }
});





module.exports = router