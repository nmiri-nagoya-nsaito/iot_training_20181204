var request = require("request");

var IFTTT_MAKER_KEY="davb3w8mKPLqlagM8SGy0C";

// IFTTT のイベントを駆動
//request('https://maker.ifttt.com/trigger/event_name/with/key/IFTTT_MAKER_KEY', function (error, response, body) {
request('https://maker.ifttt.com/trigger/eve/with/key/davb3w8mKPLqlagM8SGy0C', function (error, response, body) { 
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
});
