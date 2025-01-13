<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/companynewsdetail.php";

   $objCompanyNewsDetail = new CompanyNewsDetail();

   $result = $objCompanyNewsDetail->GetCompanyNewsDetail();
   echo json_encode($result);
?>