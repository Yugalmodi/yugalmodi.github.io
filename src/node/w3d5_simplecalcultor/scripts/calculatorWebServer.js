var express = require('express');
var app = express();
var myRouter = require('./router/myRouter');

app.use('/', myRouter);

app.use((req, res, next) => {
    res.send(req.url + ' :- Page not supported!');
});

app.use((err, req, res, next)=> {
    res.send('Something wrong! Try Later');
});


app.listen(3000, ()=> console.log('starting 3000.... CalcWebServer'));