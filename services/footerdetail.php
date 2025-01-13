<?php
    class FooterDetail
    {
        private $db_conn;
	    private $fhtable;
        private $fdtable;
        private $cdtable;

        public function __Construct(){
            $this->db_conn = new DBConnection();
            $this->fhtable = "FooterHeader";
            $this->fdtable = "FooterDetail";
            $this->cdtable = "CompanyDetail";
        }

        public function GetFooterDetail(){
            $query = "SELECT
                        MAX(CASE
                            WHEN Type = 'Information' THEN FD.Title END
                        ) FDTitle
                      ,MAX(CASE
                            WHEN Type = 'Information' THEN FD.Description END
                        ) FDDescription
                      ,'ADDRESS' CDAddressTitle
                      ,CD.Address CDAddressDescription
                      ,'PHONE' CDContactNoTitle
                      ,CD.ContactNo CDContactNoDescription     
                     FROM $this->fdtable FD 
                        INNER JOIN $this->fhtable FH ON FD.FooterHeaderId = FH.FooterHeaderId
                        INNER JOIN $this->cdtable CD ON FH.CompanyDetailId = FH.CompanyDetailId
                     GROUP BY FD.FooterHeaderId";
                      
            $result = $this->db_conn->RunBaseQuery($query);
            return $result;
        }
    }   
?>