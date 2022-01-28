var http = require('http');

// Excercise 2
var dt = require('./myModule');

http.createServer(function(req, res){
    //Excercise 1 code
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('Excercise 1 Output \nHello World!');
    
    //Excercise 2 code
    res.write("Excercise 2 Output \n");
    res.write("The date and time are currently: " + dt.myDate());
    // res.end();

    //Excercise 3 code
    res.write("\n\nExcercise 3 Output \n");
    res.write(req.url);
    res.end();
}).listen(8080, ()=> console.log('starting 8080... n1'));