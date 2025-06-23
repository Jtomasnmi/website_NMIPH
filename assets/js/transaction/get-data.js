// let getData = (function () {
//   let init = function () {
//     loadEvent();
//   };

//   async function loadEvent() {
//     getCompanyDetail();
//     getCompanyProfileHeader();
//     getCompanyProfileDetail();
//     getCompanyNewsHeader();
//     getCompanyNewsDetail();
//     getFooterHeader();
//     getFooterDetail();
//     getCoreValuesDetail();
//   }

//   async function getCompanyDetail() {
//     NMICore.Ajax.Get(constant.Url.companyDetail, null, null, null);
//   }

//   async function getCompanyProfileHeader() {
//     NMICore.Ajax.Get(constant.Url.companyProfileHeader, null, null, null);
//   }

//   async function getCompanyProfileDetail() {
//     NMICore.Ajax.Get(
//       constant.Url.companyProfileDetail,
//       constant.KeyChecker.dCoreValues,
//       constant.AppendElementIds.dCoreValueList,
//       constant.AppendElementTag.p
//     );
//   }

//   async function getCompanyNewsHeader() {
//     NMICore.Ajax.Get(constant.Url.companyNewsHeader, null, null, null);
//   }

//   async function getCompanyNewsDetail() {
//     NMICore.Ajax.Get(constant.Url.companyNewsDetail, null, null, null);
//   }

//   async function getFooterHeader() {
//     NMICore.Ajax.Get(constant.Url.footerHeader, null, null, null);
//   }

//   async function getFooterDetail() {
//     NMICore.Ajax.Get(
//       constant.Url.footerDetail,
//       constant.KeyChecker.fdDescription,
//       constant.AppendElementIds.fdDescriptionList,
//       null
//     );
//   }

//   async function getCoreValuesDetail() {
//     NMICore.Ajax.Get(
//       constant.Url.companycoreValuesDetail,
//       constant.KeyChecker.cvData,
//       null,
//       null
//     );
//   }

//   return {
//     init: init,
//   };
// })();
let getData = (function () {
  let init = function () {
    loadEvent();
  };

  async function loadEvent() {
    $(window).on("load", function () {
      getCompanyDetail();
      getCompanyProfileHeader();
      getCompanyProfileDetail();
      getCompanyNewsHeader();
      getCompanyNewsDetail();
      getFooterHeader();
      getFooterDetail();
      getCoreValuesDetail();
    });
  }

  async function getCompanyDetail() {
    const promise = NMICore.Ajax.Get(constant.Url.companyDetail);
    promise.then((result) => _compInteg.ElementStruct(result));
  }

  async function getCompanyProfileHeader() {
    const promise = NMICore.Ajax.Get(constant.Url.companyProfileHeader);
    promise.then((result) => _compInteg.ElementStruct(result));
  }
  0;
  async function getCompanyProfileDetail() {
    const promise = NMICore.Ajax.Get(constant.Url.companyProfileDetail);
    promise.then((result) => _compInteg.ElementStruct(result));
  }

  async function getCompanyNewsHeader() {
    const promise = NMICore.Ajax.Get(constant.Url.companyNewsHeader);
    promise.then((result) => _compInteg.ElementStruct(result));
  }

  async function getCompanyNewsDetail() {
    const promise = NMICore.Ajax.Get(constant.Url.companyNewsDetail);
    promise.then((result) => _compInteg.ElementStruct(result));
  }

  async function getFooterHeader() {
    const promise = NMICore.Ajax.Get(constant.Url.footerHeader);

    promise.then((result) => _compInteg.ElementStruct(result));
  }

  async function getFooterDetail() {
    const promise = NMICore.Ajax.Get(constant.Url.footerDetail);
    promise.then((result) => _compInteg.ElementStruct(result));
  }

  async function getCoreValuesDetail() {
    const promise = NMICore.Ajax.Get(constant.Url.companycoreValuesDetail);

    promise.then((result) => {
      $.each(result, function (i, data) {
        const component = _compFunc.CoreValuesCard(
          data.cvIcon,
          data.cvTitle,
          data.cvDescription
        );

        _compInteg.DefaultStruct("core-values-container", component);
      });
    });
  }

  return {
    init: init,
  };
})();
