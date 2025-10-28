<?php
   class WebsitePage{

      private $db_conn;

      public function __construct(){
         $this->db_conn = new DBConnection();
      }

      public function RawSqlQuery($query){
         return $this->db_conn->RunBaseQuery($query);
      }

   }
?>