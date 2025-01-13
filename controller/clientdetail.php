<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/clientdetail.php";
   require_once "../helpers/globalhelper.php";

   $objClient = new ClientDetail();
   $createdatetime = GlobalHelper::GetCurrentDateTime();
   
   $firstname      = $_REQUEST['firstname'];
   $lastname       = $_REQUEST['lastname'];
   $jobdesig       = $_REQUEST['jobdesig'];
   $compname       = $_REQUEST['compname'];
   $compaddress    = $_REQUEST['compaddress'];
   $emailaddress   = $_REQUEST['emailaddress'];
   $contactno      = $_REQUEST['contactno'];
   $createdatetime = $createdatetime;

   $objClient->AddClientInformation($firstname,$lastname,$jobdesig,$compname,$compaddress,$emailaddress,$contactno,$createdatetime);
?>