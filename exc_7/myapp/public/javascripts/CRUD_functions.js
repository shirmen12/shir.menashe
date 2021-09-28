
const sql = require("/Users/shirmenash/shir.menashe/exc_4/myapp/DB/db.js");
console.log("4444")
const createNewContact = function(req,res){
    console.log("1111")
    // Validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    console.log("2222")
    sql.query("INSERT INTO Contacts (Email, First_Name, Last_name, Description) VALUES (?,?,?,?)", [req.body.email, req.body.first_name, req.body.last_name, req.body.description], (err, mysqlres) => {
        console.log("3333")
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
console.log("4444")
module.exports = {createNewContact};
