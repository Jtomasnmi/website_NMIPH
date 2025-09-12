<?php

    class EmailHostDetail
    {

        private $table;
        private $db_conn;


        public function __construct(){
            $this->db_conn = new DBConnection();
            $this->table = "companyhostname";
        }

        public function GetCompanyHostname(){
            $query = "SELECT * FROM $this->table";
            $result = $this->db_conn->RunBaseQuery($query);

            return $result;
        }
    }
?>