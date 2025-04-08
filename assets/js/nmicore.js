var NMICore = (function () {
  var NMICore_Ajax = (function () {
    var post = function (formId, methodType, _urls, dto) {
      var dataPost = $("#" + formId).serialize();
      if (!dto) {
        dto = dataPost;
      }

      $.ajax({
        method: methodType,
        url: _urls[0],
        dataType: "html",
        data: dto[0],
        success: function (response) {
          let clientdetaild = response;
          dto[1]["clientdetailid"] = clientdetaild;
          $.ajax({
            method: methodType,
            url: _urls[1],
            dataType: "html",
            data: dto[1],
            success: function (data) {
              if (data) {
                toastr.success(constant.Message.dropMsgSuccess);
                fnClearFieldValue(formId);
              }
              // toastr.success(constant.Message.dropMsgSuccess);
              // fnClearFieldValue(formId);
            },
            error: function () {
              toastr.error(constant.Message.dropMsgError);
            },
          });
        },
        error: function () {
          toastr.error(constant.Message.dropMsgError);
        },
      });
    };

    var get = function (
      _url,
      keyChecker = null,
      appendElementId = null,
      appendedElementTag = null
    ) {
      $.get({
        url: _url,
        success: function (data) {
          data = JSON.parse(data);

          $(data).each(function (key, value) {
            data = value;

            $.each(data, function (key, value) {
              if (
                key === keyChecker &&
                keyChecker !== null &&
                value.indexOf(",") != -1
              ) {
                var array = value.split(",");

                $.each(array, function (i) {
                  if (key === constant.KeyChecker.dCoreValues) {
                    $("#" + appendElementId).append(
                      $("<" + appendedElementTag + ">").text(array[i])
                    );
                  }

                  if (key === constant.KeyChecker.fdDescription) {
                    $("#" + appendElementId).append(
                      $(
                        `<li class="footer-inf" data-bs-toggle="modal" data-bs-target="${constant.FooterNav[i]}">`
                      ).text(array[i])
                    );
                  }
                });
              } else {
                $("[name=" + "'c-" + key + "']").text(value);
              }
            });
          });
        },
      });
    };

    return {
      Post: post,
      Get: get,
    };
  })();

  var NMICore_Validation = (function () {
    var validateEntry = function (formId) {
      var requiredClass = "bfl-validate-required";
      var hasErrors = 0;
      var form = document.getElementById(formId);

      for (var i = 0; i < form.elements.length; i++) {
        var elementId = form.elements[i].id;
        if (elementId == "") {
          continue;
        }

        var elementObject = $("#" + elementId.replace("/", ""));

        elementObject.next().remove(".diverror");
        elementObject.parent().next().remove(".diverror");

        if (
          form.elements[i].hasAttribute("req") |
          form.elements[i].hasAttribute("req-email")
        ) {
          var errMsg = "";

          if (
            ($.trim(form.elements[i].value) === "" ||
              form.elements[i].value === "0") &&
            form.elements[i].hasAttribute("req")
          ) {
            errMsg += "Field is required. ";

            elementObject.addClass(requiredClass);
            elementObject.after("<div class='diverror'>" + errMsg + "</div>");

            hasErrors++;
          }

          if (form.elements[i].hasAttribute("req-email")) {
            if (!fnValidateEmail($.trim(form.elements[i].value))) {
              elementObject.after(
                "<div class='diverror'>" +
                  errMsg +
                  "This is not a valid email format. </div>"
              );
              hasErrors++;
            }
          }
        }
      }
      if (hasErrors > 0) {
        return false;
      } else {
        return true;
      }
    };

    return {
      ValidateForm: validateEntry,
    };
  })();

  var NMICore_DataConversion = (function () {
    var convertArrToObj = function (grpName) {
      let elementarr = [];

      $("#" + grpName + " *")
        .filter(":input")
        .each(function () {
          elementarr.push([$(this).attr("name"), $(this).val()]);
        });

      return (obj = Object.fromEntries(elementarr));
    };

    return {
      ConvertArrToObj: convertArrToObj,
    };
  })();

  var NMICore_ObjectValidation = (function () {
    var isObjectEmpty = function (obj) {
      return Object.keys(obj).length === 0;
    };

    return {
      IsObjectEmpty: isObjectEmpty,
    };
  })();

  var NMICORE_ConfigDataElement = (function () {
    var addSelectOption = function (id, value) {
      $.each(value, function (index, item) {
        $("#".concat(id)).append(
          '<option value="' + item.name + '">' + item.name + "</option>"
        );
      });
    };

    var addElement = function (id, component) {
      $("#".concat(id)).append(component);
    };

    var validateValueElement = function (prevValue, thisValue) {
      let isValid = prevValue !== thisValue ? true : false;

      return isValid;
    };

    var checkDataLengthElement = function (dataLength) {
      let result = false;

      if (dataLength > 0) {
        result = true;
      }

      return result;
    };

    var appendOnChange = function (parentId) {
      let previousValue = "";
      let thisValue = $("#".concat(parentId)).val();

      let count = $("#select-sub-product-selector div").length;
      let counts = 0;
      $("#".concat(parentId)).change(function (event) {
        const targetId = event.target.id;

        count = counts;
        counts = $("#select-sub-product-selector div").length;

        // tansfer value of thisValue to previousValue vice versa
        previousValue = thisValue;
        thisValue = $(this).val();

        // find if the this value have sub product
        const result = constant.GetDemoSolution.find(
          (item, i) => thisValue === item.name
        );

        const product = constant.GetDemoSolution.filter((item, i) =>
          result.subProduct.includes(item.id)
        );

        const selectComponent = componentFunction.selectOption(
          "_".concat(result.id),
          result.id,
          constant.OptionalProductLabel.label
        );
        const manageEndpointQty = componentFunction.selectOption(
          "_".concat(constant.ManageEndpointLabel.selectId),
          constant.ManageEndpointLabel.selectId,
          constant.ManageEndpointLabel.label
        );

        const validateValue = NMICore.AppendDataElement.ValidateValueElement(
          previousValue,
          thisValue
        );

        const validateLength = NMICore.AppendDataElement.CheckDataLengthElement(
          result.subProduct.length
        );

        const selectCheckBox = componentFunction.CheckBoxLabel(
          constant.CheckBoxLabel.className,
          constant.CheckBoxLabel.description,
          result.alias
        );

        if (validateValue && validateLength) {
          NMICore.AppendDataElement.AddElement(
            constant.OptionalProductLabel.id,
            selectComponent
          );

          NMICore.AppendDataElement.AddSelectOption(result.id, product);
          NMICore.AppendDataElement.AppendOnChange(result.id);
        }

        if (!validateLength && result.alias) {
          NMICore.AppendDataElement.AddElement(
            constant.CheckBoxLabel.id,
            selectCheckBox
          );
        }

        if (thisValue === "RMM/Endpoint Management") {
          NMICore.AppendDataElement.AddElement(
            constant.ManageEndpointLabel.id,
            manageEndpointQty
          );

          NMICore.AppendDataElement.AddSelectOption(
            constant.ManageEndpointLabel.selectId,
            constant.EndpointQtyManage
          );
        }

        NMICore.AppendDataElement.RemoveElement(
          previousValue,
          targetId,
          counts,
          result.alias
        );
      });
    };

    var removeElement = function (product, targetId, counts, alias) {
      if (product) {
        const id = $(
          "#select-sub-product-selector #_".concat(targetId)
        ).index();

        $("#select-sub-product-selector div")
          .slice(id + 1, counts)
          .remove();
      }
      if (product === "RMM/Endpoint Management") {
        $("#_".concat(constant.ManageEndpointLabel.selectId)).remove();
      }

      if (alias) {
        $("#".concat(constant.CheckBoxLabel.className)).remove();
      }
    };

    return {
      AddSelectOption: addSelectOption,
      AddElement: addElement,
      ValidateValueElement: validateValueElement,
      CheckDataLengthElement: checkDataLengthElement,
      AppendOnChange: appendOnChange,
      RemoveElement: removeElement,
    };
  })();

  var fnValidateEmail = function (email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  var fnClearFieldValue = function (formId) {
    $.each(constant.ElemTypeObj, function (i, value) {
      $("#" + formId)
        .find(value)
        .val("");
    });
  };

  return {
    Ajax: {
      Post: NMICore_Ajax.Post,
      Get: NMICore_Ajax.Get,
    },
    Validation: {
      ValidateForm: NMICore_Validation.ValidateForm,
    },
    DataConversion: {
      ConvertArrToObj: NMICore_DataConversion.ConvertArrToObj,
    },
    ObjectValidation: {
      IsObjectEmpty: NMICore_ObjectValidation.IsObjectEmpty,
    },
    AppendDataElement: {
      AddSelectOption: NMICORE_ConfigDataElement.AddSelectOption,
      AppendValidateSelectElement:
        NMICORE_ConfigDataElement.AppendValidateSelectElement,
      AddElement: NMICORE_ConfigDataElement.AddElement,
      VerifyElement: NMICORE_ConfigDataElement.VerifyElement,
      DetectOnchange: NMICORE_ConfigDataElement.DetectOnchange,
      RemoveElement: NMICORE_ConfigDataElement.RemoveElement,
      ValidateValueElement: NMICORE_ConfigDataElement.ValidateValueElement,
      CheckDataLengthElement: NMICORE_ConfigDataElement.CheckDataLengthElement,
      AppendOnChange: NMICORE_ConfigDataElement.AppendOnChange,
    },
  };
})();
