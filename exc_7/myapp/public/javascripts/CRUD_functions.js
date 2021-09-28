
const sql = require("/Users/shirmenash/shir.menashe/exc_7/myapp/DB/db.js");
const createNewContact = function(req,res){
    // Validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    sql.query("INSERT INTO Contacts (Email, First_Name, Last_name, Description) VALUES (?,?,?,?)", [req.body.email, req.body.first_name, req.body.last_name, req.body.description], (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in creating new contact: " + err});
            return;
        }
        console.log("created contact");
        res.send({message:"new contact created successfully"});
        return;
        });
    };
module.exports = {createNewContact};
