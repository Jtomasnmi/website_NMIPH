<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/companyprofileheader.php";

   $objCompanyProfileHeader = new CompanyProfileHeader();

   $result = $objCompanyProfileHeader->GetCompanyProfileHeader();
   echo json_encode($result);
?>