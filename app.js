const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');

const CommandsManager = require('./commands');

const bot = new Discord.Client();
const manager = new CommandsManager();

// Registering events
bot.on('ready', () => {
  console.log('scord is ready!');
  module.exports.user = bot.user;
});

bot.on('message', (msg) => {

  if (msg.author !== bot.user)
    return

  if (!msg.content.startsWith(config.prefix))
    return

  const cmd = msg.content.split(" ")[0].substring(config.prefix.length, msg.content.length);
  const args = msg.content.split(" ").splice(1);

  let commands = manager.commands;

  commands.forEach((el) => {
    if (el.cmd === cmd) {
      manager.run(el, msg, args);
    }
  });

});

// Retrieve configuration
let config = {};
if (process.env.SCORD_TOKEN && process.env.SCORD_PREFIX) {
  config = {
    token: process.env.SCORD_TOKEN,
    prefix: process.env.SCORD_PREFIX
  };
}
else if (process.argv.length === 4) {
  config = {
    token: process.argv[2],
    prefix: process.argv[3]
  };
}
else {
  config = require(path.join(__dirname, 'config', 'config.json'));
}

if (typeof config.prefix !== 'string' || config.prefix === '') {
  console.error('scord: invalid prefix.');
  process.exit(1);
}
if (typeof config.token !== 'string' || config.token === '') {
  console.error('scord: invalid token.');
  process.exit(1);
}

// Login
console.log(`Starting scord with prefix '${config.prefix}'.`);
bot.login(config.token);

// Load all modules
fs.readdir(path.join(__dirname, 'modules'), (err, files) => {
  if (err)
    throw new Error(err);

  files.forEach((filename) => {
    try {
      const mod = require(path.join(__dirname, 'modules', filename));
      manager.register(mod);
      console.log(`Loaded module ${filename}`);
    } catch (e) {
      console.error(`Cannot load ${filename}: ${e}.`);
    }
  });
});

// Export manager and user in case it is needed for a module (eg help or reload)
module.exports = {
  manager: manager,
  user: bot.user
}
