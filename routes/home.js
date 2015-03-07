var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.render('home', {
      layout: 'layout', 
      pageTitle: 'Home'
    });
  });

module.exports = router;