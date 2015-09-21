<?php
// fgetcsvのための文字コード指定
setlocale(LC_ALL, 'ja_JP.Shift_JIS');

$tmp = array();
// 27OSAKA.CSVを読み込み、必要なデータのみ抽出する
if (($handle = fopen("27OSAKA.CSV", "r")) !== FALSE) {
  while (($data = fgetcsv($handle, 500, ",")) !== FALSE) {
    $tmp[] = $data[2].':'
      .mb_convert_encoding($data[7], 'utf8', 'sjis-win')
      .mb_convert_encoding($data[8], 'utf8', 'sjis-win'); 
  }
  fclose($handle);
}
// 文字列配列をJSON形式に変換する
echo  json_encode($tmp);
