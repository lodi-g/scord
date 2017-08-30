const H2DISCORD_LINK = 'https://gist.github.com/lodi-g/7e98dc3671b73c0ed064aa16112be6e4';

module.exports = {
  cmd: 'h2discord',
  name: 'howtodiscord',
  help: 'Links to a README on how to post code on Discord.',

  run: (msg, args) => {
    msg.edit(H2DISCORD_LINK)
      .then()
      .catch(console.error);
  }
}