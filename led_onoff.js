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

var blinkInterval = setInterval(blinkLED, 250);

// 5秒後に点滅を止める

function endBlink() {
  clearInterval(blinkInterval);
  led.writeSync(1);
  led.unexport();
}

setTimeout(endBlink, 5000);

