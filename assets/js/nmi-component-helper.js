let componentFunction = (function () {
  const k365Card = (title, desc, pro, qck) => {
    return $(
      '<div class="card onboarding-card mb-2">' +
        '<div class="card-body d-grid align-items-center gap-2">' +
        '<div class="d-flex justify-content-between">' +
        '<h5 class="fw-bold">' +
        title +
        "</h5>" +
        '<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="' +
        desc +
        '">' +
        '<i class="bi bi-question-circle txt-blue"></i>' +
        "</span>" +
        "</div>" +
        '<div class="d-flex justify-content-between align-items-center">' +
        '<p class="txt-blue">Quickstart <span class="text-white fw-bold">' +
        pro +
        "</span></p>" +
        '<p class="txt-blue">PRO <span class="text-white fw-bold">' +
        qck +
        "</span></p>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
  };

  const solutionCard = (title, desc, selector) => {
    return $(
      '<div class="card w-100">' +
        '<div class="card-header">' +
        '<h5 class="text-center ' +
        selector +
        '">' +
        title +
        "</h5>" +
        "</div>" +
        '<div class="card-body">' +
        "<p>" +
        desc +
        "</p>" +
        "</div>" +
        '<div class="card-footer"></div>' +
        "</div>"
    );
  };

  const solutionVideo = (source, title, description, txtSelector, thumb) => {
    return $(
      '<div class="embed-responsive embed-responsive-21by9">' +
        '<video class="embed-responsive-item w-100" height="300" poster="' +
        thumb +
        '"controls>' +
        '<source src="' +
        source +
        '"type="video/mp4">' +
        "</video>" +
        "</div>" +
        '<div class="mx-0 mx-md-3">' +
        '<h4 class="fw-bold ' +
        txtSelector +
        '">' +
        title +
        "</h4>" +
        "<p>" +
        description +
        "</p>" +
        "</div>"
    );
  };

  const k365BannerCard = (logoSelector, title, desc, btnLabel, targetModal) => {
    return $(
      '<div class="card">' +
        '<div class="card-body">' +
        '<div class="d-block d-lg-flex align-items-center gap-4">' +
        '<div id="' +
        logoSelector +
        '" class="d-none d-lg-block banner-color"></div>' +
        '<div class="">' +
        '<h5 class="raleway-font">' +
        title +
        "</h5>" +
        "<p>" +
        desc +
        "</p>" +
        '<button id="k365-card-btn" class="btn btn-primary btn-sm k365-banner-modals raleway-font" data-bs-toggle="modal" data-bs-target="#' +
        targetModal +
        '">' +
        btnLabel +
        "</button>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
  };

  const solutionsBanner = (img, targetModal, label) => {
    return $(
      '<div class="col">' +
        '<div class="zoom border solution-card">' +
        "<img src=" +
        img +
        ' width="60rem" height="60rem"/>' +
        '<label><a class="solutions-div-two" data-bs-toggle="modal" data-bs-target="' +
        targetModal +
        '">' +
        label +
        "</a></label>" +
        "</div>" +
        "</div>"
    );
  };

  const getDemoCard = (icon, title, description) => {
    return $(
      '<div class="d-flex align-items-center gap-3">' +
        '<div class="d-flex justify-content-center get-demo-icon">' +
        '<i class="' +
        icon +
        ' fs-3"></i>' +
        "</div>" +
        "<div>" +
        "<h6>" +
        title +
        "</h6>" +
        '<p class="text-sm fw-light mb-0 txt-justify">' +
        description +
        "</p>" +
        "</div>" +
        "</div>"
    );
  };

  const selectOption = (id, label) => {
    return $(
      '<label class="form-label text-dark text-xs fw-bold">' +
        label +
        '<span class="text-danger"> *</span></label>' +
        '<select id="' +
        id +
        '" class="form-select" aria-label="Default select example" >' +
        "<option selected>Select..</option>" +
        "</select>"
    );
  };

  return {
    k365Card: k365Card,
    solutionCard: solutionCard,
    solutionVideo: solutionVideo,
    k365BannerCard: k365BannerCard,
    solutionsBanner: solutionsBanner,
    getDemoCard: getDemoCard,
    SelectOption: selectOption,
  };
})();
