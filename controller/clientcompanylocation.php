<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/clientcompanylocation.php";
   require_once "../helpers/globalhelper.php";

   $objClient = new ClientCompanyLocation();
   $createdatetime = GlobalHelper::GetCurrentDateTime();
   
   $clientdetailid    = $_REQUEST['clientdetailid'];
   $country           = $_REQUEST['Country'];
   $region            = $_REQUEST['Region'];
   $province          = $_REQUEST['Province'];
   $municipality      = $_REQUEST['Municipality'];
   $barangay          = $_REQUEST['Barangay'];
   $address           = $_REQUEST['Address'];
   $createdatetime    = $createdatetime;

   $objClient->AddClientCompanyLocation($clientdetailid,$country,$region,$province,$municipality,$barangay,$address,$createdatetime);
   
?>