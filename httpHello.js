// HTTPサーバ版　Hello World
//
// Webブラウザで http://<ラズベリーパイのIPアドレス>:3000/ にアクセスすると
// Hello World を表示する
const http = require('http');

// 3000番ポートで待ち受け．リクエストイベントが発生したらメッセージを表示する
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3000);

// 起動ログの表示
console.log('Server running at http://127.0.0.1:3000/');
