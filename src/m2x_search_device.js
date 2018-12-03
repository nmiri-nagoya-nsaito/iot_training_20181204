// 既存のデバイスおよびストリームにデータを送信(m2x_search_device.js)

var M2X = require("m2x");
var m2xClient = new M2X("<API-KEY>");

// デバイスIDの検索(デバイス名は既知とする)
device_name = "RPi-Node";
device_id = "";

// 問い合わせる値（名前）
params = { name: device_name };

// デバイスの検索
m2xClient.devices.search(params, function(response) {
  if (response.isSuccess()) {
    devices = response.json.devices;
    for (var device_index in devices) {
      device = devices[device_index];
      if (device.name == device_name) {
        device_id = device.id;
        console.log("Found.Dev ID:".concat(device_id));
      }
    }
  }
  else {  // search失敗
    console.log(JSON.stringify(response.error()));
  }
});

