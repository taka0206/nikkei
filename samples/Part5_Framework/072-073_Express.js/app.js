
/**
 * Module dependencies.
 */

// モジュールの読み込み
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// アプリケーションの設定
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

// 開発モードでのエラー動作指定
app.configure('development', function(){
  app.use(express.errorHandler());
});

// 「http://ドメイン名:3000/」でアクセスした場合に呼び出すルーティング関数
app.get('/', routes.index);

// サーバの起動
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
