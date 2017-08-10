const bot = require('../app.js').bot;

let enabled = false;

const callback = (msg) => {
  msg.react('🦃').then().catch(console.error);
}

module.exports = {
  cmd: 'turkey',
  help: 'Enable / disable turkey mode',

  run: (msg, args) => {
    if (!enabled) {
      bot.on('message', callback);
      enabled = true;
    }
    else {
      bot.removeListener('message', callback);
      enabled = false;
    }
    msg.delete().then().catch(console.error);
  }
};