class Books.BooksController extends Batman.Controller
  routingKey : 'books'
  
  constructor: -> 
    super
    # 追加時のオブジェクトの準備
    @set 'newBook', new Books.Book()
    # データが無かったら、デフォルトで3個作成
    if Books.Book.get('all')?.length == 0
      (new Books.Book(name: "アプリを作ろう！　Android入門 ～ゼロから学ぶアプリの作成から公開まで", price: 1995)).save()
      (new Books.Book(name: "TECHNICAL MASTER　はじめてのJSP＆サーブレット　Eclipse 3.7 Indigo＋Tomcat 7対応版", price: 2730)).save()
      (new Books.Book(name: "Windows Azure Platform開発入門", price: 3990)).save()

  # ページアクセス時の処理
  index: ->
    @set 'bookList', Books.Book.get('all')

  # 本の新規登録
  createBook: ->
    @get('newBook').save (err, book) =>
      if err
        throw err unless err instanceof Batman.ErrorsSet
      else
        # 次に追加するときの準備
        @set 'newBook', new Books.Book()
  
  # 本の削除
  destroyBook: (node, event, context) ->
    book = context.get('book')
    book.destroy (err) -> throw err if err
