// LEDを点灯する(led_onoff.js)
// 
// 書き方についての補足：
//   行頭のスラッシュ2本はコメント
//   行末のセミコロン ; は文の区切り

// onoff モジュールの Gpio を取得
var gpio = require('onoff').Gpio;

// GPIO 21ピンを出力ピンに設定
var led = new gpio(21, 'out');

// GPIO 21ピンをLow出力にする（つまり点灯）
led.writeSync(0);
