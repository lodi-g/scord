const manager = require('../app.js');

module.exports = {
  run: (msg, args) => {
    let helpMsg = '```';
    let commands = manager.commands;

    commands.forEach((el) => {
      helpMsg += el.name;
      helpMsg += '\t';
      helpMsg += el.help;
      helpMsg += '\n';
    });

    helpMsg += '```';

    msg.edit(helpMsg)
      .then()
      .catch(console.error);
  },
  name: 'help',
  help: "Display this help!",
  cmd: "help"
};
