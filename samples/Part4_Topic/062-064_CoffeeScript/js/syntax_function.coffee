###
  関数
###
# 関数の宣言
square = (x) -> x * x
# 引数が存在する関数
sum = (n, m) -> n + m
# 引数にデフォルト値がある
minus = (n = 2, m = 4) -> n - m
# 可変長の引数
sum = (nums...) -> 
  result = 0
  result += num for num in nums
  result
#　複数行の関数
multi = (n) ->
  if n < 2
    square(n, 5)
  else
    sum(n, 2)
