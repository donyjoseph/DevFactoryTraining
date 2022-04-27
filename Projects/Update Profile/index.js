const express = require('express');
const app = express();
app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "country"
    });
app.post('/updateprofile', function (req, res) {

    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
          var sql = "update tbluserss set txtFirstName='Biju' where id=1";

        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("edited product!!!!");
                res.send(result);
            }

        });
    });

})
app.listen(7000, () => {
    console.log("Server is connected!!!!");
})