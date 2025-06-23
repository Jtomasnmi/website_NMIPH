let _compInteg = (function () {
  const defaultStruct = (targetId, _component) => {
    $("#".concat(targetId)).append(_component);
  };

  const elementStruct = (...promise) => {
    $.each(promise, function (i, _data) {
      $.each(_data, function (i, data) {
        $.each(data, function (key, value) {
          $("[name=" + "'c-" + key + "']").text(value);
        });
      });
    });
  };

  return {
    DefaultStruct: defaultStruct,
    ElementStruct: elementStruct,
  };
})();
