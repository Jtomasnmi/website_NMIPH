<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/companynewsheader.php";

   $objCompanyNewsHeader = new CompanyNewsHeader();

   $result = $objCompanyNewsHeader->GetCompanyNewsHeader();
   echo json_encode($result);
?>