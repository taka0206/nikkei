<?php
$output = array(
    "books"=> array(
        array("name" => "アプリを作ろう！　Android入門 ～ゼロから学ぶアプリの作成から公開まで","price"=> 1995),
        array("name" => "TECHNICAL MASTER　はじめてのJSP＆サーブレット　Eclipse 3.7 Indigo＋Tomcat 7対応版","price"=> 2730),
        array("name" => "Windows Azure Platform開発入門","price"=> 3990)
    ),
);
header( 'Content-Type: text/javascript; charset=utf-8' );
echo $_GET['callback'] . "(" . json_encode($output). ")";
