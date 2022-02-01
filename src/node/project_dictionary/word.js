var mysql = require("mysql");

exports.search = function(word, callBack){
    var con = mysql.createConnection({
        host: "localhost",
        porrt:3306, 
        user: "root",
        password: "root",
        database: "entries",
    });

    con.connect((err)=>{
        if(err) throw err;
        con.query("SELECT * FROM entries WHERE word='"+word+"'", (err, result, fields)=>{
            if (err) throw err;
            callBack(result, null);
        });
    });
}