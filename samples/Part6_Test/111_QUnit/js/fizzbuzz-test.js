/// <reference path="qunit-1.10.0.js" />
var fizzBuzz;

// (1) テストのグルーピング
module("FizzBuzzの正常テスト", {
  // (2) セットアップ
  setup: function () {
    fizzBuzz = new FizzBuzz();
  }
});

// (3) テストケース定義
test("数字を返す", function () {
  // (4) 検証
  ok(fizzBuzz.speak(1) === "1", "speak 1");
  ok(fizzBuzz.speak(2) === "2", "speak 2");
});

test("3の倍数でFizzを返す", function () {
  ok(fizzBuzz.speak(3) === "Fizz", "speak Fizz by 3");
  ok(fizzBuzz.speak(6) === "Fizz", "speak Fizz by 6");
});

test("5の倍数でBuzzを返す", function () {
  ok(fizzBuzz.speak(5) === "Buzz", "speak Buzz by 5");
  ok(fizzBuzz.speak(10) === "Buzz", "speak Buzz by 10");
});

test("3の倍数かつ5の倍数でFizzBuzzを返す", function () {
  ok(fizzBuzz.speak(15) === "FizzBuzz", "speak FizzBuzz by 15");
  ok(fizzBuzz.speak(30) === "FizzBuzz", "speak FizzBuzz by 30");
});

module("FizzBuzzの異常テスト", {
  setup: function () {
    fizzBuzz = new FizzBuzz();
  }
});

test("引数指定なしで例外発生", function () {
  // (5) 例外検証
  throws(function () { fizzBuzz.speak(null); },
    ArgumentNullException, "argument required by null");
});
