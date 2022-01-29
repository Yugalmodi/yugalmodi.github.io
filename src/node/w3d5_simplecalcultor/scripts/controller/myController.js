var myModel = require('../model/operations');

exports.perform = (req, res, next)=>{
    var first = req.query.first;
    var second = req.query.second;
    var operation = req.query.operation;
    console.log("operation = "+operation);
    switch (operation){
        case 'Add': 
            res.status(200).send(myModel.add(first, second));
        break;
        case 'Subtract':
            res.status(200).send(myModel.subtract(first, second));
        break;
        case 'Multiply':
            res.status(200).send(myModel.multiply(first, second));
        break;
        case 'Divide':
            res.status(200).send(myModel.divide(first, second));
        break;
        default:
            res.status(500).send('Something Wrong!');
    }
} 

exports.back = (req, res, next) => {
    console.log('Going Back');
    res.redirect('back');
}