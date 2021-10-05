// require inquirer, fs and util
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// require lib for classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// link to generateHTML
const generateHTML = require('./src/generateHTML');

let myTeam = [];

// prompts for the user to enter employee info
const addManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is the team manager's name?`
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the team manager's id?`,
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the team manager's email address?`,
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: `What is the team manager's office number?`,
      },
    ])
    .then(answers => {
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      myTeam.push(manager);
      console.log(myTeam);
    })       
  };
// menu to prompt adding a new employee or quit
const addEmployeeMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Whould you like to?',
      choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
    },
  ])
  .then(answers => {
    if (answers.option === 'Add Engineer'){
      return addEngineer();
    } else if (answers.option === 'Add Intern'){
      return addIntern();
    } else {
      console.log(myTeam);
      console.log("Your team has been created!!!")
      const html = generateHTML(myTeam);
      console.log(html);
      
      //.then((html) => writeFileAsync('./dist/index.html', html))        
      //.then(() => console.log('Successfully wrote index.html'))
      //.catch((err) => console.error(err));
      };
      
    })
  }
        
// engineer prompts
const addEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `What is the engineer's name?`,
    },
    {
      type: 'input',
      name: 'id',
      message: `What is the engineer's id?`,
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the engineer's email address?`,
    },
    {
      type: 'input',
      name: 'gitHub',
      message: `What is the engineer's GitHub user name?`,
    },
  ])
  .then(answers => {
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    myTeam.push(engineer);
    console.log(myTeam);
    return addEmployeeMenu();
  })       
     
};
// intern prompts
const addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `What is the intern's name?`,
    },
    {
      type: 'input',
      name: 'id',
      message: `What is the intern's id?`,
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the intern's email address?`,
    },
    {
      type: 'input',
      name: 'school',
      message: `Where does the intern go to school?`,
    },
  ])
  .then(answers => {
    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    myTeam.push(intern);
    console.log(myTeam);
    return addEmployeeMenu();
  })       
     
};




const init = () => {
    addManager()
      .then (addEmployeeMenu)   
};
  
init();