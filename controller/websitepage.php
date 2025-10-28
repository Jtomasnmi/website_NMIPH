<?php
   require_once "../connection/dbconnection.php";
   require_once "../services/websitepage.php";
   require_once "../helpers/queryhelper.php";

   $page_helper = new WebsitePage();
   $query_helper = new QueryHelper();

   $pageDetailArr = $_GET['requestData'];
   $result = [];

   for ($pages=0; $pages < count($pageDetailArr); $pages++) {
    $pageName            = $pageDetailArr[$pages]['page'];
    $keyLetter           = $pageDetailArr[$pages]['keyLetter'];
    $queryContentArr     = $pageDetailArr[$pages]['queryContent'];
    $listElementTag      = $pageDetailArr[$pages]['listElementTag'];
    $listMethod          = $pageDetailArr[$pages]['listMethod'];
    
    $resultObj = new stdClass();

        for ($page=0; $page < count($queryContentArr); $page++) { 
            $initResult = $query_helper->QueryPageContent("Network Manager", $pageName, $queryContentArr[$page]);
            $pageResult = $page_helper->RawSqlQuery($initResult);

            // append new obj key
            $resultObj->{$queryContentArr[$page]} = $pageResult;
            $resultObj->page = $pageName;
            $resultObj->keyLetter = $keyLetter;
            $resultObj->listElementTag = $listElementTag;
            $resultObj->listMethod = $listMethod;
        }

    $result[] = $resultObj;

}
echo json_encode($result);
?>