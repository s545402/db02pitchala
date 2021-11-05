var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('safari', { title: 'Search Result for safari' });
});

module.exports = router;
