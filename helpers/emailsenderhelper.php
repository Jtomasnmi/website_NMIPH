<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once '../vendor/autoload.php';

class EmailSenderHelper{

    public $mail;


    public function __Construct(){

        $this->mail = new PHPMailer(true);
    }

    public function SendEmail($host,$password,$port,$reciever,$mailerEmail,$firstname,$lastname){

        $client = $firstname ." ". $lastname;


        try{

            // Server settings
            $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $this->mail->isSMTP();
            $this->mail->Host       = $host;
            $this->mail->SMTPAuth   = true;
            $this->mail->Username   = $mailerEmail;
            $this->mail->Password   = $password;
            $this->mail->SMTPSecure = 'tls';
            $this->mail->Port       = $port;

            //Recipients
            $this->mail->setFrom($mailerEmail);
            $this->mail->addAddress($reciever);

            //Content
            $this->mail->isHTML(true);
            $this->mail->Subject = 'test email subject';
            $this->mail->Body    = 'Thank you contacting us: ' .$client. 'Tubo' ;

            $this->mail->send();

            echo "misig sent";

        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$e->ErrorInfo}";
        }
    }
}
?>
