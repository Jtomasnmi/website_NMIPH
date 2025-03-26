let modalPageHelper = (function () {
  let FooterInformation = ["privacy-policy", "terms-conditions"];

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
  ];

  let svgAssets = [
    {
      id: "#endpoint-k365-selector",
      svg: svgSrc.K365Endpoint.banner,
    },
    {
      id: "#user-k365-selector",
      svg: svgSrc.K365User.banner,
    },
    {
      id: "#user-circle-logo",
      svg: svgSrc.K365User.circleLogo,
    },
    {
      id: "#preventTab",
      svg: svgSrc.K365User.tabSvgPrevent,
    },
    {
      id: "#respondTab",
      svg: svgSrc.K365User.tabSvgRespond,
    },
    {
      id: "#recoverTab",
      svg: svgSrc.K365User.tabSvgRecover,
    },
    {
      id: "#preventBoxImg",
      svg: svgSrc.K365User.preventBoxImg,
    },
    {
      id: "#respondBoxImg",
      svg: svgSrc.K365User.respondBoxImg,
    },
    {
      id: "#recoverBoxImg",
      svg: svgSrc.K365User.recoverBoxImg,
    },
    {
      id: "#k365BlueGreen",
      svg: svgSrc.K365User.k365BlueGreen,
    },
    {
      id: "#k365CircleSubs",
      svg: svgSrc.K365User.k365CircleSubs,
    },
  ];

  let init = function () {
    loadEvent();
    clickEvent();
  };

  let loadEvent = function () {
    $.when(initModalPage()).done(function () {
      GetInitTabPage();
    });

    loadK365ChildTabAutomation();
    hoverTooltip();
    appendOnId();
    loadK365onBoardTbl();
    loadFooterModal();
    footerNavClass();
    appendColorKaseyaBanner();
  };

  let clickEvent = function () {
    click365AutomationTab();
  };

  async function initModalPage() {
    $.each(constant.Solutions, function (index, value) {
      $("<div>", {
        id: value,
      }).appendTo("#parent-selector");

      $("#" + value).load("modals/_" + value.replace("-mod", ".html"));
    });
  }

  async function loadFooterModal() {
    $.each(FooterInformation, function (index, info) {
      $("<div>")
        .appendTo("#modal-container")
        .load("modals/footer-modal/_" + info + ".html");
    });
  }

  async function GetInitTabPage() {
    $.each(constant.Solutions, function (index, value) {
      value = value.replace("mod", "tab");

      $("#" + value.replace("tab", "mod"))
        .find("#" + value)
        .load("modals/_tabs.html");
    });
  }

  async function loadK365ChildTabAutomation() {
    $(window).on("load", function () {
      automationProp.map(({ id, _ }, i) => {
        let div = $("<div>", { id: id }).appendTo(
          "#k365AutomationEDR-selector"
        );

        i === 0 ? div.attr("hidden", false) : div.attr("hidden", true);

        $("#" + id).load("k365-automation-tabs/" + id + ".html");
      });
    });
  }

  function click365AutomationTab() {
    $(function () {
      $.each(automationProp, function (index, value) {
        $("#" + value.tab).click(function () {
          let active = automationProp.find(({ id, _ }, i) => {
            return !$("#" + id).is(":hidden");
          });

          $("#" + active.id).attr("hidden", true);
          $("#" + value.id).attr("hidden", false);
        });
      });
    });
  }

  async function hoverTooltip() {
    $(function () {
      $(".k365-banner-modals").click(function () {
        let tooltips = $('[data-bs-toggle="tooltip"]');
        return [...tooltips].map(
          (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
        );
      });
    });
  }

  async function loadK365onBoardTbl() {
    $(window).on("load", function () {
      let id = "onBoardingTbl";
      $("#" + id).load("table/_k365-onboardingtbl.html");
    });
  }

  async function appendOnId() {
    $(window).on("load", function () {
      $.each(svgAssets, function (index, value) {
        $(value.id).append(value.svg);
      });
    });
  }

  async function footerNavClass() {
    $(window).on("load", function () {
      $(".footer-inf").addClass("bi bi-arrow-return-right footer-li");
    });
  }

  const appendColorKaseyaBanner = () => {
    $(window).on("load", function () {
      $.each(constant.K365EndpointUserBanner, function (index, value) {
        $("#kaseya365 #".concat(value.logoSelector).concat(" figure")).css(
          "background-image",
          value.svgColor
        );
      });
    });
  };

  return {
    init: init,
  };
})();
