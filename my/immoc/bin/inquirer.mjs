#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'
inquirer.prompt([
	{
		type: 'input',
		name: 'yourName',
		message: 'your name',
		default: 'noname',
		validate (v) {
			return v.includes('yzh')
		},
		transformer (v) {
			return `${chalk.red('name')}: ${v}`
		},
		filter (v) {
			return `${chalk.red('name')}: ${v}`
		}
	},
	{
		type: "number",
		name: 'herName',
		message: 'her name',
	}
]).then((answer) => {
	console.log(answer)
})