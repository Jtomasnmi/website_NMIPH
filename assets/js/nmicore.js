var NMICore = (function () {
  var NMICore_Ajax = (function () {
    var post = function (
      formId,
      methodType,

      dto,
      optionalClrField,
      optionalFieldValue,
      ..._urls
    ) {
      // var dtoArr = [{ ...dto[0], ...dto[1] }];

      return new Promise(function (resolve, reject) {
        try {
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
                    toastr.info(constant.Message.dropMsgProcessing);
                    fnClearFieldValue(formId);
                    fnClearSpecificField(optionalClrField, optionalFieldValue);
                    resolve(dto);
                  }
                },
              });
            },
          });
        } catch (error) {
          console.error("JSON parse error:", error);
          reject(error);
        }
      });
    };

    // var get = function (
    //   _url,
    //   keyChecker = null,
    //   appendElementId = null,
    //   appendedElementTag = null
    // ) {
    //   $.get({
    //     url: _url,
    //     success: function (data) {
    //       data = JSON.parse(data);

    //       $(data).each(function (key, value) {
    //         data = value;

    //         $.each(data, function (key, value) {
    //           if (keyChecker === constant.KeyChecker.cvData) {
    //           }
    //           if (
    //             key === keyChecker &&
    //             keyChecker !== null &&
    //             value.indexOf(",") != -1
    //           ) {
    //             var array = value.split(",");

    //             $.each(array, function (i) {
    //               if (key === constant.KeyChecker.fdDescription) {
    //                 $("#" + appendElementId).append(
    //                   $(
    //                     `<li class="footer-inf" data-bs-toggle="modal" data-bs-target="${constant.FooterNav[i]}">`
    //                   ).text(array[i])
    //                 );
    //               }
    //             });
    //           } else {
    //             $("[name=" + "'c-" + key + "']").text(value);
    //           }
    //         });
    //       });
    //     },
    //   });
    // };
    var get = function (_url, _value) {
      let data = _value ? { requestData: _value } : null;

      return new Promise(function (resolve, reject) {
        $.get(_url, data).done(function (data) {
          try {
            const response = JSON.parse(data);
            resolve(response);
          } catch (error) {
            console.error("JSON parse error:", error);
            reject(error);
          }
        });
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

    var emptyDataChecker = function (...data) {
      let boolArr = [];

      for (value in data) {
        if (typeof value === "boolean") {
          boolArr.push(value);
        }
        if (value !== null && value !== undefined) {
          boolArr.push(true);
        }
      }

      return boolArr.includes(false) ? false : true;
    };

    return {
      ValidateForm: validateEntry,
      EmptyDataChecker: emptyDataChecker,
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
    var filterUniqueValues = function (page, arr) {
      // create new array limit to name and content_identifier
      let repeatValue = arr?.map(({ name, content_identifier }) => {
        return {
          name,
          content_identifier,
          page,
        };
      });
      // eliminate repeatetive data from response
      let uniqueValues = [
        ...new Map(
          repeatValue.map((item) => [JSON.stringify(item), item])
        ).values(),
      ];
      return uniqueValues;
    };

    return {
      ConvertArrToObj: convertArrToObj,
      FilterUniqueValues: filterUniqueValues,
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
    var addSelectOption = function (id, value, label) {
      $("#".concat(id)).append(
        '<option value="' + value + '">' + label + "</option>"
      );
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

        const selectComponent = _compFunc.selectOption(
          "_".concat(result.id),
          result.id,
          constant.OptionalProductLabel.label
        );
        const manageEndpointQty = _compFunc.selectOption(
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

        const selectCheckBox = _compFunc.CheckBoxLabel(
          result.id,
          constant.CheckBoxLabel.description,
          result.alias
        );

        if (validateValue && validateLength) {
          NMICore.AppendDataElement.AddElement(
            constant.OptionalProductLabel.id,
            selectComponent
          );

          product.map((product, i) =>
            NMICore.AppendDataElement.AddSelectOption(
              result.id,
              product.name,
              product.name
            )
          );
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

          constant.EndpointQtyManage.map((value, i) =>
            NMICore.AppendDataElement.AddSelectOption(
              constant.ManageEndpointLabel.selectId,
              value.name,
              value.name
            )
          );
        }

        NMICore.AppendDataElement.RemoveElement(
          previousValue,
          targetId,
          counts
        );
      });
    };

    var removeElement = function (product, targetId, counts) {
      if (product) {
        const id = $(
          "#select-sub-product-selector #_".concat(targetId)
        ).index();

        const withAliasId = constant.GetDemoSolution.find(
          (v, i) => v.name === product
        );

        $("#select-sub-product-selector div")
          .slice(id + 1, counts)
          .remove();

        $("#".concat(withAliasId.id)).remove();
      }
      if (product === "RMM/Endpoint Management") {
        $("#_".concat(constant.ManageEndpointLabel.selectId)).empty();
      }
    };
    var resetOption = function (...selector) {
      $.each(selector, function (i, value) {
        $($("#".concat(value)))
          .children("option")
          .not(":disabled")
          .remove();

        $($("#".concat(value))).val("");
      });
    };

    return {
      AddSelectOption: addSelectOption,
      AddElement: addElement,
      ValidateValueElement: validateValueElement,
      CheckDataLengthElement: checkDataLengthElement,
      AppendOnChange: appendOnChange,
      RemoveElement: removeElement,
      ResetOption: resetOption,
    };
  })();

  var NMICore_ResponseReturn = (function () {
    var nmiToaster = function (isSuccess) {
      isSuccess
        ? toastr.success(constant.Message.dropMsgSuccess)
        : toastr.error(constant.Message.dropMsgError);
    };

    return {
      NmiToaster: nmiToaster,
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

  var fnClearSpecificField = function (target, value) {
    $("#".concat(target)).val(value);
  };

  return {
    Ajax: {
      Post: NMICore_Ajax.Post,
      Get: NMICore_Ajax.Get,
    },
    Validation: {
      ValidateForm: NMICore_Validation.ValidateForm,
      EmptyDataChecker: NMICore_Validation.EmptyDataChecker,
    },
    DataConversion: {
      ConvertArrToObj: NMICore_DataConversion.ConvertArrToObj,
      FilterUniqueValues: NMICore_DataConversion.FilterUniqueValues,
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
      ResetOption: NMICORE_ConfigDataElement.ResetOption,
    },
    ReturnResponse: {
      NmiToaster: NMICore_ResponseReturn.NmiToaster,
    },
  };
})();
