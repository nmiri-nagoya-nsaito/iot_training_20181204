// M2Xで既存のデバイスおよびストリームにデータを送信

var M2X = require("m2x");
var m2xClient = new M2X("a7125124a9f577d082c6333dd47a93b4");


// デバイスIDの検索
device_name = "RPi-Node";
device_id = "";

params = {
  name: device_name
};

// デバイスの検索
m2xClient.devices.search(params, function(response) {
  if (response.isSuccess()) {
    devices = response.json.devices;
    for (var device_index in devices) {
      device = devices[device_index];
      if (device.name == device_name) {
        device_id = device.id;
        console.log("Device found. Device ID: ".concat(device_id));

        // ポストするデータを作る(ストリーム名は既知とする)
        params = {
          values: {
            // Todo: 送信データを温度センサの値で置き換える
            'temp': 30
          },
        };

        // データをポスト
        m2xClient.devices.postUpdate(device_id, params, function(response) {
          if (response.isSuccess()) {
            console.log(response.json);
          } else {
            console.log(JSON.stringify(response.error()));
          }
        });
      }
    }
  }
  else {  // search失敗
    console.log(JSON.stringify(response.error()));
  }
});

