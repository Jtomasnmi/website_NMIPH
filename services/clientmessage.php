<?php
    class ClientMessage
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "ClientMessage";
        }

        public function AddClientMessage($subject,$message,$clientdetailid,$createdatetime){                
            $query = "INSERT INTO $this->table(Subject,Message,ClientDetailId,CreateDateTime) VALUES(?,?,?,?)";
            $paramType = "ssis";
            $paramValue = array(
                $subject,
                $message,
                $clientdetailid,
                $createdatetime
            );

            $InsertId = $this->db_conn->InsertData($query,$paramType,$paramValue);
            
            if($InsertId){
               echo $InsertId;
            }       
        }       
    }   
?>