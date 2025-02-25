
let modalPageHelper = function(){
    let solutions = [
                      "rmm-endpoint-mod",
                      "security-mod",
                      "backup-dr-mod",
                      "audit-mod",
                      "compliance-mod",
                      "servicedesk-mod",
                      "it-documentation-mod",
                      "k365-content-mod",
                      "k365-user-mod"
                    ];
    let FooterInformation = [
      'privacy-policy',
      'terms-conditions',
    ]

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
      hoverTooltip();
      appendOnId();
      renderK365onBoardTbl();
      initFooterModal();
      footerNavClass();
      
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

    async function initFooterModal(){
      $.each(FooterInformation, function(index, info){
        $('<div>').appendTo('#modal-container').load("modals/footer-modal/_" + info + ".html");
      })
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
      });
    };

    async function initK365ChildTabAutomation() {
        $(window).on("load",function(){
          automationProp.map(({id, _}, i) => {
            let div = $('<div>', { id: id })
            .appendTo('#k365AutomationEDR-selector');

            i === 0 ? div.attr("hidden", false) : div.attr("hidden", true);

            $("#" + id).load("k365-automation-tabs/" + id + ".html");
          });
        });
    };

    async function click365AutomationTab(){
        $(function() {
            automationProp.map(({id, tab}, i) => {
                $('#' + tab).click(function(){
                  let active = automationProp.find(({id, _}, i) => {
                    return !$('#' + id).is(':hidden');
                  });

                  $('#' + active.id).attr('hidden', true);
                  $('#' + id).attr('hidden', false);
                }); 
            });
        });
    };

    async function hoverTooltip(){
        $(function(){
          $('.k365-banner-modals').click(function(){
            let tooltips = $('[data-bs-toggle="tooltip"]')
          return [...tooltips].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
          });
        });
    }

    async function renderK365onBoardTbl() {
      $(window).on('load', function(){
        let id = "onBoardingTbl";
        $("#" + id).load("table/_k365-onboardingtbl.html");
      });
    }

    async function appendOnId() {
      $(function(){
        $('#endpoint-k365-selector').append(svgSrc.K365Endpoint.banner);
        $('#user-k365-selector').append(svgSrc.K365User.banner);
        $('#user-circle-logo').append(svgSrc.K365User.circleLogo);
        $('#preventTab').append(svgSrc.K365User.tabSvgPrevent);
        $('#respondTab').append(svgSrc.K365User.tabSvgRespond);
        $('#recoverTab').append(svgSrc.K365User.tabSvgRecover);
        $('#preventBoxImg').append(svgSrc.K365User.preventBoxImg);
        $('#respondBoxImg').append(svgSrc.K365User.respondBoxImg);
        $('#recoverBoxImg').append(svgSrc.K365User.recoverBoxImg);
        $('#k365BlueGreen').append(svgSrc.K365User.k365BlueGreen);
        $('#k365CircleSubs').append(svgSrc.K365User.k365CircleSubs);
      });
    }

    async function footerNavClass() {
      $(function(){
        $(".footer-inf").addClass("bi bi-arrow-return-right footer-li");
      })
    }

    return{
        init: init
    };
}();