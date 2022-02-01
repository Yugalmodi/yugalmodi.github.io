const express = require('express');
const myController = require('../controller/myController');
const router = express.Router();

router.get('/index.html', myController.home);
router.post('/calc.js', myController.perform);
router.get('/back.js', myController.back);
router.get('/solution', myController.solution);

module.exports = router;