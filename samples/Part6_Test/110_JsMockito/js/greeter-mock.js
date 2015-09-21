/// <reference path="qunit-1.10.0.js" />
/// <reference path="greeter.js"/>

var greeterMock;

module("モックの動作検証", {
  setup: function () {
    // (1) モックオブジェクト作成
    greeterMock = mock(Greeter);
  }
});

// (2)
test("引数の検証", function () {
  when(greeterMock).greet(anything()).then(function (name) {
    ok(name === "太郎");
  });

  greeterMock.greet("太郎");
});
