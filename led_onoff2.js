// LEDの点灯・消灯（ボタンの状態で変わる）
// (led_onoff2.js)

var gpio = require('onoff').Gpio;
var led = new gpio(21, 'out');

// GPIO 13ピン（ボタンスイッチ用）を宣言
var buttonSw = new gpio(13, 'in');

while(1) { // ずっと続ける(よくない書き方)
  // スイッチが押されていたらLEDを点灯
  // そうでなければ消灯する
  if(buttonSw.readSync() == 0) {
      led.writeSync(0);
  }
  else {
      led.writeSync(1);
  }
}

