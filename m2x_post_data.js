// 既存のデバイスおよびストリームにデータを送信(m2x_post_data.js)
var M2X = require("m2x");
var m2xClient = new M2X("<API-KEY>");

// デバイスID
device_id = "デバイスID";

var sensor = require('node-dht-sensor');

// センサーからの読み出し
sensor.read(11, 4, function(err, temperature, humidity) {
  if (!err) {
    var temp = temperature.toFixed(1);

    console.log('temp: ' + temp + ', humidity: ' + humidity.toFixed(1));

    // 送信データの作成
    var params = { values: {'temp': temp} };

    // データをポスト
    m2xClient.devices.postUpdate(device_id, params, function(response) {
      if (response.isSuccess()) { // 送信成功
        console.log(response.json);
      } else {
        console.log(JSON.stringify(response.error()));
      }
    });
  }
});


