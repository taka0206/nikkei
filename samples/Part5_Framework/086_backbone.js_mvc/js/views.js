/// <reference path="underscore-1.4.3.js" />
/// <reference path="backbone-0.9.9.js" />
/// <reference path="models.js" />

// (1) Gistのリスト項目用Viewクラス
var GistView = Backbone.View.extend({
  // 生成するDOMノードの種類を指定
  tagName: "li",

  // 描画処理
  render: function () {
    // Gistの情報を以下の形式で表示する
    // <a href="https://～" target="_blank">123456 : 説明</a>
    this.$el.append(
      $("<a>").attr("href", this.model.get("htmlUrl"))
        .attr("target", "_blank")
        .text(this.model.get("gistId") + " : " +
          this.model.get("description"))
      );
    return this;
  }
});

// (2) アプリケーション用Viewクラス
var AppView = Backbone.View.extend({
  // 起点となる要素を指定
  el: "#gistapp",

  // DOMイベントとメソッドの関連付け
  events: {
    // 検索ボタンのクリックイベントに検索処理を関連付ける
    "click #search": "search",
  },

  // 初期化処理
  initialize: function () {
    // 検索後、描画処理を行う
    this.model.bind("searched", this.render, this);
    // エラー発生時、エラーを表示する
    this.model.bind("error", this.showError, this);
  },

  // 描画処理
  render: function () {
    // Gistデータを元に検索結果を洗い替える
    var $gistlist = $("#gist-list");
    $gistlist.empty();
    this.model.gistList.each(function (gist) {
      // Gistデータ用Viewを使いデータを表示する
      var gistView = new GistView({ model: gist });
      $gistlist.append(gistView.render().el);
    });
  },

  // 検索処理
  search: function () {
    // userの指定値の取得、設定
    var user = $("#user").val();
    this.model.set("user", user);
    // 検索処理を行う
    this.model.search();
  },

  // エラー表示処理
  showError: function (model, error) {
    alert(error);
  }
});
