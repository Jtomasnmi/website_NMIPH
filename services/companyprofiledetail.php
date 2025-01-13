<?php
    class CompanyProfileDetail
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "CompanyProfileDetail";
        }

        public function GetCompanyProfileDetail(){
            $query = "SELECT
                         MAX(CASE
                                WHEN Type = 'Mission' THEN Title END
                            ) AS TMission
                        ,MAX(CASE
                                WHEN Type = 'Vision' THEN Title END
                            ) TVision
                        ,MAX(CASE
                                WHEN Type = 'CoreValues' THEN Title END
                            ) TCoreValues
                        ,MAX(CASE
                                WHEN Type = 'Mission' THEN Description END
                            ) DMission
                        ,MAX(CASE
                                WHEN Type = 'Vision' THEN Description END
                            ) DVision
                        ,MAX(CASE
                                WHEN Type = 'CoreValues' THEN Description END
                            ) DCoreValues
                    FROM $this->table
                    GROUP BY CompanyProfileHeaderId";

            $result = $this->db_conn->RunBaseQuery($query);
            return $result;
        }
    }   
?>