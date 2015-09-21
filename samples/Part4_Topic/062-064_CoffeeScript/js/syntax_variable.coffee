###
  変数
###
# 数値
i = 225
f = 5.23
sum = i + f + 3 * 6
# 文字列
name = "安西"
# 変数の展開
hello = "こんにちは、" + name + "さん" # 「こんにちは、安西さん」
hello = "こんにちは、#{name}さん" # 「こんにちは、安西さん」
# 複数行に渡るヒアドキュメント
html = '''
<ul>
  <li>アプリを作ろう！　Android入門 ～ゼロから学ぶアプリの作成から公開まで</li>
  <li>TECHNICAL MASTER　はじめてのJSP＆サーブレット　Eclipse 3.7 Indigo＋Tomcat 7対応版</li>
  <li>Windows Azure Platform開発入門</li>
</ul>
'''