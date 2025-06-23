let initPageHelper = (function () {
  const init = () => {
    loadEvent();
  };

  const loadEvent = () => {
    K365Card();
    addColor();
    K365BannerCard();
    SolutionsBanner();
    WhyKaseyaCard();
    WhatHappenNextCard();
    SelectProductOption();
    OptionalSelect();
    AppendImgSrc();
    AppendSolutionTypeCard();
  };

  const K365Card = () => {
    $(function () {
      let dataCard = constant.K365OnboardingCard.map(
        ({ title, desc, pro, qck }, i) => {
          return _compFunc.k365Card(title, desc, pro, qck);
        }
      );
      $("#card-k365").append(dataCard);
    });
  };

  const addColor = () => {
    $(function () {
      constant.HrSolutionColor.map((sol, i) => {
        let txtClass = sol.id.replace("#", ".").replace("-sol", "-txt");
        $(sol.id).css("background-color", sol.color);
        $(txtClass).css("color", sol.color);
      });
    });
  };

  const K365BannerCard = () => {
    $.each(constant.K365EndpointUserBanner, function (index, value) {
      let packageSelector = value.targetModal.concat(index);
      const cardData = _compFunc.k365BannerCard(
        index + 1,
        packageSelector,
        value.logo,
        value.desc,
        value.btnLabel,
        value.targetModal
      );
      $("#kaseya365").append(cardData);
    });
  };

  const SolutionsBanner = () => {
    $(function () {
      $.each(constant.SolutionsBanner, function (index, value) {
        let solBanner = _compFunc.solutionsBanner(
          value.description,
          value.targetModal,
          value.label
        );

        $("#banner-solution-selector").append(solBanner);
      });
    });
  };

  const WhyKaseyaCard = () => {
    $(window).on("load", function () {
      $.each(constant.WhyKaseyaContent, function (index, value) {
        let whyKaseya = _compFunc.getDemoCard(
          value.icon,
          value.title,
          value.description
        );

        $("#why-kaseya-selector").append(whyKaseya);
      });
    });
  };
  const WhatHappenNextCard = () => {
    $(window).on("load", function () {
      $.each(constant.WhatHappenNextContent, function (index, value) {
        let whatnext = _compFunc.getDemoCard(
          value.icon,
          value.title,
          value.description
        );

        $("#what-next-selector").append(whatnext);
      });
    });
  };

  const SelectProductOption = () => {
    $(window).on("load", function () {
      let selectComponent = _compFunc.selectOption(
        "",
        constant.RequiredProductLabel.selectId,
        constant.RequiredProductLabel.label
      );
      $("#".concat(constant.RequiredProductLabel.id)).append(selectComponent);
    });
  };

  async function OptionalSelect() {
    $(window).on("load", function () {
      NMICore.AppendDataElement.AppendOnChange(
        constant.RequiredProductLabel.selectId
      );
    });
  }

  async function AppendImgSrc() {
    $(window).on("load", function () {
      $.each(constant.CertificateSrc, function (i, value) {
        let imgElement = _compFunc.imgElement(
          value.path,
          value.name,
          value.class
        );

        $("#certificates-selector").append(imgElement);
      });
    });
  }

  async function AppendSolutionTypeCard() {
    $(window).on("load", function () {
      $.each(constant.SolutionsBanner, function (i, value) {
        $.each(value.types, function (i, data) {
          let _solutionType = _compFunc.SolutionTypeCard(
            data.title,
            data.content,
            data.icon
          );
          $(value.targetModal.concat(" #solutions-container")).append(
            _solutionType
          );
        });
      });
    });
  }

  return {
    init: init,
  };
})();
