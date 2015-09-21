/// <reference path="knockout-2.2.0.js" />
/// <reference path="gistviewmodel.js" />

// アプリケーションViewModel
var AppViewModel = (function () {
  // クラス定義、コンストラクタ
  function AppViewModel(model) {
    // (1) フィールド定義
    // ユーザー
    this.user = ko.observable();
    // Gistデータコレクション
    this.gists = ko.observableArray();
    // AppModel
    this.model = model;

    // (2) Modelの状態変更購読
    this.model.gists.subscribe(function (gists) {
      // Gistデータ用ViewModelコレクションを洗い替え
      var newGists = $.map(gists, function (item, index) {
        return new GistViewModel(item.id, item.description, item.html_url);
      });
      this.gists(newGists);
    }, this);
  }

  // (3) メソッド定義
  // 検索処理
  AppViewModel.prototype.search = function () {
    // 既存の検索結果をクリア
    this.gists.removeAll();

    // 入力されたユーザーを登録
    // Modelの検索処理実行
    this.model.search(this.user());
  };

  return AppViewModel;
})();
