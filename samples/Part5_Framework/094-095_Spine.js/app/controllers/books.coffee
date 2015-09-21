Spine = require('spine')
Book  = require('models/book')

class Books extends Spine.Controller
  constructor: ->
    super
    # URLが/listで、表示された時点でデータを取得する
    @routes
      '/list': ->
        @getBookList()
  
  # 本の一覧を取得し、描画する
  getBookList: ->
    Book.fetch()
    # データが取得された時の処理
    Book.bind "refresh", (data) =>
      # 取得した本のデータをitemsに設定
      @items = data[0]
      # 本の一覧を描画する
      @render()
  
  # 本の一覧を描画する
  render: ->
    @html require('views/books')(@items)

module.exports = Books