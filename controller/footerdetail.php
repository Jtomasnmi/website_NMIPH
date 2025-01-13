<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/footerdetail.php";

   $objFooterDetail = new FooterDetail();

   $result = $objFooterDetail->GetFooterDetail();
   echo json_encode($result);
?>