// アサーションモジュールであるshouldを読み込み
var should = require('should');
// テスト対象のメソッドを読み込み
var fizzbuzz = require("../js/fizzbuzz-node").fizzbuzz;

// テスト開始
describe('fizzbuzzのテストを行います（BDD）', function() {
  describe('#fizzbuzz()', function() {
    it("3の場合はFizzが返ってくる", function () {
    	should.equal("Fizz", fizzbuzz(3));
    });
    it("3と5の倍数以外は、数字が返ってくる", function () {
      fizzbuzz(1).should.not.equal("Fizz");
      fizzbuzz(2).should.not.equal("Buzz");
      fizzbuzz(4).should.not.equal("Fizz,Buzz");
    });
    it("5の場合はBuzzが返ってくる", function () {
      should.equal("Buzz", fizzbuzz(1));
    });
    it("15の場合はFizz,Buzzが返ってくる", function () {
      should.equal("Fizz,Buzz", fizzbuzz(15));
    });
  });
});
