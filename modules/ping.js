module.exports = {
  name: 'aapingaaa',
  help: 'Pong!',
  cmd: 'ping',
  run: (msg, args) => {
    msg.edit('Pong!')
      .then()
      .catch(console.error);
  }
};
