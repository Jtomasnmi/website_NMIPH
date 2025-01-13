<?php
   class GlobalHelper{
      public static function GetCurrentDateTime(){
         $createdatetime = new DateTime("now", new DateTimeZone('Asia/Manila'));
         return $createdatetime->format('Y-m-d H:i:s');
      }
   }  
?>