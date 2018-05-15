<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

define('CONFIG_FILE', 'config.ini');

require_once 'config.php';

$results = [];

$db_host = Config::get('DB_HOST');
$db_name = Config::get('DB_NAME');
$db_user = Config::get('DB_USER');
$db_pass = Config::get('DB_PASS');

try {
    $dsn = "mysql:host=$db_host;port=3306;dbname=$db_name;charset=UTF8;";
    $opt = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ];
    $db = new PDO($dsn, $db_user, $db_pass, $opt);

    $stm = $db->prepare("SELECT * FROM `rates`");
    $stm->execute();
    $data = $stm->fetchAll();

    $res = [];
    foreach($data as $d => $dx) {
        $res['data'][$dx['code']] = $dx['rate'];
    }

    $stm = $db->prepare("SELECT * FROM `settings`");
    $stm->execute();
    $baseRate = $stm->fetch();
    $res['base'] = $baseRate['value'];
    $res['update'] = $baseRate['update_time'];
} catch (PDOException $exc) {
    echo 'Błąd PDO !!! '.$exc->getMessage();
}

echo json_encode($res, JSON_UNESCAPED_UNICODE);