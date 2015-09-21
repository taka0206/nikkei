/// <reference path="http://code.jquery.com/jquery-1.8.2.js"/>
/// <reference path="rx.js"/>
/// <reference path="rx.jquery.js"/>

$("#search").clickAsObservable()
  .selectMany(function (e) {
    // (1) 入力したユーザーの公開Gistを検索
    var user = $("#user").val();
    var url = "https://api.github.com/users/" +
      user + "/gists?callback=?";
    return $.getAsObservable(url, null, "jsonp");
    })
  .selectMany(function (json) {
    // (2)検索結果を処理する
    var data = json.data.data;
    // エラーがあったら例外発生
    if (data.message) throw data.message;
    // 検索結果が0件はエラー
    if (data.length == 0) throw "Not Found";
    // 検索結果を平滑化
    return Rx.Observable.fromArray(data);
    })
  .subscribe(
    // (3) 検索結果一件ごとの処理を行う
    function (gist) {
      var $anchor = $("<a>")
            .attr("href", gist.html_url)
              .attr("target", "_blank")
              .text(gist.id + " : " + gist.description);
      $("<li>").append($anchor).appendTo("#gist-list");
    },
    // (4) 例外発生時の処理を行う
    function (ex) {
      alert(ex);
    });
