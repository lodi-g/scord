const request = require('request');

const apiUrl = 'https://min-api.cryptocompare.com/data/price?tsyms=USD&fsym=';

module.exports = {
  help: 'Display a cryptocurrency price',
  cmd: 'crypto',
  args: 1,

  run: function(msg, args) {

    if (args[0] === undefined)
      return msg.edit('Please specify a currency.').then().catch(console.error);

    msg.edit('Processing...')
      .then()
      .catch(console.error);

    let currency = args[0].toUpperCase();
    let url = apiUrl + currency;

    request(url, (err, res, body) => {
      if (res.statusCode !== 200 && res.statusCode !== 301)
        return msg.edit('API is down.').then().catch(console.error);

      body = JSON.parse(body);
      if (body['Response'] === 'Error')
        return msg.edit(body['Message']).then().catch(console.error);

      msg.edit(`${currency}: $${body['USD']}`)
        .then()
        .catch(console.error);

    });
  }
};
