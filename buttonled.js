var gpio = require('onoff').Gpio;
var led = new gpio(21, 'out');

// ボタンを離した場合の変化をプログラムで扱うことを指示
var buttonSw = new gpio(13, 'in', 'falling');

// ハードウェア割り込みを監視し, コールバックを指定する
buttonSw.watch(function (err, value) {
  // エラーの場合
  if (err) {
    console.error('There was an error', err);
    return;
  }
  // ボタンが押されたこととボタンの状態を出力
  console.log('button pushed:', value);
  // LEDの状態を反転
  if (led.readSync() === 0) {
    led.writeSync(1);
  } else {
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
