var express = require('express');
var route = require('./router/myRouter');
var path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views',path.join(__dirname, './views'));
app.use(express.urlencoded({extended:true}));

app.use('/', route);

app.use((req, res, next)=>{
    res.status(404).send("Page Not Found");
});
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send("Something Wrong!!");
});
app.listen(3000, () => console.log('Staring Server 3000.... Number Quiz'));