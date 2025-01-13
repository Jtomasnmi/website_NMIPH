<?php
    class CompanyDetail
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "CompanyDetail";
        }

        public function GetCompanyDetail(){
            $query = "SELECT * FROM $this->table";
            $result = $this->db_conn->RunBaseQuery($query);
            return $result;
        }
    }
?>