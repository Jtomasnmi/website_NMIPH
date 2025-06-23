<?php

    class CoreValues{
        private $db_conn;
        private $core_values_table;
        private $icon_table;

        public function __construct(){
            $this->db_conn = new DBConnection();
            $this->core_values_table = "companycorevaluesdetail";
            $this->icon_table = "companyicondetail";
        }

        public function GetCoreValues(){
            $query = "SELECT 
                            Value  cvIcon
                            ,Title cvTitle
                            ,Description cvDescription
                        FROM $this->icon_table CID 
                        INNER JOIN $this->core_values_table CVD ON CID.EntityFkId = CVD.CoreValuesDetailId
                        WHERE 
                            CID.Page=1 
                                AND 
                            CID.Type= 'icon'
                        ORDER BY CVD.Arrangement
                        ";

            $result = $this->db_conn->RunBaseQuery($query);
            return $result;
        }
    }
?>