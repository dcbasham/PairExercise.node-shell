const fs = require('fs');

module.exports = function (arg) {
  fs.readFile(`${arg}`, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
  });
};
