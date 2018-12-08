var express = require('express');
var router = express.Router();
const fs = require('fs')
let utiliData = require('../public/utilData (1).json')

/* GET utiliData. */
router.get('/', function(req, res, next) {
  console.log('hey!')
});

module.exports = router;
