const inquirer = require('inquirer');
const { table } =require('table');
const {viewOptions, addDept, addRole, addEmployee, updateEmployee} = require('./db/lib/questions');
const db = require('./config/connections;')

Init();

function Init() {
    inquirer.prompt(viewOptions).then((answer) => {
        switch (answer.choice) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
            default:
                break;
        }
    });
}

function viewDepartments() {
    db.query('SELECT id, dptname AS name FROM departments', (error, result) =>{
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        const newTable = [
            ['Department ID', 'Department Name']
        ]
        results.forEach(department => {
            newTable.push([department.id, department.name])
        })
        console.log('\n'+table(newTable));
        Init();
    })
}

function addDepartment(){
    inquirer.prompt(addDept).then((answer) => {
        db.query('INSERT INTO departments (dept) VALUES (?)', [answer.dept], (error,result) => {
            if (error) {
                console.error('Error adding departmtnet:', error);
                return;
            }

            console.log('department added successfully');
            Init();
        })
    })   
}
function viewRoles(){
    db.query(`SELECT roles.id, roles.title AS name, roles.salary, department.dptname AS department FROM roles
    inner join departments ON roles.department_id=departments.id`, (error, result) =>{
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        const newTable = [
            ['Role ID', 'Role Name, Role Salary', 'Department Name',]
        ]
        results.forEach(role => {
            newTable.push([role.id, role.name, role.salary, role.department])
        })
        console.log('\n'+table(newTable));
        Init();
    })
}

function viewEmployees(){
    db.query(`SELECT employee.id, CONCAT(employees.first_name, ' ', employees.last_name) AS name, roles.title, roles.salary, department.dptname AS department, CONCAT(managers.first_name, ' ', managers.last_name) AS manager FROM employees
    INNER JOIN roles ON employees.role_id = roles.id
    INNER JOIN depeartments ON roles.department_id = departments.id
    LEFT JOIN employees AS managers ON employees.manager_id = managers.id`, (error, result) =>{
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        const newTable = [
            ['Employee ID', 'Name', 'Role Name', 'Manager Name', 'Salary', 'Department']
        ]
        results.forEach(employee => {
            newTable.push([employee.id, employee.name, employee.title, employee.salary, employee.department, employee.manager])
        })
        console.log('\n'+table(newTable));
        Init();
    })
}

function addRole(){

}