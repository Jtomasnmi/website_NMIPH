<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/emailhostdetail.php";
   require_once "../helpers/emailsenderhelper.php";
   


   $EmailHostDetail = new EmailHostDetail();
   $EmailSenderHelper = new EmailSenderHelper();

   $value   = $_GET['requestData'];
   $result  =  $EmailHostDetail->GetCompanyHostname();

   $dataArr = array_merge(...$result, ...$value);


   $host        = $dataArr['Host'];
   $password    = $dataArr['Password'];
   $port        = $dataArr['Port'];
   $reciever    = $dataArr['EmailAddress'];
   $mailerEmail = $dataArr['Username'];
   $firstname   = $dataArr['FirstName'];
   $lastname    = $dataArr['LastName'];

   $res = $EmailSenderHelper->SendEmail($host,$password,$port,$reciever,$mailerEmail,$firstname,$lastname);

?>

