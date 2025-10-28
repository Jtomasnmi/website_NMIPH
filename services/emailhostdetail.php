<?php

    class EmailHostDetail
    {

        private $table_hostname;
        private $table_emailbody;
        private $db_conn;


        public function __construct(){
            $this->db_conn = new DBConnection();
            $this->table_hostname = "companyhostname";
            $this->table_emailbody = "emailtemplate";
        }

        public function GetCompanyHostname(){
            $query = "SELECT * FROM $this->table_hostname";
            $result = $this->db_conn->RunBaseQuery($query);

            return $result;
        }

        public function GetEmailbody($type, $toreplacestr) {
            $query = "SELECT Template FROM $this->table_emailbody WHERE Type='" . addslashes($type) . "'";
            $result = $this->db_conn->RunBaseQuery($query);

            // since result is in array format
            $template = $result[0]['Template'];

            // replace all placeholder from email template
            foreach ($toreplacestr as $replace) {
                $template = str_replace($replace['toReplace'], $replace['newValue'], $template);
            }

            return $template;
        }


    }
?>