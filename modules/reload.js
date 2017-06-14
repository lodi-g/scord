const fs = require('fs');
const path = require('path');
const manager = require('../app');

module.exports = {
  name: 'reload',
  help: 'Reload all modules',
  cmd: 'reload',

  run: (msg, args) => {
    msg.edit('Reloading...')
      .then()
      .catch(console.error);

    manager.reset();

    const files = fs.readdirSync(__dirname);

    files.forEach((filename) => {
      delete require.cache[require.resolve(path.join(__dirname, filename))];
      let mod = require(path.join(__dirname, filename));
      manager.register(mod);
    });

    msg.edit('Reloaded!')
      .then()
      .catch(console.error);
  }
};
