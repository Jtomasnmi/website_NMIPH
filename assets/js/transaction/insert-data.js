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

  async function AddData(
    buttonid,
    form,
    objData,
    optionalClrField,
    optionalFieldValue,
    ..._urls
  ) {
    $("#".concat(buttonid)).click(function (e) {
      e.preventDefault();

      console.log(objData);

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
        NMICore.Ajax.Post(
          form,
          constant.MethodType.Post,
          _urls,
          dto,
          optionalClrField,
          optionalFieldValue
        );
      }
    });
  }

  async function saveContactForm() {
    let objData = [
      constant.GrpElemHolder.clientDetail,
      constant.GrpElemHolder.clientCompanyLocation,
    ];

    AddData(
      constant.WebButton.btnContactForm,
      constant.Form.clientFormId,
      objData,
      constant.PhLocationId.CountryID,
      constant.SpecificClrField[0],
      constant.Url.clientDetail,
      constant.Url.clientCompanyLocation
    );
  }

  async function saveDemoForm() {
    let objData = [constant.GrpElemHolder.demoDetail];

    AddData(
      constant.WebButton.btnDemoForm,
      constant.Form.getDemoForm,
      objData,
      null,
      null,
      null
    );
  }

  return {
    init: init,
  };
})();
