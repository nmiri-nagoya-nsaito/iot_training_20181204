var request = require("request");

var EVENT_NAME="<イベント名>";
var IFTTT_MAKER_KEY="<Webhookのキー>";

// IFTTT のイベントを駆動
request('https://maker.ifttt.com/trigger/EVENT_NAME/with/key/IFTTT_MAKER_KEY', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
});
