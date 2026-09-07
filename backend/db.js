///////////////////////////////////////////////////////////////////////
//
//  File Name :      db.js
//  Description :    Creates and manages MySQL database connection
//  Database :       task_manager1
//  Technology :     MySQL
//
///////////////////////////////////////////////////////////////////////

const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"task_manager1"
});
db.connect((error) =>{
    if(error) {
        console.log("Database connection failed:",error);
        return;
    }
    console.log("MySQL Database conected");
});
module.exports = db;