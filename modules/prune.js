module.exports = {
  help: 'Prunes your last x messages (limit: 25)',
  cmd: 'prune',
  args: 1,

  run: (msg, args) => {
    const limit = parseInt(args[0]);

    msg.channel.search({
      author: msg.author,
      channel: msg.channel,
      limit: limit + 1
    }).then((res) => {

      msg.edit(`Pruning ${limit} messages...`)
        .then()
        .catch(console.error);

      res.messages.forEach((m) => {
        m.forEach((m) => {
          if (m.hit)
            m.delete().then().catch();
        });
      });

      msg.delete().then().catch();

    }).catch(console.error);
  }
};
