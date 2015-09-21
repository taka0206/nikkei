/// <reference path="knockout-2.2.0.js" />

// Gistのデータ用ViewModel
var GistViewModel = (function () {
  // クラス定義、コンストラクタ
  function GistViewModel(id, description, html_url) {
    // (1) フィールド定義
    // Gist ID
    this.id = ko.observable(id);
    // 説明
    this.description = ko.observable(description);
    // GistページURL
    this.html_url = ko.observable(html_url);

    // (2) 組み合わせフィールド定義 
    // Gistの情報を以下の形式で表示するためのテキスト部分
    // <a href="https://～" target="_blank">123456 : 説明</a>
    this.text = ko.computed(function () {
      return this.id() + " : " + this.description();
    }, this);
  }

  return GistViewModel;
})();
