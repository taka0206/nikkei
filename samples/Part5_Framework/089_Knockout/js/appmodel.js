/// <reference path="knockout-2.2.0.js" />

// (1) アプリケーションModel定義
var AppModel = (function () {
  // クラス宣言、コンストラクタ
  function AppModel() {
    // (2) フィールド定義
    // Gistデータコレクション
    this.gists = ko.observableArray();
  }

  // (3) メソッド定義
  // 検索処理
  AppModel.prototype.search = function (user) {
    // jQuery.ajaxを使い、指定したユーザーのpublic gistのデータを取得
    var gistapiurl = "https://api.github.com/users/" +
      user + "/gists?callback=?";
    $.ajax({
      url: gistapiurl,
      type: "GET",
      context: this,  // successコールバック関数内のthisを設定
      dataType: "jsonp",
      success: function (response) {
        var data = response.data;
        if (data.message) return; // エラーがあったら中断
        this.gists(data);
      }
    });
  };

  return AppModel;
})();
