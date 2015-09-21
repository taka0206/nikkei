class Books.Book extends Batman.Model
  # 保存先はローカルストレージ
  @persist Batman.LocalStorage
  
  # 保持する項目
  @encode 'name', 'price'
  
  # 項目のバリデーション。nameは必須入力。
  @validate 'name', presence: true
  # 項目のバリデーション。priceは必須入力かつ数値。
  @validate 'price', presence: true, numeric : true
  
  # ローカルストレージに保存する際のキー
  @storageKey: 'books-sample-batman'
