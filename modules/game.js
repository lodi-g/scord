const path = require('path');

let user = require('../app').user;

module.exports = {
  help: 'Change the current running game',
  cmd: 'game',

  run: (msg, args) => {
    if (user === null)
      user = require('../app').user;

    let game = args.join(' ');
    user.setGame(game).then(() => {
      msg.delete().then().catch(console.errror);
    }).catch(console.error);
  }
};
