const manager = require('../app.js').manager;

module.exports = {
  help: 'Display this help!',
  cmd: 'help',

  run: (msg, args) => {
    let commands = manager.commands;
    let helpMsg = '```';

    commands.forEach((el) => {
      helpMsg += `${el.cmd}\t\t${el.help}\n`;
    });
    helpMsg += '```';

    msg.edit(helpMsg)
      .then()
      .catch(console.error);
  }
};
