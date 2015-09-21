<?php

$targetPath = '../uploads/';

if ( !empty($_FILES) ) {
	$tempFile = $_FILES['Filedata']['tmp_name'];
	$targetFile = dirname(__FILE__) . '/'.$targetPath. $_FILES['Filedata']['name'];
	if ( move_uploaded_file($tempFile,$targetFile) ) {
		echo  '完了';
		return;
	}
}
echo  '失敗';
