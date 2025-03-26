let initPageHelper = (function () {
  const init = () => {
    loadEvent();
  };

  const loadEvent = () => {
    initK365Card();
    initSolutionCard();
    initSolutionVideo();
    addColor();
    initK365BannerCard();
    initSolutionsBanner();
    initWhyKaseyaCard();
    initWhatHappenNextCard();
  };

  const initK365Card = () => {
    $(function () {
      let dataCard = constant.K365OnboardingCard.map(
        ({ title, desc, pro, qck }, i) => {
          return componentFunction.k365Card(title, desc, pro, qck);
        }
      );
      $("#card-k365").append(dataCard);
    });
  };

  const initSolutionCard = () => {
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

  const initSolutionVideo = () => {
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

  const initK365BannerCard = () => {
    $.each(constant.K365EndpointUserBanner, function (index, value) {
      const cardData = componentFunction.k365BannerCard(
        value.logoSelector,
        value.title,
        value.desc,
        value.btnLabel,
        value.targetModal
      );

      $("#kaseya365").append(cardData);
    });
  };

  const initSolutionsBanner = () => {
    $(function () {
      $.each(constant.SolutionsBanner, function (index, value) {
        let solBanner = componentFunction.solutionsBanner(
          value.img,
          value.targetModal,
          value.label
        );

        $("#banner-solution-selector").append(solBanner);
      });
    });
  };

  const initWhyKaseyaCard = () => {
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
  const initWhatHappenNextCard = () => {
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

  return {
    init: init,
  };
})();
