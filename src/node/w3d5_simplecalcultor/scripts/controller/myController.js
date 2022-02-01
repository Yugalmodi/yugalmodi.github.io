var myModel = require('../model/operations');
var path = require('path');

exports.home = (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../../', 'index.html'));
}

exports.perform = (req, res, next)=>{
    var first = req.body.first;
    var second = req.body.second;
    var operation = req.body.operation;
    console.log("operation = "+operation);
    switch (operation){
        case 'Add': 
            req.app.locals.myData = myModel.add(first, second);
        break;
        case 'Subtract':
            req.app.locals.myData = myModel.subtract(first, second);
        break;
        case 'Multiply':
            req.app.locals.myData = myModel.multiply(first, second);
        break;
        case 'Divide':
            req.app.locals.myData = myModel.divide(first, second);
        break;
        default:
            res.status(500).send('Something Wrong!');
    }
    res.redirect('/solution');
}

exports.solution = (req, res, next) => {
    res.send(req.app.locals.myData);
}

exports.back = (req, res, next) => {
    console.log('Going Back');
    res.redirect('/index.html');
}