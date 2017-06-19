const vm = require('vm');

module.exports = {
  help: 'Run argument in a sandbox',
  cmd: 'eval',

  run: (msg, args) => {
    let code = args.join(' ');

    if (code === '')
      return msg.delete().then().catch(console.error);

    const sandbox = { msg: msg, require: require };

    try {
      const script = new vm.Script(code);
      script.runInNewContext(sandbox);
    } catch (e) {
      msg.edit(`eval: ${e}`).then().catch(console.error);
    }
  }
};
