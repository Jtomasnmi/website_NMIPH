let insertData = (function () {
  let init = function () {
    clickEvent();
  };

  async function clickEvent() {
    $(window).on("load", function () {
      saveContactForm();
      // saveDemoForm();
    });
  }
  function testBeforeFormatData(form, objData) {
    let dto = [];

    if (NMICore.Validation.ValidateForm(form)) {
      $.each(objData, function (i, value) {
        let data = NMICore.DataConversion.ConvertArrToObj(value);

        if (!NMICore.ObjectValidation.IsObjectEmpty(value)) {
          dto.push(data);
        }
      });

      return { form, dto };
    }
  }

  async function saveContactForm() {
    $("#".concat(constant.WebButton.btnContactForm)).click(function (e) {
      e.preventDefault();

      const objData = [
        constant.GrpElemHolder.clientDetail,
        constant.GrpElemHolder.clientCompanyLocation,
      ];
      const result = testBeforeFormatData(constant.Form.clientFormId, objData);

      if (result.dto.length > 0) {
        const promise = NMICore.Ajax.Post(
          result.form,
          constant.MethodType.Post,
          result.dto,
          constant.PhLocationId.CountryID,
          constant.SpecificClrField[0],
          constant.Url.clientDetail,
          constant.Url.clientCompanyLocation
        );

        promise.then((result) => {
          const _result = result.reduce((obj, restObj) => {
            return { ...obj, ...restObj };
          });

          // add email value from _result to constant email EmailTemplate
          const _emailCrendentials = constant.EmailTemplate.map((data) => {
            if (data.email === "") {
              data.email = result[0].EmailAddress;
            }
            return data;
          });

          // add attr to _result obj and past to get method
          _result.emailDetails = _emailCrendentials;
          _result.ToReplaceStr = constant.ToReplaceStr;

          // once email response is true validate the result from post together with  success attr
          NMICore.Ajax.Get(constant.Url.emailhostdetail, _result).then(
            ({ success }) => {
              const isValid = NMICore.Validation.EmptyDataChecker(
                success,
                result
              );

              NMICore.ReturnResponse.NmiToaster(isValid);
            }
          );
        });
      }
    });
  }

  return {
    init: init,
  };
})();
