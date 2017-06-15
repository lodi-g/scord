const vm = require('vm');

module.exports = {
  help: 'Run argument in a sandbox',
  cmd: 'eval',

  run: function(msg, args) {
    let code = args.join(' ');

    if (code === '')
      return msg.delete().then().catch(console.error);

    const script = new vm.Script(code);
    const sandbox = { msg: msg };

    try {
      script.runInNewContext(sandbox);
    } catch (e) {
      msg.edit(`eval: ${e}`).then().catch(console.error);
    }
  }
};
