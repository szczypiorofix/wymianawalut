<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

define('CONFIG_FILE', '../config.ini');

require_once 'config.php';

define('CURRENCY_API_KEY', Config::get('CURRENCY_API_KEY'));

$results = [];

$c = curl_init();
curl_setopt($c, CURLOPT_HEADER, 0);
curl_setopt($c, CURLOPT_VERBOSE, 0);
curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($c, CURLOPT_URL, 'https://openexchangerates.org/api/latest.json?app_id='.CURRENCY_API_KEY);
curl_setopt($c, CURLOPT_HTTPGET, 1);
$data = curl_exec($c);
echo curl_error($c);
curl_close($c);

$results['data'] = json_decode($data);
echo json_encode($results['data'], JSON_UNESCAPED_UNICODE);