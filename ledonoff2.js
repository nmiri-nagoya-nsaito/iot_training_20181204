// ボタンに応じたLEDの点灯・消灯
// (led_onoff.js を書き換え)

var gpio = require('onoff').Gpio;
var led = new gpio(21, 'out');

// GPIO 13ピン（ボタンスイッチ用）を宣言
var buttonSw = new gpio(13, 'in');

while(1) { // ずっと続ける
  // スイッチが押されていたらLEDを点灯
  // そうでなければ消灯する
  if(buttonSw.readSync() == 0) {
      led.writeSync(0);
  }
  else {
      led.writeSync(1);
  }
}

