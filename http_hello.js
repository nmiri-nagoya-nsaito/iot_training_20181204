// express を用いたHTTP版 Hello Worldサンプル(http_hello.js)
// Webブラウザで http://<ラズベリーパイのIPアドレス>:3000/ にアクセスすると
// Hello World を表示する

// expressの初期化
var express = require('express');
var app = express();

// ルートパス(/)へのGETアクセスを受け取った時，メッセージを表示する
app.get('/', function (req, res) {
  console.log('accessed to "/" from' + req.ip);
  res.send('Hello World!');
});

// 3000番ポートで待ち受け
app.listen(3000, function () {
  console.log('server start');
});

