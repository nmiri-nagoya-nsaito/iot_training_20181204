// IFTTTに温度データをPOSTする例
var sensor = require('node-dht-sensor');

// センサーからの読み出し
sensor.read(11, 4, function(err, temperature, humidity) {
  var temp = temperature.toFixed(1);

  if (!err) {
    console.log('temp: ' + temp + '°C, ' +
        'humidity: ' + humidity.toFixed(1) + '%'
    );

    // パラメータの編集
    var params = {
      url:'https://maker.ifttt.com/trigger/<イベント名>/with/key/<キーの値>',
      method: 'POST',
      json: {value1: temp}  // 送信するデータ
    };

    // IFTTT のイベントを駆動
    var request = require("request");
    request(params, function(error, response, body){
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
    });
  }
});


