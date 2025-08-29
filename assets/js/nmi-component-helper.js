let _compFunc = (function () {
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

  const k365BannerCard = (id, packageSelector, src, desc, targetModal) => {
    return $(
      '<div id="' +
        id +
        '" class="position-relative">' +
        '<div class="card">' +
        '<div class="card-body">' +
        '<p class="kaseya365-title">' +
        desc +
        "</p>" +
        '<div class="d-flex justify-content-center">' +
        '<img src="' +
        src +
        '" class="ratio ratio-1x1 img-width"/>' +
        "</div>" +
        '<div class="d-flex justify-content-center align-items-center mb-3">' +
        '<div><i class="hgi hgi-stroke hgi-arrow-down-01 platform-down-icon" data-bs-toggle="modal" data-bs-target="#' +
        targetModal +
        '"></i></div>' +
        "</div>" +
        '<div id="' +
        packageSelector +
        '" class="kaseya-package-grid">' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
    // return $(
    //   '<div id="' +
    //     id +
    //     '" class="position-relative">' +
    //     '<div class="card">' +
    //     '<div class="card-body">' +
    //     '<p class="kaseya365-title">' +
    //     desc +
    //     "</p>" +
    //     '<div class="d-flex justify-content-center">' +
    //     '<img src="' +
    //     src +
    //     '" class="ratio ratio-1x1 img-width"/>' +
    //     "</div>" +
    //     '<div id="' +
    //     packageSelector +
    //     '" class="kaseya-package-grid">' +
    //     "</div>" +
    //     "</div>" +
    //     '<div class="card-footer">' +
    //     '<div class="d-flex justify-content-center">' +
    //     '<button id="k365-card-btn" class="btn btn-sm k365-banner-modals raleway-font" data-bs-toggle="modal" data-bs-target="#' +
    //     targetModal +
    //     '">' +
    //     btnLabel +
    //     "</button>" +
    //     "</div>" +
    //     "</div>" +
    //     "</div>" +
    //     "</div>"
    // );
  };

  const solutionsBanner = (description, targetModal, label, img) => {
    return $(
      '<div class="card h-100">' +
        '<div class="card-body px-3">' +
        '<div class="d-flex justify-content-center">' +
        // '<div class="nmi-solution-img"><img class="ratio ratio-4x3 icon" src="' +
        // img +
        // '"/></div>' +
        '<div class="nmi-solution-icon-div"><img src="' +
        img +
        '" class="ratio ratio-1x1 w-25"/></div>' +
        "</div>" +
        '<div class="solution-card-content">' +
        '<h5 class="mb-0 solution-label">' +
        label +
        "</h5>" +
        '<p class="solution-description">' +
        description +
        "</p>" +
        '<div><i class="hgi hgi-stroke hgi-arrow-right-01 solution-sm-icon" data-bs-toggle="modal" data-bs-target="' +
        targetModal +
        '"></i></div>' +
        "</div>" +
        "</div>" +
        "</div>"
    );
    // return $(
    //   '<div class="card h-100">' +
    //     '<div class="card-body px-3">' +
    //     '<div class="d-flex justify-content-center">' +
    //     // '<div class="nmi-solution-img"><img class="ratio ratio-4x3 icon" src="' +
    //     // img +
    //     // '"/></div>' +
    //     '<div class="nmi-solution-icon-div"><i class="' +
    //     iconName +
    //     '"></i></div>' +
    //     "</div>" +
    //     '<div class="solution-card-content">' +
    //     '<h5 class="mb-0 solution-label">' +
    //     label +
    //     "</h5>" +
    //     '<p class="solution-description">' +
    //     description +
    //     "</p>" +
    //     '<div><i class="hgi hgi-stroke hgi-arrow-right-01 solution-sm-icon" data-bs-toggle="modal" data-bs-target="' +
    //     targetModal +
    //     '"></i></div>' +
    //     "</div>" +
    //     "</div>" +
    //     "</div>"
    // );
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
        '<p class="text-sm fw-light mb-0">' +
        description +
        "</p>" +
        "</div>" +
        "</div>"
    );
  };

  const selectOption = (divId, id, label) => {
    return $(
      '<div id="' +
        divId +
        '">' +
        '<label class="form-label text-dark text-xs fw-bold">' +
        label +
        '<span class="text-danger"> *</span></label>' +
        '<select id="' +
        id +
        '" class="form-select" aria-label="Default select example" name="product" req>' +
        '"<option selected disabled value="">Select..</option>"' +
        "</select>" +
        "</div>"
    );
  };

  const imgElement = (src, name, className) => {
    return $(
      '<img src="' + src + '" alt="' + name + '" class="' + className + '"/>'
    );
  };

  const checkBoxLabel = (id, desc, alias) => {
    return $(
      '<div id="' +
        id +
        '" class="form-check">' +
        "<input " +
        'class="form-check-input"' +
        'type="checkbox"' +
        ' value=""' +
        'id="flexCheckDefault"' +
        "/>" +
        '<label class="form-check-label text-dark" for="flexCheckDefault">' +
        desc.concat(" ").concat(alias) +
        "</label>" +
        "</div>"
    );
  };

  const solutionTypeCard = (type, content, icon) => {
    return $(
      '<div class="solution-content hover-animate">' +
        '<div class="container">' +
        '<h5 class="mt-4 product-h5">' +
        type +
        "</h5>" +
        "<p>" +
        content +
        "</p>" +
        "</div>" +
        '<div class="solution-bg">' +
        '<img src="assets/img/nmi_solutions/solution-icon-bg.jpg" alt="" class="ratio ratio-1x1 img-opacity" />' +
        '<div class="solution-icons-container">' +
        '<i class="' +
        icon +
        ' solution-icon"></i>' +
        "</div>" +
        "</div>" +
        "</div>"
    );
  };

  const coreValuesCard = (iconClass, label, description) => {
    return $(
      `<div class="card card-core-values" data-aos="fade-up" data-aos-delay="100">
      <div class="container card-body">
        <div>
          <i class="` +
        iconClass +
        ` icon-size"></i>
          <p class="text-blue-1 fw-bold mt-3 about-first-letter">
           ` +
        label +
        `
          </p>
          <p class="core-value-p">` +
        description +
        `
          </p>
        </div>
      </div>
    </div>`
    );
  };

  const k365PillsTab = (id, target, label) => {
    return $(
      '<button class="nav-link d-flex align-items-center gap-1" id="' +
        id +
        '" data-bs-toggle="pill" data-bs-target="#' +
        target +
        '" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">' +
        '<p class="mb-0">' +
        label +
        "</p>" +
        "</button>"
    );
  };

  const k365PillsContent = (parentId, id, img, title, label) => {
    return $(
      '<div  class="tab-pane fade show text-white" id="' +
        id +
        '" role="tabpanel" aria-labelledby="v-pills-home-tab">' +
        "<div>" +
        '<h5 class="text-white mb-3 fw-bold">' +
        'Kaseya 365 <span class="fw-normal">- Endpoint</span>' +
        "</h5>" +
        " </div>" +
        "<div>" +
        '<img src="' +
        img +
        '" alt="' +
        parentId +
        '"  class="ratio ratio-21x9" />' +
        "</div>" +
        "<div>" +
        "<h4>" +
        title +
        "</h4>" +
        "<p>" +
        label +
        "</p>" +
        '<p id="automation-product-content" class="d-flex align-items-center gap-1">Products:</p>' +
        '<button  id="get-demo-btn" class="btn get-start-btn scrollto" data-bs-toggle="modal" data-bs-target="#get-a-demo">' +
        "Get A Demo" +
        "</button>" +
        "</div>" +
        "</div>"
    );
  };

  return {
    k365Card: k365Card,
    solutionCard: solutionCard,
    solutionVideo: solutionVideo,
    k365BannerCard: k365BannerCard,
    solutionsBanner: solutionsBanner,
    getDemoCard: getDemoCard,
    imgElement: imgElement,
    CheckBoxLabel: checkBoxLabel,
    SolutionTypeCard: solutionTypeCard,
    CoreValuesCard: coreValuesCard,
    selectOption: selectOption,
    k365PillsTab: k365PillsTab,
    k365PillsContent: k365PillsContent,
  };
})();
