TestCase('FizzBuzzTest', {
  // テスト前の初期処理
  setUp: function() {
  },
  'test 3の場合はFizzが返ってくる': function() {
    assertEquals(fizzbuzz(3), "Fizz");
  },
  'test 3と5の倍数以外は、数字が返ってくる': function() {
    assertEquals(fizzbuzz(1), 1);
  },
  'test 5の場合はBuzzが返ってくる': function() {
    assertEquals(fizzbuzz(5), "Buzz");
  },
  'test 15の場合はFizz,Buzzが返ってくる': function() {
    assertEquals(fizzbuzz(15), "Fizz,Buzz");
  }
});

