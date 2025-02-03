let modalPageHelper = function(){
    let solutions = [
                      "rmm-endpoint-mod",
                      "security-mod",
                      "backup-dr-mod",
                      "audit-mod",
                      "compliance-mod",
                      "servicedesk-mod",
                      "it-documentation-mod",
                      "k365-content-mod"
                    ];

    let init = function(){
      loadEvent();
    };

    let loadEvent = function(){
      $.when(initModalPage()).done(function(){
        GetInitTabPage();
      });
        
      initModalPage();
      initPartialPage();
      initK365ChildTabAutomation();
    };

    async function initModalPage(){   
        $.each(solutions, function(index, value){
          $('<div>', {
            id: value,
          }).appendTo('#parent-selector');

          $("#" + value).load("modals/_" + value.replace("-mod",".html"));
          
        });
    };

    async function initPartialPage(){
        let value =  'k365-partial';
        $('<div>', {
          id: value,
        }).appendTo('#k365-selector');

        $("#" + value).load("partials/_" + value.replace("-partial",".html"));
    };

    async function GetInitTabPage(){
      $.each(solutions, function(index, value){       
        value = value.replace("mod","tab");
        
        $('<div>', {
          id: value,
        }).appendTo('#tab-selector');

        $("#" + value.replace("tab","mod")).find("#" + value).load("modals/_tabs.html");
        // $("#" + value).load("modals/_tabs.html");
        // $("#" + value.replace("tab","modal > ") + "#" + value).load("modals/_tabs.html");
        // (
        //   async() => {
        //     await GetInitTabPage();
        //   }
        // )();
      });
      // $(window ).on("load", function() {
      //     $("#tabs").load("modals/_tabs.html");
      //     $("#tabs2").load("modals/_tabs.html");
      // });
    };

    async function initK365ChildTabAutomation() {
        $(function() {
          let value =  '_automationEdr';

          $('<div>', {
            id: value,
          }).appendTo('#k365AutomationEDR-selector')

          $("#" + value).load("k365-automation-tabs/" + value + ".html");
        });
    }

    // async function GetTabModalPage(){
    //   $(window ).on("load", function() {
    //     $("#tabs").load("modals/_tabs.html");  
    //     $("#tabs2").load("modals/_tabs.html");  
    //   });
    // }

    return{
        init: init
    };
}();