// モジュールの読み込み
var flatiron = require('flatiron'),
  path = require('path'),
  fs = require('fs'),
  plates = require('plates'),
  app = flatiron.app;

//設定ファイルの読み込み
app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

//httpのプラグインの使用設定
app.use(flatiron.plugins.http);

//テンプレートをファイルとして読み込む
var html = fs.readFileSync('views/index.html', 'utf-8');

//URLが「/」の場合の処理。
app.router.get('/list', function () {
  // HTMLテンプレートに流しこむ配列データ
  var data = {
    list: [
      {
      name: 'アプリを作ろう！　Android入門 ～ゼロから学ぶアプリの作成から公開まで',
      price : 1995
      },
      {
      name: 'TECHNICAL MASTER　はじめてのJSP＆サーブレット　Eclipse 3.7 Indigo＋Tomcat 7対応版',
      price : 2730
      },
      {
      name: 'Windows Azure Platform開発入門',
      price : 3990
      }
    ],
    // リクエストからタイトルを取得する
    title : this.req.query.title
  };
  // httpステータスコードとContent-Typeを指定する
  this.res.writeHead(200, { 'Content-Type': 'text/html' });
  // HTMLを作成し、レスポンスを返す
  this.res.end(plates.bind(html, data))
});

app.start(3000);
