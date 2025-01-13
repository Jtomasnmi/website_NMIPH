<?php
    class ClientDetail
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "ClientDetail";
        }
        
        public function AddClientInformation($firstname,$lastname,$jobdesig,$compname,$compaddress,$emailaddress,$contactno,$createdatetime){
            $query = "INSERT INTO $this->table(FirstName,LastName,JobDesignation,CompanyName,CompanyAddress,EmailAddress,ContactNo,CreateDateTime) VALUES(?,?,?,?,?,?,?,?)";                           
            $paramType = "ssssssss";
            $paramValue = array(
                $firstname,
                $lastname,
                $jobdesig,
                $compname,
                $compaddress,
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