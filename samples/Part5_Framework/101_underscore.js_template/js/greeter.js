/// <reference path="http://code.jquery.com/jquery-1.9.0.js"/>
/// <reference path="underscore-1.4.3.js"/>

// (1) シンプルなバインド
function simple(name) {
  // テンプレートを定義
  var compiled = _.template("<p>Hello <%= name %>!</p>");
  // バインドするオブジェクト定義
  var user = { "name": name };
  // テンプレート適用
  $("#simple").html(compiled(user));
}

// (2) テンプレート内スクリプト
function fromList(name) {
  // テンプレートを定義
  var compiled = _.template("<ul>"
    + "<% _.each(list, function(item) { %>"
    + "  <li><%= item.greeting %> <%= item.name %>!</li>"
    + "<% }); %>"
    + "</ul>");
  // バインドするリストを含むオブジェクトを定義
  var source = {
    list: [
      { "greeting": "Good morning", "name": name },
      { "greeting": "Hello", "name": name },
      { "greeting": "Good evening", "name": name }
    ]
  };
  // テンプレート適用
  $("#from-list").html(compiled(source));
}

// (3) エスケープ処理
function withEscape(name) {
  // テンプレートを定義
  var compiled = _.template("<p><b>Hello <%- name %>!</b></p>");
  // バインドするオブジェクト定義
  var user = { "name": "<" + name + ">" };
  // テンプレート適用
  $("#with-escape").html(compiled(user));
}

// (4) print関数使用
function withPrint(name) {
  // テンプレートを定義
  var compiled = _.template("<% print('<p><i>Hello ' + name + '!</i></p>') %>");
  // バインドするオブジェクト定義
  var user = { "name": name };
  // テンプレート適用
  $("#with-print").html(compiled(user));
}

// (5) テンプレート外部定義
function outerDefinition(name) {
  // テンプレートを取得
  var template = $("#greeting-template").text();
  // テンプレートを定義
  var compiled = _.template(template);
  // バインドするオブジェクト定義
  var user = { "name": name };
  // テンプレート適用
  $("#out-def").html(compiled(user));
}
