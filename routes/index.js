var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('payment', { payment:{ pay : true } });
});

router.get('/pay', function(req, res, next) {
  res.render('payment', { payment:{ pay : true } });
});

router.get('/wrongpay', function(req, res, next) {
  res.render('payment', { payment:{ wrongpay : true } });
});

router.get('/paytoplay', function(req, res, next) {
  res.render('payment', { payment:{ paytoplay : true } });
});

module.exports = router;
