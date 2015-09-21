<?php
$xmldata = simplexml_load_file('http://www.ekidata.jp/api/l/11302.xml');
$rows = array();
foreach( $xmldata->station as $st ) {
	$rows[] = $st;
}
echo json_encode($rows);
