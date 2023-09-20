<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['tutoring_name'];
$last = $_POST['tutoring_last_name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$data = $_POST['data'];
$group = $_POST['group'];
$lesson = $_POST['lesson'];
// токен нашего бота из botFather
$token = "6203608158:AAH-5ddxWvutANoVoQzd5o6oefntJTLSrgQ";
// $chat_id = "https://api.telegram.org/bot6203608158:AAH-5ddxWvutANoVoQzd5o6oefntJTLSrgQ/getUpdates";
$chat_id = "-869389251";
$arr = array(
  'Імя користувача: ' => $name,
  'Прізвище користувача: ' => $last,
  'Телефон: ' => $phone,
  'Email:' => $email,
  'Дата занять:' => $data,
  'Клас:' => $group,
  'Предмет:' => $lesson
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
