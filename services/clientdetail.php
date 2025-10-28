<?php
    class ClientDetail
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "clientdetail";
        }
        
        public function AddClientInformation($firstname,$lastname,$jobfunction,$compname,$joblevel,$emailaddress,$contactno,$createdatetime){
            $query = "INSERT INTO $this->table(FirstName,LastName,JobFunction,CompanyName,JobLevel,EmailAddress,ContactNo,CreateDateTime) VALUES(?,?,?,?,?,?,?,?)";                           
            $paramType = "ssssssss";
            $paramValue = array(
                $firstname,
                $lastname,
                $jobfunction,
                $compname,
                $joblevel,
                $emailaddress,
                $contactno,
                $createdatetime
            );

            $InsertId = $this->db_conn->InsertData($query,$paramType,$paramValue);

            if($InsertId){
               echo $InsertId;
            }
        }
    }
?>