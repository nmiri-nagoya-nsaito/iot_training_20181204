// ポート番号 3000番で接続を待ち受けて、送信されたデータをエコーする単純なTCPサーバ:

const net = require('net');

const server = net.createServer(function (stream) {
    stream.write('hello\r\n');

    stream.on('data', function (data) {
        stream.write(data);
    });

    stream.on('end', function () {
        stream.end('goodbye\r\n');
    });

    stream.on('error', function(err) {
        console.log('error occured, ignore.:');
    });
});

server.listen(3000, 'localhost');

