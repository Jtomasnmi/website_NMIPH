let componentFunction = function(){

    const init = () => {
        loadEvent();
    };

    const loadEvent = () => {
        renderK365Card();
        renderSolutionCard();
        addColor();
        renderSolutionVideo();
        initK365BannerCard();
        initSolutionsBanner();
    };


    const k365Card = (title, desc, pro, qck) => {
        const card = $(`<div class="card onboarding-card mb-2">
                <div class="card-body d-grid align-items-center gap-2">
                    <div class="d-flex justify-content-between">
                        <h5 class="fw-bold">${title}</h5>
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" 
                            data-bs-placement="right" data-bs-title="${desc}">
                            <i class="bi bi-question-circle txt-blue"></i>
                        </span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="txt-blue">Quickstart <span class="text-white fw-bold">${pro}</span></p>
                        <p class="txt-blue">PRO <span class="text-white fw-bold">${qck}</span></p>
                    </div>
                </div>
            </div>`);

        return card;
    };

    const renderK365Card = () => {
        $(window).on('load', function(){
            let dataCard = constant.K365OnboardingCard.map(({title, desc, pro, qck}, i) => {
                return k365Card(title, desc, pro, qck)
            });
            $('#card-k365').append(dataCard)
        });
    };

    const solutionCard = (title, desc, selector) => {
        const card = $(`
            <div class="card w-100">
                <div class="card-header">
                    <h5 class="text-center ${selector}">${title}</h5>
                </div>
                <div class="card-body">
                    <p>${desc}</p>
                </div>
                <div class="card-footer"></div>
            </div>
        `);
        return card
    };

    const renderSolutionCard = () => {
        $(window).on('load', function(){
            constant.NmiSolution.map((solution, i) => {
                let txtSelector = solution.selector.replace(".", "").replace("-card", "-txt");

                let cardData = solution.card.map(({title, description}, i) => {
                    return solutionCard(title, description, txtSelector);
                })
                $(solution.selector).append(cardData)
            });
        });
    };

    const addColor = () => {
        $(function(){
            constant.HrSolutionColor.map((sol, i) => {
                let txtClass = sol.id.replace("#", ".").replace("-sol", "-txt");
                $(sol.id).css("background-color", sol.color);
                $(txtClass).css("color", sol.color);
            });
        });
    };

    const solutionVideo = (source, title, description, txtSelector, thumb ) => {
        const videoCard = $(`
                <div class="embed-responsive embed-responsive-21by9">
                    <video class="embed-responsive-item w-100" height="300" poster=${thumb} controls>
                        <source src=${source} type="video/mp4">
                    </video>
                </div>
                <div class="mx-0 mx-md-3">
                    <h4 class="fw-bold ${txtSelector}">${title}</h4>
                    <p>${description}</p>
                </div>
            `);
        return videoCard;
    };

    const renderSolutionVideo = () => {
        $(window).on('load', function(){
            constant.NmiSolution.map((solution, i) => {
                let txtSelector = solution.selector.replace(".", "").replace("-card", "-txt");
                let vidSelector = solution.selector.replace(".", "#").replace("-card", "-vid");
                let videoData = solutionVideo(
                    solution.video.source,
                    solution.video.title,
                    solution.video.desc,
                    txtSelector,
                    solution.video.thumb
                );

                $(vidSelector).append(videoData);
            })
        });
    };
    
    const k365BannerCard = (logoSelector, title, desc, btnLabel, targetModal) => {
         return '<div class="card">' +
                        '<div class="card-body">' +
                            '<div class="d-block d-lg-flex align-items-center gap-4">' +
                                '<div id="'+logoSelector+'" class="d-none d-lg-block banner-color"></div>' +
                                '<div class="">' +
                                    '<h5 class="raleway-font">' + title + '</h5>'+
                                    '<p>' + desc + '</p>'+
                                    '<button class="btn btn-primary btn-sm k365-banner-modals" data-bs-toggle="modal" data-bs-target="#'+targetModal+'">' + btnLabel + '</button>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
    };

    const initK365BannerCard = () => {
        $(window).on('load', function(){
            $.each(constant.K365EndpointUserBanner, function(index, value){
                const cardData = k365BannerCard(
                   value.logoSelector,
                   value.title,
                   value.desc,
                   value.btnLabel,
                   value.targetModal
               );
    
               $("#kaseya365").append(cardData);
           });
        });
    };

    const solutionsBanner = (img, targetModal, label) => {
        return  '<div class="col">' +
                    '<div class="zoom border solution-card">' +
                        '<img src='+ img +' width="60rem" height="60rem"/>' + 
                        '<label><a class="solutions-div-two" data-bs-toggle="modal" data-bs-target="'+ targetModal +'">' + label +'</a></label>' +
                    '</div>' +
                '</div>'
    }

    const initSolutionsBanner = () => {
        $(function(){
            $.each(constant.SolutionsBanner, function(index, value){
                let solBanner = solutionsBanner(
                    value.img,
                    value.targetModal,
                    value.label
                );

                $('#banner-solution-selector').append(solBanner);

            });
        });
    }

    return {
        init: init
    }
}()