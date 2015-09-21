var assert = buster.assert;

// TDDで記述
buster.testCase("#fizzbuzz()", {
  "3の場合はFizzが返ってくる" : function(){
    assert.equals(fizzbuzz(3), "Fizz");
  },
  "3と5の倍数以外は、数字が返ってくる" : function(){
    refute.equals(fizzbuzz(1), "Fizz");
    refute.equals(fizzbuzz(2), "Buzz");
    refute.equals(fizzbuzz(4), "Fizz,Buzz");
  }
});

// BDDで記述
buster.spec.expose();

describe("#fizzbuzz()", function () {
  it("5の場合はBuzzが返ってくる", function () {
    assert.equals(fizzbuzz(5), "Buzz");
  });

  it("15の場合はFizz,Buzzが返ってくる", function () {
    assert.equals(fizzbuzz(15), "Fizz,Buzz");
  });
});