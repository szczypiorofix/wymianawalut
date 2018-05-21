<?php

    // CRON SCRIPT

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    define('CONFIG_FILE', 'config.ini');

    require_once 'config.php';

    define('CURRENCY_API_KEY', Config::get('CURRENCY_API_KEY'));

    $c = curl_init();
    curl_setopt($c, CURLOPT_HEADER, 0);
    curl_setopt($c, CURLOPT_VERBOSE, 0);
    curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($c, CURLOPT_URL, 'https://openexchangerates.org/api/latest.json?app_id='.CURRENCY_API_KEY);
    curl_setopt($c, CURLOPT_HTTPGET, 1);
    $data = curl_exec($c);
    echo curl_error($c);
    curl_close($c);
    
    $dataFromAPI = json_decode($data);
    $base_rate = $dataFromAPI->base;

    $ratesArray = (array) $dataFromAPI->rates;

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

        // UPDATE RATES TABLE
        foreach($ratesArray as $code => $rate) {
            $stm = $db->prepare("UPDATE `rates` SET `rate`=:r WHERE `code`=:c ");
            $stm->bindParam(':r', $rate);
            $stm->bindParam(':c', $code);
            $stm->execute();
        }

        // UPDATE SETTINGS TABLE
		$stm = $db->prepare("UPDATE `settings` SET `value`=:v, `update_time`=NOW() WHERE `name`='base'");
        $stm->bindParam(':v', $base_rate, PDO::PARAM_STR);
        $stm->execute();

        echo 'Database has been successfully updated.';
	} catch (PDOException $exc) {
		echo 'Błąd PDO !!! '.$exc->getMessage();
	}