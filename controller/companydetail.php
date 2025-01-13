<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/companydetail.php";

   $objCompany = new CompanyDetail();

   $result = $objCompany->GetCompanyDetail();
   echo json_encode($result);
?>