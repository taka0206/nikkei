/// <reference path="http://code.jquery.com/jquery-1.9.0.js"/>
/// <reference path="snbinder-0.5.3.js"/>

// (1) シンプルなバインド
function bindSimple(name) {
  // テンプレートを定義
  var template = "<p>Hello $(.name)!</p>";
  // バインドするオブジェクト定義
  var user = { "name": name };
  // テンプレートにオブジェクトをバインド
  $("#bind-simple").html(SNBinder.bind(template, user));
}

// (2) 事前コンパイルによるバインド
function bindByCompiled(name) {
  // テンプレートを定義
  var template = "<p><b>$(.greeting) $(.name)!</b></p>";
  // バインド動作を事前コンパイル
  var apply_template = SNBinder.compile(template);
  // 事前コンパイル済のファンクションを使ってバインド
  $("#bind-by-compiled").html(
    apply_template({ "greeting": "Good morning", "name": name })
    + apply_template({ "greeting": "Hello", "name": name })
  );
}

// (3) 配列のバインド
function bindFromArray(name) {
  // テンプレートを定義
  var template = "<li>$(.greeting) $(.name)!</li>";
  // バインドする配列を定義
  var tuples = [
    { "greeting": "Good morning", "name": name },
    { "greeting": "Hello", "name": name },
    { "greeting": "Good evening", "name": name }
  ];
  // テンプレートに配列をバインド
  $("#bind-from-array").html("<ul>"
    + SNBinder.bind_rowset(template, tuples)
    + "</ul>");
}

// (4) テンプレートをHTTP経由で取得
function bindTemplateFile(name) {
  // テンプレートの取得
  SNBinder.get("template.html", null, false,
    function (template) {
      // バインドするオブジェクト定義
      var user = { "name": name };
      // 取得したテンプレートにバインド
      $("#bind-template-file").html(SNBinder.bind(template, user));
    }
  );
}

// (5) セクション定義テンプレートをHTTP経由で取得
function bindTemplateFileWithSections(name) {
  // テンプレートの取得
  SNBinder.get_sections("templates-with-sections.html", null,
    function (templates) {
      // バインドするオブジェクト定義
      var user = { "name": name };
      // 取得したテンプレートにバインド
      $("#bind-template-file-with-sections").html("<ul>"
        + SNBinder.bind(templates[0], user)
        + SNBinder.bind(templates[1], user)
        + SNBinder.bind(templates[2], user)
        + "</ul>"
      );
    }
  );
}

// (6) 名前付きセクション定義テンプレートをHTTP経由で取得
function bindTemplateFileWithNamedSections(name) {
  // テンプレートの取得
  SNBinder.get_named_sections("templates-with-named-sections.html", null,
    function (templates) {
      // バインドするオブジェクト定義
      var user = { "name": name };
      // 取得したテンプレートにバインド
      $("#bind-template-file-with-named-sections").html("<ol>"
        + SNBinder.bind(templates.morning, user)
        + SNBinder.bind(templates.afternoon, user)
        + SNBinder.bind(templates.evening, user)
        + "</ol>"
      );
    }
  );
}

// (7) バインド対象データをHTTP経由で取得
function bindFromJsonOverHttp(name) {
  var template = "<p><i>$(.greeting) " + name + "!</i></p>";
  SNBinder.get("user.json", null, true, function (greeting) {
    $("#bind-from-json-over-http").html(SNBinder.bind(template, greeting));
  });
}
