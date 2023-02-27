<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "stajectgamer@gmail.com"; // замените на свой адрес электронной почты
  $subject = "Сообщение поддержки";
  $name = strip_tags($_POST["name"]);
  $email = strip_tags($_POST["email"]);
  $message = strip_tags($_POST["message"]);
  $headers = "From: $name <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  mail($to, $subject, $message, $headers);

  header("Location: thank-you.html"); // замените на страницу благодарности на своем сайте
  exit;
}
?>