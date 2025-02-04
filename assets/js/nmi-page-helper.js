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

    let automationProp = [
      {
        id: "_automationEdr",
        tab: "pills-edr-tab",
      },
      {
        id: "_automationEvents",
        tab: "pills-events-tab",
      },
      {
        id: "_automationPolicy",
        tab: "pills-policy-tab",
      },
      {
        id: "_automationPatching",
        tab: "pills-patching-tab",
      },
      {
        id: "_automationBackIns",
        tab: "pills-backIns-tab",
      },
      {
        id: "_automationRocketcyber",
        tab: "pills-rocketCyber-tab",
      },
      {
        id: "_automationHealthStatus",
        tab: "pills-healthStatus-tab",
      },
    ]

    let init = function(){
      loadEvent();
      clickEvent();
    };
  
    let loadEvent = function(){
      $.when(initModalPage()).done(function(){
        GetInitTabPage();
      });
        
      initPartialPage();
      initK365ChildTabAutomation();
    };
  
    let clickEvent = function(){
      click365AutomationTab();
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
        $(window).on("load",function(){
          
          automationProp.map(({id, _}, i) => {
            let div = $('<div>', {
                          id: id,
                        }).appendTo('#k365AutomationEDR-selector');

            if (i === 0) 
              div.attr("hidden", false);
            else 
              div.attr("hidden", true);
            
            $("#" + id).load("k365-automation-tabs/" + id + ".html");
          });
        });
    };

    async function click365AutomationTab(){
        $(function() {
            automationProp.map(({id, tab}, i) => {
                $('#' + tab).click(function(){
                  let active = automationProp.find(
                  ({id, _}, i) => {
                    return !$('#' + id).is(':hidden');
                  });

                  $('#' + active.id).attr('hidden', true);
                  $('#' + id).attr('hidden', false);
                });
            });
        });
    };

    return{
        init: init
    };
}();