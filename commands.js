class CommandsManager {
  constructor() {
    this._commands = [];
  }

  get commands() {
    return this._commands;
  }

  register(cmd) {
    this._commands.push(cmd);
  }

  reset() {
    this._commands = [];
  }
}

module.exports = CommandsManager;
