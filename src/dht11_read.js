// node-dht-sensorモジュールの読み込み
// (dht11_read.js)
var sensor = require('node-dht-sensor');

// センサーからの読み出し
sensor.read(11, 4, function(err, temperature, humidity) {
    if (!err) {
        console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
            'humidity: ' + humidity.toFixed(1) + '%'
        );
    }
});

