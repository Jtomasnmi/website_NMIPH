<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/emailhostdetail.php";
   require_once "../helpers/emailsenderhelper.php";
   

   $EmailHostDetail = new EmailHostDetail();
   $EmailSenderHelper = new EmailSenderHelper();

   $requestValue   = $_GET['requestData'];
   $queryValue  =  $EmailHostDetail->GetCompanyHostname();


   $host           = $queryValue[0]['Host'];
   $password       = $queryValue[0]['Password'];
   $port           = $queryValue[0]['Port'];
   $mailerEmail    = $queryValue[0]['Username'];
   $hostname       = $queryValue[0]['HostName'];
   $toreplacestr   = $requestValue['ToReplaceStr'];
   $emailreceiver  = $requestValue['emailDetails'];

   //add object attribute from request body used for $replacedstr
   $requestValue['HostName'] = $hostname;
 
   $is_mail_sent = false;

   // loop based on how many email being sent
   for ($x=0; $x < count($emailreceiver); $x++) {
      
      $subject  = $emailreceiver[$x]['subject'];
      $reciever = $emailreceiver[$x]['email'];
      $type     = $emailreceiver[$x]['name'];
      
      
      $replacedstr  = [];
      // append new object based on required attr declare on constant
      foreach ($toreplacestr as $key) {
         $replacedstr[] = [
            "toReplace" => "[" . $key . "]",
            "newValue" => $requestValue[$key]
         ];
      }

      //call the send email helper and return true is email sent success
      $body = $EmailHostDetail->GetEmailbody($type,$replacedstr);
      $res = $EmailSenderHelper->SendEmail($host,$mailerEmail,$password,$port,$reciever,$subject,$body);
      $is_mail_sent = true;

   }

   // return response 
   echo json_encode([
      "success" => $res
   ]);
?>