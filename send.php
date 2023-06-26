<?php
//Проверяем тип запроса
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Получаем параметры из js
    $name = $_POST['name'];
    $number = $_POST['number'];
    $time = $_POST['time'];

    //переменная с содержанием письма
    $content = $name . ' оставил заявку на обратный звонок ' . $time . '. Номер телефона: ' . $number;

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers = 'Content-type: text/html; charset=utf-8' . "\r\n";

    $success = mail("dmezhenskij@yandex.ru", 'Запрос на обратный звонок СТО Антикор', $content, $headers);

    if ($success){
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }
} else {
     http_response_code(403);
     echo "Данный метод запроса не поддерживается сервером";
}
?>