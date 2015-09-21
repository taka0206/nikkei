/// <reference path="qunit-1.10.0.js" />
/// <reference path="greeterStub.js"/>

var greeterStub;

module("スタブの動作検証", {
  setup: function () {
    // (1) スタブオブジェクト作成
    greeterStub = mock(Greeter);
  }
});

// (2)
test("戻り値の差し替え", function () {
  when(greeterStub).getNowHours().thenReturn(5);

  ok(greeterStub.getNowHours() === 5);
});

// (3)
test("例外発生に差し替え", function () {
  when(greeterStub).makeGreeting(anything(), anything()).thenThrow("Error");

  throws(
    function () { greeterStub.makeGreeting(5, "Sho"); },
    function (error) {
      // エラーメッセージの検証
      return error === "Error";
    }
  );
});

// (4)
test("処理の差し替え", function () {
  when(greeterStub).greet(anything()).then(function (name) {
    return "Hi, " + name;
  });

  ok(greeterStub.greet("Sho") === "Hi, Sho");
});

// (5)
test("引数を指定した動作変更", function () {
  when(greeterStub).greet("太郎").thenReturn("太郎の場合");
  when(greeterStub).greet("二郎").thenReturn("二郎の場合");

  ok(greeterStub.greet("太郎") === "太郎の場合");
  ok(greeterStub.greet("二郎") === "二郎の場合");
});

// (6)
test("未定義のスタブの戻り値はundefined", function () {
  ok(greeterStub.getNowHours() === undefined);
});
