#!/usr/bin/env node

import ora, { oraPromise } from 'ora'

const spinner = ora().start()
spinner.color = 'red'
spinner.text = 'reading....'
spinner.prefixText = 'Downloading chalk'

setTimeout(() => {
	spinner.stop()
	spinner.succeed('download finish')
}, 1000)

// (async function () {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve()
// 		}, 3000)
// 	})
// 	await oraPromise(promise, {
// 		text: 'promiseloading..',
// 		successText: '下载完成',
// 		failText: '下载失败',
// 		prefixText: 'chalk downLoading'
// 	})
// })()