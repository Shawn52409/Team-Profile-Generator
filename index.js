// require inquirer, fs and util
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// prompts for the user to enter employee info
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the employees name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employees id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?',
      },


    ]);
};


const generateHTML = (answers) => (

);


const init = () => {
    promptUser()
      // use the aswers to create the HTML file
      .then((answers) => writeFileAsync('./dist/index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote index.html'))
      .catch((err) => console.error(err));
};
  
init();