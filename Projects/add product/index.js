const express = require('express');
const app = express();
app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "country"
});
app.post('/addproduct', function (req, res) {
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "insert into tblproduct (txtProdName,txtProdPrice)values('test',45)";

        con.query(sql, function (err, result) {

            if (err) {
                console.log(err);
            }
            else {
                console.log("Data insert!!!!");
                res.send(result);
            }
        });
    });
})
app.listen(5000, () => {
    console.log("Server is connected!!!!");
})