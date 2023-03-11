const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "studentDb"
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    var data=[];
    res.render('pages/indx.ejs',{data});
})
app.get('/getdata', (req, res) => {
    var query = "select * from st_table order by student_id limit 10;";
    var query1 = "select * from st_table where student_city='surat' order by student_id limit 10;";
    var query2 = "select * from st_table where student_firstName='Ramesh' order by student_id limit 10;";
    var query3 = "select * from st_table where student_lastName='Patel' order by student_id ";
    var query4 = "select * from st_table where student_lastName='Patel' order by student_id ";
    var query5 = "select * from st_table where student_lastName='Patel' order by student_id ";
    var query6 = "select * from st_table where student_lastName='Patel' order by student_id ";
    var query7 = "select * from st_table where student_lastName='Patel' order by student_id ";
    var query8 = "select * from st_table where student_lastName='Patel' order by student_id ";
    var query9 = "select * from st_table where student_lastName='Patel' order by student_id ";
    var query10 = "select * from st_table where student_lastName='Patel' order by student_id ";

    var data=[];
    connection.query(query, (err, result1) => {
        if(err) throw err;
         data[0]=result1;
    })
    connection.query(query1, (err, result1) => {
        if(err) throw err;
         data[1]=result1;
    })
    connection.query(query2, (err, result1) => {
        if(err) throw err;
         data[2]=result1;
    })
    connection.query(query3, (err, result1) => {
        if(err) throw err;
         data[3]=result1;
    })
    connection.query(query4, (err, result1) => {
        if(err) throw err;
         data[4]=result1;
    })
    connection.query(query, (err, result1) => {
        if(err) throw err;
         data[5]=result1;
    })
    connection.query(query, (err, result1) => {
        if(err) throw err;
         data[6]=result1;
    })
    connection.query(query, (err, result1) => {
        if(err) throw err;
         data[7]=result1;
    })
    connection.query(query, (err, result1) => {
        if(err) throw err;
         data[8]=result1;
    })
    connection.query(query, (err, result1) => {
        if(err) throw err;
         data[9]=result1;
         res.render("pages/indx.ejs",{data});
    })
})


app.listen(6060, () => {
    console.log("port running on 6060");
})


connection.connect((err) => {
    console.log("database connected...");
})

