let _compInteg = (function () {
  function textContent(response) {
    if (response.content) {
      $.each(response.content, function (i, content) {
        $.each(content, function (key, data) {
          $(
            "#" +
              response.page +
              " #" +
              content.content_identifier +
              ' [name="' +
              response.keyLetter +
              key +
              '"]'
          ).text(data);
        });
      });
    }
  }
  function visualContent(response) {
    let dataAttr;
    let responseToLoop = [response.file, response.attachment];
    $.each(responseToLoop, function (i, res) {
      if (res) {
        res === response.file ? (dataAttr = "src") : (dataAttr = "href");
        $.each(res, function (i, data) {
          $(
            "#" +
              response.page +
              " #" +
              data.content_identifier +
              ' [name="' +
              response.keyLetter +
              "path" +
              '"]'
          ).attr(dataAttr, data.path);
        });
      }
    });
  }

  function listContentContainer(response) {
    if (response.content_list) {
      let value = NMICore.DataConversion.FilterUniqueValues(
        response.page,
        response.content_list
      );
      $.each(value, function (i, data) {
        let componentMethod = constant.PageListContainer.find(
          (item) => item.page === data.page
        );

        response.listMethod !== ""
          ? $(componentMethod.selector).append(
              _compFunc[componentMethod.listMethod](
                data.content_identifier,
                response.keyLetter + data.content_identifier,
                data.name
              )
            )
          : $(
              "#" +
                response.page +
                " #" +
                data.content_identifier +
                ' [name="' +
                response.keyLetter +
                "name" +
                '"]'
            ).text(data.name);
      });
    }
  }

  function listContent(response) {
    if (response.content_list) {
      $.each(response.content_list, function (i, data) {
        $(
          "#" +
            response.page +
            " #" +
            response.keyLetter +
            data.content_identifier
        ).append(
          "<" +
            response.listElementTag +
            ' id="' +
            data.content_identifier +
            "-" +
            i +
            '"' +
            ">" +
            data.description +
            "</" +
            response.listElementTag +
            ">"
        );
      });
    }
  }

  function testimonialContent(response) {
    if (response.client_testimonial) {
      $.each(response.client_testimonial, function (i, data) {
        let testimonialCard = _compFunc.testimonialCard(
          data.feedback,
          data.name,
          data.position,
          data.company
        );
        $("#".concat(data.content_identifier)).append(testimonialCard);
      });
    }
  }

  function modalContentSelector() {
    $.each(constant.ModalValue, function (i, modal) {
      $.each(modal.id, function (i, id) {
        $(id).attr("data-bs-toggle", "modal");
        $(id).attr(modal.attribute, modal.value);
      });
    });
  }

  function defaultPageContent(responseArr) {
    try {
      if (responseArr) {
        $.each(responseArr, function (i, response) {
          textContent(response);
          listContentContainer(response);
          listContent(response);
          visualContent(response);
          testimonialContent(response);
          modalContentSelector();
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    DefaultPageContent: defaultPageContent,
  };
})();
