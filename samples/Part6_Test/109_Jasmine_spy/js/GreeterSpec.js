/// <reference path="jasmine.js"/>
/// <reference path="Greeter.js"/>

describe("Spyを使用したテスト", function () {
  var greeter;

  beforeEach(function () {
    greeter = new Greeter();
  });

  // (1) Spyオブジェクトを作成する
  it("Spyオブジェクトを作成する", function () {
    var spyObject = spyOn(greeter, "makeGreeting");

    expect(spyObject).toBe(greeter.makeGreeting);
    expect(greeter.makeGreeting(5, "Sho")).toEqual(undefined);
  });

  // (2) 元の処理を行う
  it("元の処理を行う", function () {
    spyOn(greeter, "makeGreeting").andCallThrough();

    expect(greeter.makeGreeting(5, "Sho")).toEqual("Good morning, Sho");
  });

  // (3) 任意の戻り値を返す
  it("任意の戻り値を返す", function () {
    spyOn(greeter, "getNowHours").andReturn(5);

    expect(greeter.getNowHours()).toEqual(5);
  });

  // (4) 任意の処理を行う
  it("任意の処理を行う", function () {
    var called = false;
    spyOn(greeter, "makeGreeting").andCallFake(function (hour, name) {
      called = true;
      expect(hour).toEqual(5);
      expect(name).toEqual("Sho");
      return "Greeting";
    });

    expect(greeter.makeGreeting(5, "Sho")).toEqual("Greeting");
    expect(called).toEqual(true);
  });

  // (5) 例外を発生させる
  it("例外を発生させる", function () {
    spyOn(greeter, "getNowHours").andThrow("例外");

    expect(greeter.getNowHours).toThrow("例外");
  });

  // (6) メソッド呼び出しを検証する
  it("メソッド呼び出しを検証する", function () {
    spyOn(greeter, "getNowHours").andReturn(5);
    spyOn(greeter, "makeGreeting").andCallThrough();

    expect(greeter.greet("Sho")).toEqual("Good morning, Sho");

    // 引数なしのメソッド呼び出しを検証する
    expect(greeter.getNowHours).toHaveBeenCalled();
    // 引数ありのメソッド呼び出しを検証する
    expect(greeter.makeGreeting).toHaveBeenCalledWith(5, "Sho");
    // 任意の引数でのメソッド呼び出しを検証する
    expect(greeter.makeGreeting).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(String));
  });
});
