require('lib/setup')

Spine = require('spine')
Books = require('controllers/books')

class App extends Spine.Controller
  constructor: ->
    super
    # 本のControllerのインスタンスを生成する。Controllerで表示するHTML上のエレメント（id名）を指定する。
    @book = new Books(el: $('#booklist'))
    # ルーティングを有効にする
    Spine.Route.setup()

module.exports = App
    