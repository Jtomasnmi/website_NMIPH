<?php
    class DBConnection {
        private $HostName     = "localhost";
        private $UserName     = "root";
        private $Password     = "";
        private $DatabaseName = "networkmanagerdb";
        private $Conn = null;
        
        public function __Construct(){
            $this->Conn = $this->ConnectDB();
        }

        private function ConnectDB() {
            $Conn = mysqli_connect($this->HostName,$this->UserName,$this->Password,$this->DatabaseName);
            return $Conn;
        }

        public function RunBaseQuery($query) {
            $result = $this->Conn->query($query);

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $resultset[] = $row;
                }
            }

            return $resultset;
        }

        public function RunQuery($query, $param_type, $param_value_array) {
            $sql = $this->Conn->prepare($query);
            $this->BindQueryParams($sql, $param_type, $param_value_array);
            $sql->execute();
            $result = $sql->get_result();
            
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $resultset[] = $row;
                }
            }
            
            if(!empty($resultset)) {
                return $resultset;
            }
        }
        
        public function InsertData($query, $param_type, $param_value_array) {
            $sql = $this->Conn->prepare($query);
            $this->BindQueryParams($sql, $param_type, $param_value_array);
            $sql->execute();
            $InsertId = $sql->insert_id;

            return $InsertId;
        }

        public function UpdateData($query, $param_type, $param_value_array) {
            $sql = $this->Conn->prepare($query);
            $this->BindQueryParams($sql, $param_type, $param_value_array);
            $sql->execute();
        }

        private function BindQueryParams($sql, $param_type, $param_value_array) {
            $param_value_reference[] = & $param_type;

            for($i=0; $i<count($param_value_array); $i++) {
                $param_value_reference[] = & $param_value_array[$i];
            }

            call_user_func_array(array(
                $sql,
                'bind_param'
            ), $param_value_reference);
        }
    }
?>