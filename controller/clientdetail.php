<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/clientdetail.php";
   require_once "../helpers/globalhelper.php";

   $objClient = new ClientDetail();
   $createdatetime = GlobalHelper::GetCurrentDateTime();
   
   $FirstName      = $_REQUEST['FirstName'];
   $LastName       = $_REQUEST['LastName'];
   $JobDesig       = $_REQUEST['JobDesig'];
   $JobLevel       = $_REQUEST['JobLevel'];
   $ContactNumber  = $_REQUEST['ContactNumber'];
   $CompName       = $_REQUEST['CompName'];
   $EmailAddress   = $_REQUEST['EmailAddress'];
   $createdatetime = $createdatetime;

   $objClient->AddClientInformation($FirstName,$LastName,$JobDesig,$JobLevel,$ContactNumber,$CompName,$EmailAddress,$createdatetime);
   echo $FirstName;
?>