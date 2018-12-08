var express = require('express');
var router = express.Router();
const fs = require('fs')
let utiliData = require('../public/utilData (1).json')

/* GET utiliData. */
router.get('/', function(req, res, next) {
  if (res.statusCode === 200){
    res.send(utiliData)
  }else {
    res.send('error')
  }
});

module.exports = router;
