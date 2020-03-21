//import chalk from 'chalk';
const chalk = require('chalk')

// Print success to console in green
//test your work
//make text bold and inverse
//log(chalk.blue.bgRed.bold('Hello world!'));

//order does not matter
console.log(chalk.greenBright.bold.inverse('Success!'))
console.log(chalk.black.bgRedBright('Fail!'))
console.log(chalk.blue.inverse('Fail!'))