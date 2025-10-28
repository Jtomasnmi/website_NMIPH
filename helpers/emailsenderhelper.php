<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once '../vendor/autoload.php';

class EmailSenderHelper{

    public $mail;
    public $isSent;

    public function __construct(){

        $this->mail = new PHPMailer(true);
        $this->isSent = false;
    }

    public function SendEmail($host,$mailerEmail,$password,$port,$reciever,$subject,$body){

        try{

            // Server settings
            // $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $this->mail->SMTPDebug = 0;
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
            $this->mail->Subject = $subject;
            $this->mail->Body    = $body ;

            $this->mail->send();

            $this->isSent = true;

        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";   
        }

        $this->mail->clearAddresses();
        $this->mail->clearAttachments();

        return $this->isSent;
    }


}
?>
