import ora, {oraPromise} from 'ora';

const spinner = ora().start();

let percent = 0;

spinner.color = 'red';
spinner.text = 'Loading ' + percent + '%';
spinner.prefixText = 'Download chalk';

let task = setInterval(() => {
  percent += 10;
  spinner.text = 'Loading ' + percent + '%';
  if (percent === 100) {
    spinner.stop();
    spinner.succeed('Download finish!');
    clearInterval(task);
    task = undefined;
  }
}, 500);

// (async function() {
//   const promise = new Promise((resolve) => {
//     console.log('doing something...');
//     setTimeout(() => {
//       resolve();
//     }, 3000);
//   });
//   await oraPromise(promise, {
//     successText: 'success!',
//     failText: 'failed!',
//     prefixText: 'Download ora',
//     text: 'Loading',
//     spinner: {
//       interval: 120, // Optional
//       frames: ['-', '\\', '|', '/', '-'],
//     }
//   });
// })();
