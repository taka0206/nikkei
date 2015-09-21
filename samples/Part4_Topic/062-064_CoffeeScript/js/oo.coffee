###
  クラス型オブジェクト指向
###
# クラス宣言
class Member
  # 変数の宣言
  yasunishi: 'Hello'   # publicなインスタンス変数
  @yamada: 'Hello'     # publicなstatic変数
  takano = 'Hello'     # privateなstatic変数
 
  # コンストラクタ(@を付けることで引数をインスタンス変数に格納)
  constructor: (@yasunishi) ->
 
  # メンバ関数
  func: ->
    @yasunishi     # publicなインスタンス変数へアクセス
    Member.yamada  # publicなstatic変数へアクセス
    takano         # privateなstatic変数へアクセス
 
  # staticなメンバ関数
  @staticfunc: ->
    # staticな関数からstaticなプロパティへは@でアクセスできる
    @yamada

# 継承
class SubClass extends Member
  func: ->
    # スーパークラスの同名のメソッドを呼び出す
    super()