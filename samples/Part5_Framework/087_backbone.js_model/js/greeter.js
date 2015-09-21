// (1) Model定義
var Greeter = Backbone.Model.extend({
  // 属性の既定値設定
  defaults: {
    name: "No Name"
  },
  // あいさつメソッド
  greet: function () {
    return "Hell, " + this.get("name");
  }
});
