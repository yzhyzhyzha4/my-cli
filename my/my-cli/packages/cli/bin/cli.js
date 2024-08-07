#!/usr/bin/env node

const importLocal = require('import-local')
const log = require('utils')
const entry = require('../lib/index')

if(importLocal(__filename)) {
	log.info('cli', '使用本次cli-immoc版本')
} else {
	entry(process.argv.slice(2))
}