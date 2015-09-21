/// <reference path="http://code.jquery.com/jquery-1.9.0.js"/>
/// <reference path="underscore-1.4.3.js"/>

// (1) eachメソッド
function doEach() {
  var source = ["太郎", "二郎", "三郎"];
  _.each(source, function (x) { $("#each").append($("<li>").text(x)); });
}

// (2) mapメソッド
function doMap() {
  var source = ["太郎", "二郎", "三郎"];
  var results = _.map(source, function (x) { return "Hello " + x + "!"; });
  for (var key in results) {
    $("#map").append($("<li>").text(results[key]));
  }
}

// (3) reduceメソッド
function doReduce() {
  var source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var sum = _.reduce(source, function (x, y) { return x + y; }, 0);
  $("#reduce").text(sum);
}

// (4) filterメソッド
function doFilter() {
  var source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var results = _.filter(source, function (x) { return x % 2 == 0; });
  for (var key in results) {
    $("#filter").append($("<li>").text(results[key]));
  }
}

// (5) chainメソッド
function doChain() {
  var source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  _.chain(source)
    .filter(function (x) { return x % 2 != 0; })
    .map(function (x) { return "Odd number " + x; })
    .each(function (x) { $("#chain").append($("<li>").text(x)); });
}
