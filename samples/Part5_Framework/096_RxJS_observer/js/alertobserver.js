/// <reference path="rx-vsdoc.js "/>

// 通知された値をalertで表示するObserverクラス定義
var AlertObserver = (function () {
  var AlertObserver = function () { };

  // (1) 通知された値をalertで表示するObserver型をプロトタイプに設定
  AlertObserver.prototype = Rx.Observer.create(
    // onNext
    function (value) {
      alert(value);
    }
  );

  return AlertObserver;
})();
