const commander = require('commander')
const log = require('utils')
const { program } = commander
const pkg = require('../package.json')

module.exports = function(args){
	program
		.name(Object.keys(pkg.bin)[0])
		.usage('<command> [options]')
		.version(pkg.version)
		.option('-d, --debug', '是否开启调试模式', false)

	program
		.command('init [name]')
		.description('init project')
		.option('-f, --force', '是否强制更新', false)
		.action((name, opts) => {
			console.log(name, opts);
			log.info('version', pkg.version)
		})

	program.parse(process.argv)
}

process.on('uncaughtException', (e) => {
	console.log(e.message);
})