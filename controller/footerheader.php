<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/footerheader.php";

   $objFooterHeader = new FooterHeader();

   $result = $objFooterHeader->GetFooterHeader();
   echo json_encode($result);
?>