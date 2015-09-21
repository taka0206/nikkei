/**
 * 「/」にアクセスした際の処理
 * @param req リクエストの情報が入っているオブジェクト。GETやPOSTのパラメータなど取得可能
 * @param res レスポンスオブジェクト。クライアント側に送るHttpヘッダや、返すHTMLなどを指定可能。
 */
exports.index = function(req, res){
	// 本一覧
	var books = [{
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
	}];
	// タイトルをリクエストパラメータから取得する
	var title = req.query.title;
	// テンプレートエンジンと組み合わせHTMLを作成し、クライアントに返す
	res.render('index', { title: title, books : books});
};