module.exports = {
  name: 'ping',
  help: 'Pong!',
  cmd: 'ping',
  
  run: (msg, args) => {
    msg.edit('Pong!')
      .then()
      .catch(console.error);
  }
};
