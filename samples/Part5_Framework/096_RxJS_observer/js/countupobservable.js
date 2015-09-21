/// <reference path="rx-vsdoc.js"/>

// カウントアップを通知するObservableクラス定義
var CountUpObservable = (function () {
  // クラス作成
  var CountUpObservable = function () { };

  // Observerを登録するための変数
  var observers = [];

  // (1) Observer登録処理を実装したObservalbe型をプロトタイプに設定
  CountUpObservable.prototype = Rx.Observable.create(function (observer) {
    observers.push(observer);
  });

  // (2) カウントアップメソッド
  // 現在のカウント
  var current = 0;
  CountUpObservable.prototype.countup = function () {
    current++;
    // 登録したObserverに現在のカウントを通知
    observers.forEach(function (observer) {
      observer.next(current);
    });
  };

  return CountUpObservable;
})();
