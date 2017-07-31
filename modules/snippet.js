const cb = require('clipboardy');
const request = require('request');

const hb = 'https://hastebin.com/documents';

module.exports = {
  help: 'Paste clipboard to hastebin.com',
  cmd: 'snippet',

  run: (msg, args) => {
    
    cb.read()
      .then((c) => {
        request.post({
          url: hb,
          body: c
        }, (err, res, body) => {

          if (err || res.statusCode != 200)
            return msg.delete().then().catch(console.error);

          body = JSON.parse(body);
          let doc = hb.replace('documents', body.key);
          msg.edit(doc).then().catch(console.error);

        });
      })
      .catch(console.error);  
  }
};