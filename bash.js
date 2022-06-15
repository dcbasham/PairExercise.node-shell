const pwd = require('./pwd.js');
const ls = require('./ls.js');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd + '\n');
  if(cmd === 'pwd'){
    pwd();
  }
  if(cmd === 'ls'){
    ls();
  }

});
