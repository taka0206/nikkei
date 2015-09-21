/// <reference path="http://code.jquery.com/jquery-1.8.2.js"/>
/// <reference path="rx.js"/>
/// <reference path="rx.jquery.js"/>

// (1) 身長、体重の変更イベントを元に、入力された値を返すObservableに変換する
var height = $("#height").changeAsObservable()
  .select(function (x) { return x.target.value; });
var weight = $("#weight").changeAsObservable()
  .select(function (x) { return x.target.value; });

// (2) 身長、体重のどちらかが変更されたら、身長、体重の値の組を返す
var bodyspec = height.combineLatest(weight, function (ht, wt) {
  return { height_cm: ht, weight_kg: wt };
});

// (3) 身長、体重の変化を元にBMIを計算して表示する
bodyspec.subscribe(function (x) {
  // 身長、体重からBMIを計算する
  var height_m = x.height_cm * 0.01;
  var bmi = x.weight_kg / (height_m * height_m);
  // 小数点以下第2位で四捨五入する
  var bmi_rounded = Math.round(bmi * 100) / 100;
  // BMIを表示する
  $("#bmi").text(bmi_rounded);
});
