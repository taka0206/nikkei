/// <reference path="jasmine.js"/>
/// <reference path="jasmine-html.js"/>
/// <reference path="fizzBuzz.js"/>

// (1) テストストーリーの定義
describe("FizzBuzzの正常テスト", function () {
  var fizzBuzz;

  // (4) それぞれのテストケースが実行される前に行う処理を記載
  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  // (2) テストケースの定義
  it("数字を返す", function () {
    // (3) 値の検証
    expect(fizzBuzz.speak(1)).toEqual("1");
    expect(fizzBuzz.speak(2)).toEqual("2");
  });

  it("3の倍数でFizzを返す", function () {
    expect(fizzBuzz.speak(3)).toEqual("Fizz");
    expect(fizzBuzz.speak(6)).toEqual("Fizz");
  });

  it("5の倍数でBuzzを返す", function () {
    expect(fizzBuzz.speak(5)).toEqual("Buzz");
    expect(fizzBuzz.speak(10)).toEqual("Buzz");
  });

  it("3の倍数かつ5の倍数でFizzBuzzを返す", function () {
    expect(fizzBuzz.speak(15)).toEqual("FizzBuzz");
    expect(fizzBuzz.speak(30)).toEqual("FizzBuzz");
  });
});

describe("FizzBuzzの異常テスト", function () {
  var fizzBuzz;

  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  it("引数指定なしで例外発生", function () {
    // 例外の検証
    expect(function () { fizzBuzz.speak(null); })
      .toThrow(new ArgumentNullException());
  });
});