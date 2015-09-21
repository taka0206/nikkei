###
  配列
###
# 配列の宣言
music = ["C", "D", "E", "G", "F", "A", "H"]
# 配列への格納
music[6] = "B"
# 改行して宣言
bitlist = [
  1, 0, 1
  0, 0, 1
  1, 1, 0
]
# Rangeで配列宣言。ここでは、1～10の値の配列が作成できている
numAry = [1..10]

# 連想配列の宣言
yamada = {name: "yoshihiro", age: 27}
# 個別に格納
yasunishi = []
yasunishi["name"] = "tsuyoshi"
yasunishi["age"] = 3
# YAML形式で宣言
members =
  yamada:
    name: "yoshihiro"
    age:  28
  yasunishi:
    name: "tsuyoshi"
    age:  3