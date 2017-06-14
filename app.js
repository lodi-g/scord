const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const config = require('./config/config.json');
const CommandsManager = require('./commands');

const bot = new Discord.Client();
const manager = new CommandsManager();

bot.on('ready', () => {
  console.log('scord is ready!');
});

bot.on('message', (msg) => {

  if (msg.author !== bot.user)
    return

  if (!msg.content.startsWith(config.prefix))
    return

  const cmd = msg.content.split(" ")[0].substring(config.prefix.length, msg.content.length);
  const args = msg.content.split(" ").splice(1);

  let commands = manager.commands;
  console.log(`Received command ${cmd} with args ${args}`);

  commands.forEach((el) => {
    if (el.cmd === cmd) {
      try {
        el.run(msg, args);
      }
      catch (e) {
        msg.edit('Failed.');
        console.error(e);
      }
    }
  });

});

// Login
bot.login(config.token);

// Load all modules
fs.readdir(path.join(__dirname, 'modules'), (err, files) => {
  if (err)
    throw new Error(err);

  files.forEach((filename) => {
    let mod = require(path.join(__dirname, 'modules', filename));
    manager.register(mod);
    console.log(`Loaded module ${mod.name}.`);
  });
});

// Export manager in case it is needed for a module (eg help or reload)
module.exports = manager;
