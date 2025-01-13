<?php
    class FooterHeader
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "FooterHeader";
        }

        public function GetFooterHeader(){
            $query = "SELECT 
                        Description FHDescription 
                      FROM $this->table";
                      
            $result = $this->db_conn->RunBaseQuery($query);
            return $result;
        }
    }
?>