// M2Xでデバイスおよびストリームを作成する例

// M2Xモジュールの取り込み
var M2X = require("m2x");

// アカウントのマスターキーからM2Xオブジェクトの取得
// マスターキーはM2Xのサイトにログインして確認
// https://m2x.att.com/account
//
//var m2xClient = new M2X("<API-KEY>");
var m2xClient = new M2X("a7125124a9f577d082c6333dd47a93b4");


// デバイス生成のためのパラメータ
device_params = {
    // デバイス名(必須)
    name: "RPi-Node",
    // visibility(必須): private または public
    visibility: "private",
};

m2xClient.devices.create(device_params, function(response) {
    if (response.isSuccess()) {  // デバイス生成に成功
        device_id = response.json.id;
        console.log("Device created. Device id: ".concat(device_id));

        // ストリーム生成のための情報
        stream_id = "temp";
        stream_params = {
            // type: データの種別．numeric(デフォルト) または alphanumeric
            type: "numeric"
        };

        // ストリームの生成
        m2xClient.devices.updateStream(device_id, stream_id, stream_params, function(response) {
            if (response.isSuccess()) { // 生成に成功
                console.log("Stream created. Stream id: ".concat(stream_id));
            } else {  // 失敗
                console.log(JSON.stringify(response.error()));
            }
        });

    } else { // デバイス生成失敗
        console.log(JSON.stringify(response.error()));
    }
});
