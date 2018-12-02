// タイマでLEDを点滅(led_onoff4.js)
var gpio = require('onoff').Gpio;
var led = new gpio(21, 'out');
var buttonSw = new gpio(13, 'in');

function blinkLED() {
  if (led.readSync() === 0) {
    led.writeSync(1);
  } else {
    led.writeSync(0);
  }
}
// 250ms経過毎に blinkLEDを呼び出す
var blinkInterval = setInterval(blinkLED, 250);

// 終了処理(点滅を止めて，LEDを消灯)
function endBlink() {
  clearInterval(blinkInterval);
  led.writeSync(1);
  led.unexport();
}
// 5秒後に endBlink を呼び出す
setTimeout(endBlink, 5000);
