function validateInput(input) {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(input);
  }
  
const viewOptions =[
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to view?',
        choices: ['View all depeartments', 'view all roles', 'view all employees', 'add a depertment', 'add a role', 'add an employee', 'update an employee role']
    }
]
const addDept = [
    {
        type: 'input',
        name: 'dept',
        message: 'What department would you like to add?',
        validate: validateInput
    }
]

const addRole = [
    {
        type: 'input',
        name: 'role',
        message: 'What role would you like to add?',
        validate: validateInput
    }
]

const addEmployee = [
    
    {
            type: 'input',
            name: 'first_name',
            message: 'What is the employee\'s first name?',
            validate: validateInput
    },
    {
            type: 'input',
            name: 'last_name',
            message: 'What is the employee\'s last name?',
            validate: validateInput
    },
    {
            type: 'input',
            name: 'role_id',
            message: 'What is the employee\'s role ID?',
            validate: validateInput
    },
    {
            type: 'input',
            name:'manager_id',
            message: 'What is the employee\'s manager ID?',
            validate: validateInput
    }
]

const updateEmployee = [
    {
        type: 'list',
        name: 'choice',
        message: 'Which employee would you like to update?',
        choices: ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Brown', 'David Williams', 'Sarah Jones']
    }
]

module.exports ={
    viewOptions,
    addDept,
    addRole,
    addEmployee,
    updateEmployee
}