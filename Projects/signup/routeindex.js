var express = require('express');
const app= express();
app.use(express.json());   
var mysql = require('mysql');
var con=mysql.createConnection(
    { 
    host: "localhost",
    user: "root",
    password: "password",
    database: "country"
 });
 app.post('/countryfetch', function (req, res) 
 {
    var a=req.body.id;
    con.connect(function (err) 
    {
        if (err) throw err;
        var sql="select txtname ,ID from tblcountry;";
        con.query(sql,function(err,result)
        {

            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    }); 
});
app.post('/statefetch', function (req, res) 
{
   var a=req.body.id;
   con.connect(function (err) 
   {
       if (err) throw err;
       var sql="select txtname ,ID from tblstate;";
       con.query(sql,function(err,result)
       {

           if (err) throw err;
           console.log(result);
           res.send(result);
       });
    })
});
app.post('/userinsert', function (req, res) 

{
   var a=req.body.id;
   con.connect(function (err) 
   {
       
       if (err) throw err;
       var sql="INSERT INTO tblusers(TXTUSERNAME,TXTPASSWORD) VALUES ('RAJESH','SUPER');;";
       con.query(sql,function(err,result)
       {

           if (err) throw err;
           console.log(result);
           res.send(result);
       });
    })
});


    var server = app.listen(5050, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})