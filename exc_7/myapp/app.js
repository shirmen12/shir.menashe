const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const app = express();
const sql = require("./DB/db.js")

// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true
}));

app.use(express.static('public'));

// simple route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/CV.html'));
    });

app.get('/Contact_me', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/contact_me_form.html'));
    });    

const CRUD_operations = require("./public/javascripts/CRUD_functions");

// Create new Contact
app.post('/Contact_me', CRUD_operations.createNewContact); 

// Create a route for getting all contacts
app.get("/Contacts", function(req, res){
    sql.query("SELECT * FROM Contacts", (err, mysqlres) => {
        if (err) {
        console.log("error: ", err);
        res.status(400).send({message: "error in getting all contacts: " + err});
        return;
        }
        console.log("got all contacts!");
        res.send(mysqlres);
        return;
    });
});

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});