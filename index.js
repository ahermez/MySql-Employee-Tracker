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
  },
  console.log("connected")
);
function employeeTracker() {
  const logotext = logo({
    name: "employee-tracker",
  }).render();
  console.log(logotext);
  inquirer
    .prompt([
      {
        type: "list",
        name: "startingquestions",
        choices: [
          "viewallemployees",
          "viewalldepartments",
          "viewallroles",
          "adddepartment",
          "addrole",
          "addemployee",
          "updateemployee",
          "quit",
        ],
      },
    ])
    .then((answers) => {
      console.log("I selected   :" + answers.startingquestions);
      let options = answers.startingquestions;
      switch (options) {
        case "viewallemployees":
          viewallemployees();
          break;
        case "viewalldepartments":
          viewalldepartments();
          break;
        case "viewallroles":
          viewallroles();
          break;
        case "adddepartment":
          adddepartment();
          break;
        case "addrole":
          addrole();
          break;
        case "addemployee":
          addemployee();
          break;
        case "updateemployee":
          updateemployee();
          break;
        case "quit":
          quit();
          break;
      }
    });
}

function viewallemployees() {
  db.query("SELECT * FROM employee", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.table(data), employeeTracker();
  });
}
function viewallroles() {
  db.query("SELECT * FROM role", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.table(data), employeeTracker();
  });
}
function viewalldepartments() {
  db.query("SELECT * FROM department", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.table(data), employeeTracker();
  });
}
function adddepartment(){
    inquirer.prompt([
{
    type: "input", 
    name: "adddepartment",
    message: "enter department to add",
},
      
    ]).then((response) =>{
      let nameOfDepartment = response.adddepartment  
      db.query(`INSERT INTO department (dept_name) VALUES ("${nameOfDepartment}")`, function (err, data){
        if (err) {
     console.log (err)

        }
    viewalldepartments(), 
    employeeTracker()
      })
    })
}
function addrole() {
  db.query("SELECT * FROM role", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.table(data), employeeTracker();
  });
}
function addemployee() {
  db.query("SELECT * FROM employees", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.table(data), employeeTracker();
  });
}
function updateemployee() {
  db.query("SELECT * FROM employees", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.table(data), employeeTracker();
  });
}
function quit() {
  console.log("application close")
  process.exit()
}

employeeTracker();
