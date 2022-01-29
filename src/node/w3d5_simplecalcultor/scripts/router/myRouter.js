const express = require('express');
const myController = require('../controller/myController');
const router = express.Router();

router.get('/calc.js', myController.perform);
router.get('/back.js', myController.back);

module.exports = router;