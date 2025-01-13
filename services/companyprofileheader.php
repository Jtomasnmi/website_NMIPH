<?php
    class CompanyProfileHeader
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "CompanyProfileHeader";
        }

        public function GetCompanyProfileHeader(){
            $query = "SELECT 
                         Title HTitle
                        ,Description HDescription
                      FROM $this->table";
                      
            $result = $this->db_conn->RunBaseQuery($query);
            return $result;
        }
    }   
?>