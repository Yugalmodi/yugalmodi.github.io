var database = require('../model/database');

exports.loadPage = function (req, res, next){
    res.render('index.pug', {score:0, count:0, questions:database.questions()[0]});
}

exports.checkAnswer = function (req, res, next){
    var ans = req.body.ansID;
    var count = req.body.count;
    var score = req.body.score;
    if(count<5) {
        if (database.answer()[count]==ans) score++;
        count++;
    }
    if(count<=5)
        res.render('index.pug', {score:score, count:count, questions:database.questions()[count]});
    else 
        res.render('result.pug', {score:score, count:count});
}