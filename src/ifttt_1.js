var request = require("request");

// IFTTT のイベントを駆動
request('https://maker.ifttt.com/trigger/<イベント名>/with/key/<Webhookのキー>',
  function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  }
);
