var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res){
    res.render('reads', { 
      layout: 'layout', 
      title: 'Reads'
    });
  });

module.exports = router;