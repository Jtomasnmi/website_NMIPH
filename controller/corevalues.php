<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/corevalues.php";


   $coreValues = new CoreValues();

   $result = $coreValues->GetCoreValues();
   echo json_encode($result);

?>