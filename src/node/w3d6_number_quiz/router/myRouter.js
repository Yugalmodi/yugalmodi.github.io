var express = require('express');
var router = express.Router();
var controller = require('../controller/myController');

router.get('/index.js', controller.loadPage);
router.get('/submit.js', controller.checkAnswer);

module.exports = router;