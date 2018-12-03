//  express を用いたHTTP版 Hello Worldサンプル(httpHello.js)
var express = require('express');
// expressの初期化
var app = express();

// ルートパス(/)にアクセスした場合の処理
app.get('/', function (req, res) {
  console.log('accessed to ' + req.originalUrl + ' from' + req.ip);
  res.send('Hello World!');
});

// /temp にアクセスした場合，温度センサーの値を返す
app.get('/temp', function (req, res) {
  console.log('accessed to ' + req.originalUrl + ' from' + req.ip);

  // 温度センサーからの読み出し
  var sensor = require('node-dht-sensor');
  sensor.read(11, 4, function(err, temperature, humidity) {
    if (!err) {
      console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
          'humidity: ' + humidity.toFixed(1) + '%'
      );
      res.send(temperature.toFixed(1));
    }
  });
});

// 3000番ポートで待ち受け
app.listen(3000, function () {
  console.log('server start');
});
