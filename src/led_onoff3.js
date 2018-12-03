// ボタンの状態変化でLEDの点灯・消灯を行う
// (led_onoff3.js)

var gpio = require('onoff').Gpio;
var led = new gpio(21, 'out');

// GPIO 13ピンの宣言
// 立ち下がりの変化を検出することを示す
var buttonSw = new gpio(13,'in','falling');

// ハードウェア割り込みを監視する
// 同時に検出した時の処理を指定
buttonSw.watch(function (err, value) {
  if (err) {  // エラーの場合の処理
    console.error('error: ', err);
    return;
  }
  // ボタンの状態をコンソール出力
  console.log('button pushed:', value);
  // LEDの出力を反転
  if (led.readSync() === 0) {
    led.writeSync(1);
  }
  else {
    led.writeSync(0);
  }
});

// Ctrl-Cで終了させた時の後始末処理
function unexportOnClose() { //function to run when exiting program
  led.writeSync(1);
  // 資源の解放
  led.unexport();
  buttonSw.unexport();
  console.log('program exit.');
};

// Ctrl-Cを入力して中断した時に呼び出される関数の登録
process.on('SIGINT', unexportOnClose);
