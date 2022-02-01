var express = require('express');
var path= require('path');
var word = require('./word');

var app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/index.html', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "dict.html"));
});
app.get("/dict.css", function (req, res) {
    res.sendFile(path.join(__dirname, "dict.css"));
});
app.get("/dict.js", function (req, res) {
    res.sendFile(path.join(__dirname, "dict.js"));
});

app.post('/getData', (req, res, next)=>{
    console.log('requested for search');
    word.search(req.body.word, function(searchdata, err){
        if (err) {
            console.log("Search Result Error :- "+err);
            throw err;
        }
        res.status(200).json({success: true, data:searchdata});
    });
});

app.use((req, res)=>{
    res.status(404).send('Page Not Found!');
});
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send('Some Error in server!');
});

app.listen(3000, ()=>console.log('starting server 3000....Dictionary'));