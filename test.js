let x = 0, y = 0
setInterval(() => {
	process.stderr.moveCursor(++x, ++y)
}, 1000)