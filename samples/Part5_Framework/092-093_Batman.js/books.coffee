class Books extends Batman.App
  # 初期表示時のアクセス先。ここでは、booksコントローラーのindexメソッドにアクセスする
  @root 'books#index'
  
# オブジェクトをグローバル変数として使用する
window.Books = Books