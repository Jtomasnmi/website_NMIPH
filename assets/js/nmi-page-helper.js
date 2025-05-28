let modalPageHelper = (function () {
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
    addSelectOption();
    appendColorKaseyaBanner();
    // createCircle();
    AddTitleLineStyle();
    AddKaseyaPackage();
    appendKaseya365HrCard();
  };

  let clickEvent = function () {
    click365AutomationTab();
  };

  async function initModalPage() {
    $.each(constant.Solutions, function (i, value) {
      $("<div>", {
        id: value,
      }).appendTo("#parent-selector");

      $("#" + value).load("modals/_" + value.replace("-mod", ".html"));
    });
  }

  async function loadFooterModal() {
    $.each(constant.FooterInformation, function (i, info) {
      $("<div>")
        .appendTo("#modal-container")
        .load("modals/footer-modal/_" + info + ".html");
    });
  }

  async function GetInitTabPage() {
    $.each(constant.Solutions, function (i, value) {
      value = value.replace("mod", "tab");

      $("#" + value.replace("tab", "mod"))
        .find("#" + value)
        .load("modals/_tabs.html");
    });
  }

  async function loadK365ChildTabAutomation() {
    $(window).on("load", function () {
      constant.AutomationProp.map(({ id, _ }, i) => {
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
      $.each(constant.AutomationProp, function (i, value) {
        $("#" + value.tab).click(function () {
          let active = constant.AutomationProp.find(({ id, _ }, i) => {
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
      $.each(svgSrc.SvgAssets, function (i, value) {
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
      $.each(constant.K365EndpointUserBanner, function (i, value) {
        $(
          "#kaseya365 #".concat(value.logoSelector).concat(" figure svg g")
        ).attr("fill", "#f6f6f6");
      });
    });
  };

  async function addSelectOption() {
    $(window).on("load", function () {
      const primaryProduct = constant.GetDemoSolution.filter(
        (item, i) => item.isParent
      );

      NMICore.AppendDataElement.AddSelectOption(
        constant.RequiredProductLabel.selectId,
        primaryProduct
      );
    });
  }

  async function AddTitleLineStyle() {
    $(window).on("load", function () {
      $(".section-title").append(
        $('<hr class="hr-main hr-blue">').css("width", "17rem")
      );
    });
  }

  async function AddKaseyaPackage() {
    $(window).on("load", function () {
      $.each(constant.K365EndpointUserBanner, function (i, value) {
        let packageSelector = value.targetModal.concat(i);
        $.each(value.packages, function (i, package) {
          $("#".concat(packageSelector)).append("<p>" + package + "</p>");
        });
      });
    });
  }

  async function appendKaseya365HrCard() {
    $(window).on("load", function () {
      $.each(constant.K365EndpointUserBanner, function (i) {
        if (i + 1 < $(constant.K365EndpointUserBanner).length) {
          $("#".concat(i + 1)).append(
            '<hr class="hr-main hr-vertical hr-orange">'
          );
        }
      });
    });
  }

  return {
    init: init,
  };
})();
