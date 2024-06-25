#!/usr/bin/env node
import chalk from 'chalk'

console.log('\x1B[31m\x1B[4m%s\x1B[0m', 'your name')
console.log('\x1B[2B%s', 'your name')

console.log(chalk.red.bold('name', chalk.underline('yzh')))
console.log(chalk.rgb(22, 100, 200)('your name'))
console.log(chalk.hex('#000fff')('your name'))
