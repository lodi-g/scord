module.exports = {
  cmd: 'pray',
  help: 'Replace spaces by :pray: emote',

  run: (msg, args) => {
    
    if (args.length === 0)
      return msg.delete().then().catch(console.error);

    const m = args.join(' :pray: ');
    msg.edit(m).then().catch(console.error);
  }
};