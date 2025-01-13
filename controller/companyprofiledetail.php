<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/companyprofiledetail.php";

   $objCompanyProfileDetail = new CompanyProfileDetail();

   $result = $objCompanyProfileDetail->GetCompanyProfileDetail();
   echo json_encode($result);
?>