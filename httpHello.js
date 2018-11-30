// HTTPサーバ版　Hello World
//
// Webブラウザで http://<ラズベリーパイのIPアドレス>:3000/ に
// アクセスするとHello World を表示する

const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

