let tabPageHelper = function(){
    let solutions = [
                      "rmm-endpoint-tab",
                      "security-tab",
                      "backup-dr-tab",
                      "audit-tab",
                      "compliance-tab",
                      "servicedesk-tab",
                      "it-documentation-tab"
                    ];

    let init = function(){
        clickTabPage();
    };

    async function clickTabPage(){   
        $("a[data-bs-target='#rmm-endpoint-modal']").click(function() {
            $('<section>', {
                id: "rmm-endpoint-tab",
                class: "tabs"
            }).appendTo("tab-selector");        
                $("#rmm-endpoint-tab").load("modals/_tabs.html");  
          
        });

        // $.each(solutions, function(index, value){
        //     $('<section>', {
        //         id: value,
        //       }).appendTo("#tab-selector");
      
        //       $("#" + value).load("modals/_tabs.html");  
        // });

      // (
      //   async() => {
      //     await GetTabModalPage();
      //   }
      // )();
    };

    // async function GetInitTabPage(){
    //   $.each(solutions, function(index, value){
    //     value = value.replace("mod","tab");

    //     $('<div>', {
    //       id: value,
    //     }).appendTo("#tab-selector");

    //     $("#" + value).load("modals/_tabs.html");  
    //     // $(window ).on("load", function() {
    //     //   $("#" + value).load("modals/_tabs.html");  
    //     // });
    //     // $("#" + value).load("modals/_" + value.replace("-mod",".html"));
    //   });

    // }

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