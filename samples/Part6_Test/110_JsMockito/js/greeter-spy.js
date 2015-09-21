/// <reference path="qunit-1.10.0.js" />
/// <reference path="greeterSpy.js"/>

var greeterSpy;

module("スパイの動作検証", {
  setup: function () {
    // (1) スパイオブジェクトの作成
    greeterSpy = spy(new Greeter());
  }
});

// (2)
test("メソッド呼び出し検証", function () {
  greeterSpy.greet("太郎");
  greeterSpy.greet("二郎");
  greeterSpy.greet("二郎");

  // 引数を指定した呼び出し検証 
  verify(greeterSpy).greet("太郎");

  // 引数を指定した呼び出し回数検証
  verify(greeterSpy, times(1)).greet("太郎");
  verify(greeterSpy, times(2)).greet("二郎");

  // 任意の引数での呼び出し回数検証
  verify(greeterSpy, times(3)).greet(anything());

  // 呼び出されていないことの検証
  verify(greeterSpy, never()).greet("三郎");

  // QUnitのアサーションメソッドを使用しない場合に必要
  expect(0);
});

// (3)
test("戻り値の差し替え", function () {
  when(greeterSpy).getNowHours().thenReturn(5);

  ok(greeterSpy.getNowHours() === 5);
});

// (4)
test("動作を差し替えない場合", function () {
  ok(greeterSpy.makeGreeting(7, "太郎") === "Good morning, 太郎");
});
