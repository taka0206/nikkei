var Greeter = (function () {
  function Greeter() { }

  // 現在の時間を返す
  Greeter.prototype.getNowHours = function () {
    return new Date().getHours();
  };

  // 名前と時間からあいさつ文を作る
  Greeter.prototype.makeGreeting = function (hours, name) {
    var greeting;
    if (4 < hours && hours < 12) {
      greeting = "Good morning";
    } else if (12 <= hours && hours < 18) {
      greeting = "Hello";
    } else {
      greeting = "Good evening";
    }
    return greeting + ", " + name;
  };

  // 名前と現在の時間からあいさつを返す
  Greeter.prototype.greet = function (name) {
    var hours = this.getNowHours();
    return this.makeGreeting(hours, name);
  };

  return Greeter;
})();