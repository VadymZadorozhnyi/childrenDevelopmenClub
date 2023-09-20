<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$user_name = $_POST['user_name'];
$user_sername = $_POST['user_sername'];
$user_email = $_POST['user_email'];
$user_phone = $_POST['user_phone'];
$user_name_child = $_POST['user_name_child'];
$user_sername_child = $_POST['user_sername_child'];



$mail->isSMTP();                              
$mail->Host = 'smtp.ukr.net';  															
$mail->SMTPAuth = true;                        
$mail->Username = 'JavaScriptVadym@ukr.net';   
$mail->Password = '7kqdu16vkABZlwMF';           
$mail->SMTPSecure = 'ssl';                      
$mail->Port = 465;                                 

$mail->setFrom('JavaScriptVadym@ukr.net');      
$mail->addAddress('zadorozhniyvadim3@gmail.com');                      
//$mail->addAddress('ellen@example.com');               
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  

$mail->Subject = 'Заявка із створеного сайту: "Клуб пані Вчительки"';
$mail->Body    = " " . "Ім'я відправника: " . $user_name . "<br>" .  "Прізвище відправника: " . $user_sername . "<br>" .  "Email відправника: " . $user_email . "<br>" .  "Телефон відправника: " . $user_phone . "<br>" . "Ім'я дитини відправника: " . $user_name_child . "<br>" ."Прізвище дитини відправника: " . $user_sername_child ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>
