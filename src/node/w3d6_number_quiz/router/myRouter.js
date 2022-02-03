var express = require('express');
var router = express.Router();
var controller = require('../controller/myController');

router.get('/', controller.loadPage);
router.post('/', controller.checkAnswer);

module.exports = router;