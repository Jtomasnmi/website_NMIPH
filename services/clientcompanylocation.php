<?php

    class ClientCompanyLocation
    {

        private $table;
        private $db_conn;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "clientcompanylocation";
        }
        

        public function AddClientCompanyLocation($clientdetailid,$country,$region,$province,$municipality,$barangay,$address){
            $query = "INSERT INTO $this->table(ClientDetailId,Country,Region,Province,Municipality,Barangay,Address) VALUES(?,?,?,?,?,?,?)";   
            $paramType = "issssss";
            $paramValue = array(
                $clientdetailid,
                $country,
                $region,
                $province,
                $municipality,
                $barangay,
                $address
            );

            $InsertId = $this->db_conn->InsertData($query, $paramType, $paramValue);

            if ($InsertId) {
                echo $InsertId;
            }
        }
    }
?>