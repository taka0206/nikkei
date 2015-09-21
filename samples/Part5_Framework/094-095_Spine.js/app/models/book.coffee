Spine = require('spine')

class Book extends Spine.Model
  # モデルが持つデータを定義する。本は名前と価格を持つ
  @configure 'name', "price"

  # データをJSONから取得するため、Ajaxのクラスを継承する
  @extend Spine.Model.Ajax
   
  # 取得するJSONのURLを指定。このサンプルでは、ファイルはpublic/dataに作成。
  @url: "/data/books.json"
module.exports = Book