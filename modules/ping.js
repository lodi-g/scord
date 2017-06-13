module.exports = {
  run: (msg, args) => {
    msg.edit('Ponaeazeag!')
      .then()
      .catch(err => console.error(err));
  },
  name: 'ping',
  help: "Pong!",
  cmd: "ping"
};
