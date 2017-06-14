const manager = require('../app.js');

module.exports = {
  run: (msg, args) => {
    let commands = manager.commands;
    let helpMsg = '```';

    commands.forEach((el) => {
      helpMsg += `${el.name}\t${el.help}\n`;
    });
    helpMsg += '```';

    msg.edit(helpMsg)
      .then()
      .catch(console.error);
  },
  name: 'help',
  help: 'Display this help!',
  cmd: 'help'
};
