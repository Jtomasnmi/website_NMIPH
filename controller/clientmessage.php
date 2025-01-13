<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/clientmessage.php";
   require_once "../helpers/globalhelper.php";

   $objMessage = new ClientMessage();
   $createdatetime = GlobalHelper::GetCurrentDateTime();

   $subject           = $_REQUEST['subject'];
   $message           = $_REQUEST['message'];
   $clientdetailid    = $_REQUEST['clientdetailid'];
   $createdatetime    = $createdatetime;

   $objMessage->AddClientMessage($subject,$message,$clientdetailid,$createdatetime);
?>