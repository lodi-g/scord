class CommandsManager {
  constructor() {
    this._commands = [];
  }

  get commands() {
    return this._commands;
  }

  register(cmd) {
    if (cmd.name === undefined)
      cmd.name = cmd.cmd;

    this._commands.push(cmd);
  }

  reset() {
    this._commands = [];
  }

  run(el, msg, args) {
    if (el.args && el.args !== args.length)
      return msg.edit(`\`${el.cmd}\` requires ${el.args} arguments.`).then().catch(console.error);

    try {
      el.run(msg, args);
    }
    catch (e) {
      msg.edit('Failed.');
      console.error(e);
    }
  }

}

module.exports = CommandsManager;
