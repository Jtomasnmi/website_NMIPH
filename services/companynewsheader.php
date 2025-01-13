<?php
    class CompanyNewsHeader
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "CompanyNewsHeader";
        }

        public function GetCompanyNewsHeader(){
            $query = "SELECT 
                         Title NHTitle
                        ,SubTitle NHSubTitle
                        ,Description NHDescription
                        ,SubDescription NHSubDescription 
                      FROM $this->table";
                      
            $result = $this->db_conn->RunBaseQuery($query);
            return $result;
        }
    }   
?>