const fs = require('fs');
const path = require('path');
const manager = require('../app');

module.exports = {
  run: (msg, args) => {
    msg.edit('Reloading...');
    manager.reset();

    fs.readdir(__dirname, (err, files) => {
      if (err)
        throw new Error(err);

      files.forEach((filename) => {
        let mod = require(path.join(__dirname, filename));
        manager.register(mod);
        console.log(`Loaded module ${mod.name}.`);
      });

      msg.edit('Reloaded!');
    });

  },
  name: 'reload',
  help: 'Reload all modules',
  cmd: 'reload'
};
