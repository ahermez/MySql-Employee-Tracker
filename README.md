## Project Title:
MySQL-Employee-Tracker

## Description:
This command-line application is designed to assist business owners in managing their departments, roles, and employees effectively. It provides a user-friendly interface to organize and plan your business operations. Whether you need to view existing data, add new entries, or update roles, this application has you covered.

## Table of Contents
Installation
Usage
Features
Usage Examples
Contributors

## Installation
Ensure you have Node.js installed on your machine.
Clone this repository to your local machine using: git clone
Navigate to the project directory: cd business-management-app
Install the required dependencies: npm install
Set up your environment variables
Initialize the database: npm run 
Run MySql and migrate to Souce db/schema/seeds
Run node index.js

## Usage
To start the application, open your terminal and navigate to the project directory. Then, run the following command: node index.js
Follow the on-screen prompts to interact with the application and choose the desired actions.
  
# Screen Shot Images
<figure>
  <img src="images\Screenshot (414).png" alt="application in use" style="width:100%"> <figcaption><i>application in use</i></figcaption>
  </figure>

## License
This project is licensed under the MIT License.

## Features
View All Departments
Selecting this option displays a formatted table showing department names and their corresponding IDs.
View All Roles
Choosing this option presents a list of job titles, role IDs, associated departments, and salaries.
View All Employees
This option showcases an organized table with employee details, including IDs, first and last names, job titles, departments, salaries, and managers.
Add a Department
Upon selecting this option, you will be prompted to enter the name of the new department. Once entered, the department is added to the database.
Add a Role
When choosing to add a role, you'll need to provide the name, salary, and associated department for the role. The new role will then be added to the database.
Add an Employee
This option guides you through entering the employee's first name, last name, role, and manager. After inputting this information, the employee is added to the database.
Update an Employee Role
If you wish to update an employee's role, the application will prompt you to select the employee to be updated and their new role. The employee's information will be updated accordingly in the database.

## Technology Used
Javascript
Node.js
MySQL
Schema
Seeds

# Folder Structure
The project follows the MVC (Model-View-Controller) paradigm for a structured organization:
- controllers/: Contains route handlers and business logic.
- models/: Defines Sequelize models and schema.
- views/: Handlebars.js templates for the UI.
- public/: Static assets (CSS, images, etc.).
- routes/: Express.js route definitions.
- config/: Configuration files.
- middlewares/: Custom middleware functions.
- db/: Database-related files (migrations, seeders).

# Project Reference 
[Video Link] <a href="https://drive.google.com/file/d/1lS4OV2-VrcfCp5BuhA1ojTD2Aq_QF4wa/view">MySQL-Employee-Tracker</a>
[GitHub page] <a href="https://github.com/ahermez/MySql-Employee-Tracker">MySQL-Employee-Tracker</a>

# Contributors 
[Rene Trevino - - Linkedin] <a href="https://www.linkedin.com/in/rene-trevino-236058169/">Rene Trevino</a>
[Michael Seaman - Linkedin] <a href="https://www.linkedin.com/in/michael-seaman-120a59250/">Michael Seaman</a>


# Authors
Alicia Hermez
  
  