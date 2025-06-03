let initPageHelper = (function () {
  const init = () => {
    loadEvent();
  };

  const loadEvent = () => {
    K365Card();
    SolutionCard();
    SolutionVideo();
    addColor();
    K365BannerCard();
    SolutionsBanner();
    WhyKaseyaCard();
    WhatHappenNextCard();
    SelectProductOption();
    OptionalSelect();
    AppendImgSrc();
  };

  const K365Card = () => {
    $(function () {
      let dataCard = constant.K365OnboardingCard.map(
        ({ title, desc, pro, qck }, i) => {
          return componentFunction.k365Card(title, desc, pro, qck);
        }
      );
      $("#card-k365").append(dataCard);
    });
  };

  const SolutionCard = () => {
    $(function () {
      constant.NmiSolution.map((solution, i) => {
        let txtSelector = solution.selector
          .replace(".", "")
          .replace("-card", "-txt");

        let cardData = solution.card.map(({ title, description }, i) => {
          return componentFunction.solutionCard(
            title,
            description,
            txtSelector
          );
        });
        $(solution.selector).append(cardData);
      });
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

  const SolutionVideo = () => {
    $(function () {
      constant.NmiSolution.map((solution, i) => {
        let txtSelector = solution.selector
          .replace(".", "")
          .replace("-card", "-txt");
        let vidSelector = solution.selector
          .replace(".", "#")
          .replace("-card", "-vid");
        let videoData = componentFunction.solutionVideo(
          solution.video.source,
          solution.video.title,
          solution.video.desc,
          txtSelector,
          solution.video.thumb
        );

        $(vidSelector).append(videoData);
      });
    });
  };

  const K365BannerCard = () => {
    $.each(constant.K365EndpointUserBanner, function (index, value) {
      let packageSelector = value.targetModal.concat(index);
      const cardData = componentFunction.k365BannerCard(
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
        let solBanner = componentFunction.solutionsBanner(
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
        let whyKaseya = componentFunction.getDemoCard(
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
        let whatnext = componentFunction.getDemoCard(
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
      let selectComponent = componentFunction.selectOption(
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
        let imgElement = componentFunction.imgElement(
          value.path,
          value.name,
          value.class
        );

        $("#certificates-selector").append(imgElement);
      });
    });
  }

  return {
    init: init,
  };
})();
