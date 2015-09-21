// 引数なし例外
var ArgumentNullException = function () { };

// FizzBuzz用クラス定義
var FizzBuzz = (function () {
  // FizzBuzzクラス作成
  var FizzBuzz = function () { };

  // 指定した値に対応するFizzBuzz結果を返すメソッド
  FizzBuzz.prototype.speak = function (n) {
    // 引数が設定されていなければエラー
    if (!n) throw new ArgumentNullException();
    // 3で割り切れるときはFizz
    if (n % 3 === 0) return "Fizz";
    // 5で割り切れるときはBuzz
    if (n === 5) return "Buzz";
    // 3でも5でも割り切れるときはFizzBuzz
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    // 上記いずれでもないときは引数のまま
    return n.toString();
  };

  // 定義したクラスを返す
  return FizzBuzz;
})();
