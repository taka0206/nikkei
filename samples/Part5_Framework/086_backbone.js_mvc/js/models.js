/// <reference path="underscore-1.4.3.js" />
/// <reference path="backbone-0.9.9.js" />

// (1) Gistのリスト項目用Modelクラス
var Gist = Backbone.Model.extend({
  defaults: function () {
    return { gistId: "", description: "", htmlUrl: "" };
  }
});

// (2) Gistのリスト用Collectionクラス
var GistList = Backbone.Collection.extend({ model: Gist });

// (3) アプリケーション用Modelクラス
var App = Backbone.Model.extend({
  // 初期化処理
  initialize: function () {
    this.gistList = new GistList();
  },

  // 検索処理
  search: function () {
    // jQuery.ajaxを使い、指定したユーザーのpublic gistのデータを取得
    var gistapiurl = "https://api.github.com/users/" +
      this.get("user") + "/gists?callback=?";
    $.ajax({
      url: gistapiurl,
      type: "GET",
      context: this,  // successコールバック関数内のthisを設定
      dataType: "jsonp",
      success: function (response) {
        var data = response.data;
        if (data.message) {
          // 検索処理エラーあり
          // エラーイベントを発生させる
          this.trigger("error", this, data.message);
          return;
        }

        // 検索結果をGistデータリストに反映する
        // （_.each()はUnderscore.jsの機能で、項目を列挙して処理を行うメソッド）
        _.each(data, function (item) {
          this.gistList.add(new Gist({
            gistId: item.id,
            description: item.description,
            htmlUrl: item.html_url
          }));
        }, this);

        // 検索後イベントを発生させる
        this.trigger("searched");
      }
    });
  },

  // 検証処理
  validate: function (attrs) {
    if (!attrs.user) {
      return "ユーザーを入力してください";
    }
  }
});
