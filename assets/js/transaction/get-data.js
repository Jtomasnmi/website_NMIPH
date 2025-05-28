let getData = (function () {
  let init = function () {
    loadEvent();
  };

  async function loadEvent() {
    getCompanyDetail();
    getCompanyProfileHeader();
    getCompanyProfileDetail();
    getCompanyNewsHeader();
    getCompanyNewsDetail();
    getFooterHeader();
    getFooterDetail();
  }

  async function getCompanyDetail() {
    NMICore.Ajax.Get(constant.Url.companyDetail, null, null, null);
  }

  async function getCompanyProfileHeader() {
    NMICore.Ajax.Get(constant.Url.companyProfileHeader, null, null, null);
  }

  async function getCompanyProfileDetail() {
    NMICore.Ajax.Get(
      constant.Url.companyProfileDetail,
      constant.KeyChecker.dCoreValues,
      constant.AppendElementIds.dCoreValueList,
      constant.AppendElementTag.p
    );
  }

  async function getCompanyNewsHeader() {
    NMICore.Ajax.Get(constant.Url.companyNewsHeader, null, null, null);
  }

  async function getCompanyNewsDetail() {
    NMICore.Ajax.Get(constant.Url.companyNewsDetail, null, null, null);
  }

  async function getFooterHeader() {
    NMICore.Ajax.Get(constant.Url.footerHeader, null, null, null);
  }

  async function getFooterDetail() {
    NMICore.Ajax.Get(
      constant.Url.footerDetail,
      constant.KeyChecker.fdDescription,
      constant.AppendElementIds.fdDescriptionList,
      null
    );
  }

  return {
    init: init,
  };
})();
