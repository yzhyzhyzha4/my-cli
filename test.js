function fn() {
	new Promise((resolve, reject) => {
		let rl = Promise.resolve()
		rl = rl.then((res) => {
			console.log(1);
		})
		console.log(555);
		rl = rl.then((res) => {
			console.log(2);
		})
		console.log(333);
	})
}

console.log(444);
fn()