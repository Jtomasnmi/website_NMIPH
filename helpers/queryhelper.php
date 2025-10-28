<?php
class QueryHelper{

    public function QueryPageContent($companyName, $page, $queryType){

        switch ($queryType) {
            case 'content':
                $query = "SELECT CP.name page, PCL.content_identifier, PC.title, PC.description, PC.sub_description
                            FROM companywebsite CW
                            INNER JOIN companypage CP ON CW.id = CP.company_website_id
                            INNER JOIN pagecontentlabel PCL ON CP.id = PCL.company_page_id
                            INNER JOIN pagecontent PC ON PCL.id=PC.pagecontent_label_id
                            WHERE CW.name='" .$companyName. "' AND CP.name='" .$page."'";

                break;

            case 'file':
                $query = "SELECT CP.name page, PCL.content_identifier, PV.type, PV.path, PV.name
                            FROM companywebsite CW
                            INNER JOIN companypage CP ON CW.id = CP.company_website_id
                            INNER JOIN pagecontentlabel PCL ON CP.id = PCL.company_page_id
                            INNER JOIN pagevisualcontent PV ON PCL.id=PV.pagecontent_label_id
                            WHERE CW.name='" .$companyName. "' AND CP.name='" .$page."'";
                break;

            case 'attachment':
                $query = "SELECT CP.name page, PCL.content_identifier, PA.type, PA.path, PA.name
                            FROM companywebsite CW
                            INNER JOIN companypage CP ON CW.id = CP.company_website_id
                            INNER JOIN pagecontentlabel PCL ON CP.id = PCL.company_page_id
                            INNER JOIN pageattachmentcontent PA ON PCL.id=PA.pagecontent_label_id
                            WHERE CW.name='" .$companyName. "' AND CP.name='" .$page."'";
                break;

            case 'content_list':
                $query = "SELECT CP.name, PCL.name, PCL.content_identifier, PC.description
                            FROM companywebsite CW 
                            INNER JOIN companypage CP ON CW.id=CP.company_website_id
                            INNER JOIN pagecontentlabel PCL ON CP.id=PCL.company_page_id
                            INNER JOIN pagecontentlist PC ON PCL.id=PC.pagecontent_label_id
                            WHERE CW.name='" .$companyName. "' AND CP.name='" .$page."' ";
                break;

            case 'icon':
                $query = "SELECT CP.name page, PCL.content_identifier, PI.name class
                            FROM companywebsite CW 
                            INNER JOIN companypage CP ON CW.id=CP.company_website_id
                            INNER JOIN pagecontentlabel PCL ON CP.id=PCL.company_page_id
                            INNER JOIN pageicon PI ON PCL.id=PI.pagecontent_label_id
                            WHERE CW.name='" .$companyName. "' AND CP.name='" .$page."' ";
                break;

            case 'client_testimonial':
                $query = "SELECT CP.name, PCL.content_identifier, CT.name, CT.position, CT.company, CT.feedback
                            FROM companywebsite CW
                            INNER JOIN companypage CP ON CW.id = CP.company_website_id
                            INNER JOIN pagecontentlabel PCL ON CP.id = PCL.company_page_id
                            INNER JOIN clienttestimony CT ON PCL.id=CT.pagecontent_label_id
                            WHERE CW.name='" .$companyName. "' AND CP.name='" .$page."' ";
                break;

        }
         return $query;
      }
}
?>