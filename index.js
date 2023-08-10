const inquirer = require("inquirer");
const mysql = require("mysql2");
const logo = require("asciiart-logo");
require("console.table");
const db = mysql.createConnection(
{
    host: "localhost",
    user: "root",
    password: "0143102",
    database: "employees_db",

} ,
   console.log("connected")
)
function employeeTracker(){
    const logotext = logo({
    name: "employee-tracker"    
    })
    .render()
    console.log (logotext)
}
employeeTracker()
