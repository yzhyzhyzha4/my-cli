#!/usr/bin/env node
const commander = require('commander')
const pkg = require('../package.json')

//这是单例
// const { program } = commander

//也可以手动实例化一个
const program = new commander.Command()

program
	.name(Object.keys(pkg.bin)[0])
	.usage('<command> [options]')
	.option('-e, --env', '获取环境变量', 'dev')
	.option('-n, --Name [s]', '获取名字', 'yzh')
	.version(pkg.version) 

//直接注册命令（一级命令）
program
	.command('clone <source> [destination]')
	.option('-f, --force', '是否强制', false)
	.description('clone a repository into a newly created directory')
	.action((source, destination, args) => {
		console.log(source, destination, args)
	})


//注册子命令（二级命令
const create = new commander.Command('create')
create
	.command('clone <source> [destination]')
	.option('-f, --force', '是否强制', false)
	.description('clone a repository into a newly created directory')
	.action((source, destination, args) => {
		console.log('这里是二级命令', source, destination, args)
	})

program.addCommand(create)

//其他命令
program
	.arguments('<cmd> [options]')
	.description('test command', {
		cmd: 'command to run',
		options: 'options for command'
	})
	.action(function (cmd, options) {
		console.log(cmd, options)
	})

//这一行一定添加
program.parse()
