var express = require('express');
var app = express();
var route = require('./router/myRouter');

app.use('/', route);

app.use((req, res, next)=>{
    res.status(404).send("Page Not Found");
});
app.use((err, req, res, next)=>{
    res.status(500).send("Something Wrong!!\n"+err);
});
app.listen(3000, () => console.log('Staring Server 3000.... Number Quiz'));