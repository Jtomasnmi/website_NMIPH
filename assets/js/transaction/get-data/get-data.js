let getData = (function () {
  function init() {
    loadEvent();
  }

  function loadEvent() {
    $(window).on("load", function () {
      getPageData();
    });
  }

  function getPageData() {
    try {
      NMICore.Ajax.Get(constant.Url.websitepage, constant.PageContent).then(
        (data) => {
          _compInteg.DefaultPageContent(data);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return {
    init: init,
  };
})();
