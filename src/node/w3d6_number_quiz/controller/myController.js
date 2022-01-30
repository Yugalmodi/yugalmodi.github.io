var database = require('../model/database');
var model = require('../model/index');

var myValues = (function(){
    var count = 0;
    var score = 0;
    return {
        count : count,
        score : score
    }
})();

exports.loadPage = function (req, res, next){
    myValues.count=0;
    myValues.score=0;
    res.status(200).send(model.main( myValues.count, myValues.score));
}

exports.checkAnswer = function (req, res, next){
    var ans = req.query.ansID;
    console.log("ans = "+ans+", Correct Ans = "+database.answer()[myValues.count]+", count = "+myValues.count+", score = "+myValues.score);
    if(myValues.count<5) {
        if (database.answer()[myValues.count]==ans) myValues.score++;
        myValues.count++;
    }
    console.log("ans = "+ans+", count = "+myValues.count+", score = "+myValues.score);
    res.status(200).send(model.main(myValues.count, myValues.score));
}