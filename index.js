const inquirer = require("inquirer");
const mysql = require("mysql2");
const logo = require("asciiart-logo");
require("console.table");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db",
  },
  console.log("connected")
);
const logotext = logo({
  name: "employee-tracker",
}).render();
console.log(logotext);
function employeeTracker() {
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
function adddepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "adddepartment",
        message: "enter department to add",
      },
    ])
    .then((response) => {
      let nameOfDepartment = response.adddepartment;
      db.query(
        `INSERT INTO department (dept_name) VALUES ("${nameOfDepartment}")`,
        function (err, data) {
          if (err) {
            console.log(err);
          }
          viewalldepartments();
        }
      );
    });
}
function addrole() {
  db.query("SELECT * FROM department", function (err, data) {
    if (err) {
      console.log(err);
      return employeeTracker();
    }
    const departmentList = data.map((dept) => ({
      value: dept.id,
      name: dept.dept_name,
    }));
    inquirer
      .prompt([
        {
          type: "input",
          name: "addRole",
          message: "what role would you like to add:",
        },
        {
          type: "input",
          name: "salary",
          message: "what's the salary expectation for this role?",
        },
        {
          type: "list",
          name: "departmentId",
          message: "which department does this role belong to?",
          choices: departmentList,
        },
      ])
      .then((response) => {
        let role = response.addRole;
        let salary = response.salary;
        let departmentId = response.departmentId;
        db.query(
          `INSERT INTO role (title, salary, department_id)
        VALUES
        ("${role}", "${salary}","${departmentId}")
        `,
          function (err, data) {
            if (err) {
              console.log(err), employeeTracker();
            }
            viewallroles();
          }
        );
      });
  });
}
function addemployee() {
  db.query("SELECT * FROM role", function (err, data) {
    if (err) {
      console.log(err);
      employeeTracker();
    }
    const roles = data.map((role) => ({
      value: role.id,
      name: role.title,
    }));
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "what's the employee's first name?",
        },
        {
          type: "input",
          name: "lastName",
          message: "what's the employee's last name?",
        },
        {
          type: "list",
          name: "roleChoice",
          message: "what's the employee's role?",
          choices: roles,
        },
      ])
      .then((answers) => {
        let firstName = answers.firstName;
        let lastName = answers.lastName;
        let roleId = answers.roleChoice;
        db.query(
          `
  INSERT INTO employee (first_name, last_name, role_id)
  VALUES 
  ("${firstName}", "${lastName}", "${roleId}")
  `,
          function (err, data) {
            if (err) {
              console.log(err);
              employeeTracker();
            }
            viewallemployees();
          }
        );
      });
  });
}
function updateemployee() {
  db.query("SELECT * FROM employee", function (err, data) {
    if (err) {
      console.log(err);
      employeeTracker();
    }
    const employeeChoices = data.map((employee) => ({
      value: employee.id,
      firstName: employee.first_name,
      lastName: employee.last_name,
        }));
        console.log(employeeChoices)
    inquirer
      .prompt([
        {
          type: "input",
          name: "employeeId",
          message: "which employee would you like to update (select employee by ID#?",
          // choices: [employeeChoices],
        },
        {
          type: "input",
          name: "firstName",
          message: "update firstName",
        },
        {
          type: "input",
          name: "lastName",
          message: "update lastName",
        },
      ])
      .then((update) => {
        let employeeId = update.employeeId;
        let updateFirst = update.firstName;
        let updateLast = update.lastName;
        db.query(
          `UPDATE employee SET first_name = ${updateFirst}, last_name = ${updateLast} WHERE id=${employeeId};`,
          function (err, data) {
            err ? console.log(err) : viewallemployees(); 
          }
        );
      });
  });
}
function quit() {
  console.log("application close");
  process.exit();
}

employeeTracker();
