const inquirer = require('inquirer')

const questions = [
  {
    name: 'mode',
    type: 'list',
    message: '你要干啥😳',
    choices: [ '初始化项目' ]
  }
]

inquirer.prompt(questions);