<?php

$name = $_POST['name']
$number = $_POST['phone']

if((isset($name)&&$name!="")&&(isset($number)&&$number!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'dmezhenskij@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка на обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$number.'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель сайт СТО Антикор\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>