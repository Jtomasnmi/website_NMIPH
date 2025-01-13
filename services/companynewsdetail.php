<?php
    class CompanyNewsDetail
    {
        private $db_conn;
	    private $table;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->table = "CompanyNewsDetail";
        }

        public function GetCompanyNewsDetail(){
            $query = "SELECT
                         MAX(CASE
                                WHEN Type = 'TrainingAndCertifications' THEN Title END
                            ) TTrainingAndCert
                        ,MAX(CASE
                                WHEN Type = 'EventsAndEngagements' THEN Title END
                            ) TEventsAndEngag
                        ,MAX(CASE
                                WHEN Type = 'CompanyCulture' THEN Title END
                            ) TCompanyCult
                        ,MAX(CASE
                                WHEN Type = 'CommitmentToSecurity' THEN Title END
                            ) TCommitmentToSec
                        ,MAX(CASE
                                WHEN Type = 'TrainingAndCertifications' THEN Description END
                            ) AS DTrainingAndCert
                        ,MAX(CASE
                                WHEN Type = 'EventsAndEngagements' THEN Description END
                            ) DEventsAndEngag
                        ,MAX(CASE
                                WHEN Type = 'CompanyCulture' THEN Description END
                            ) DCompanyCult
                        ,MAX(CASE
                                WHEN Type = 'CommitmentToSecurity' THEN Description END
                            ) DCommitmentToSec
                    FROM $this->table
                    GROUP BY CompanyNewsHeaderId";
                      
            $result = $this->db_conn->RunBaseQuery($query);
            return $result;
        }
    }   
?>