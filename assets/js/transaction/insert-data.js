let insertData = (function () {
  let init = function () {
    clickEvent();
  };

  async function clickEvent() {
    $(window).on("load", function () {
      saveContactForm();
      saveDemoForm();
    });
  }

  async function AddData(buttonid, form, objData, ..._urls) {
    $("#".concat(buttonid)).click(function (e) {
      e.preventDefault();

      let dto = [];

      if (!NMICore.Validation.ValidateForm(form)) {
        return;
      }

      $.each(objData, function (i, value) {
        let data = NMICore.DataConversion.ConvertArrToObj(value);
        if (!NMICore.ObjectValidation.IsObjectEmpty(value)) {
          dto.push(data);
        }
      });

      if (dto.length !== 0) {
        NMICore.Ajax.Post(form, constant.MethodType.Post, _urls, dto);
      }
    });
  }

  async function saveContactForm() {
    let objData = [
      constant.GrpElemHolder.clientDetail,
      constant.GrpElemHolder.messageDetail,
    ];

    AddData(
      constant.WebButton.btnContactForm,
      constant.Form.clientFormId,
      objData,
      constant.Url.clientDetail,
      constant.Url.clientMessage
    );
  }

  async function saveDemoForm() {
    let objData = [constant.GrpElemHolder.demoDetail];

    AddData(
      constant.WebButton.btnDemoForm,
      constant.Form.getDemoForm,
      objData,
      null
    );
  }

  return {
    init: init,
  };
})();
