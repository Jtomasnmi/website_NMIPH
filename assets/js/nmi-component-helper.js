let componentFunction = function(){
    const init = () => {
        loadEvent();
    };

    const loadEvent = () => {
        renderK365Card();
        renderSolutionCard();
        renderSolutionVideo();
        addColor();
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
    }

    const renderK365Card = () => {
        let dataCard = constant.K365OnboardingCard.map(({title, desc, pro, qck}, i) => {
            return k365Card(title, desc, pro, qck)
        })
        
        $(function(){
            $('#card-k365').append(dataCard)
        })
    }

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
    }

    const renderSolutionCard = () => {
        $(function(){
            constant.NmiSolution.map((solution, i) => {
                let txtSelector = solution.selector.replace(".", "").replace("-card", "-txt");

                let cardData = solution.card.map(({title, description}, i) => {
                    return solutionCard(title, description, txtSelector);
                })
                $(solution.selector).append(cardData)
            })
        })
    }

    const addColor = () => {
        $(function(){
            constant.HrSolutionColor.map((sol, i) => {
                let txtClass = sol.id.replace("#", ".").replace("-sol", "-txt");
                $(sol.id).css("background-color", sol.color);
                $(txtClass).css("color", sol.color);
            });
        })
    }

    const solutionVideo = (source, title, description, txtSelector ) => {
        const videoCard = $(`
                <div class="embed-responsive embed-responsive-21by9">
                    <iframe class="embed-responsive-item w-100" height="300" src=${source} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="mx-0 mx-md-3">
                    <h4 class="fw-bold ${txtSelector}">${title}</h4>
                    <p>${description}</p>
                </div>
            `);
        return videoCard;
    }

    const renderSolutionVideo = () => {
        $(function(){
            constant.NmiSolution.map((solution, i) => {
                let txtSelector = solution.selector.replace(".", "").replace("-card", "-txt");
                let vidSelector = solution.selector.replace(".", "#").replace("-card", "-vid");
                let videoData = solutionVideo(
                    solution.video.source, 
                    solution.video.title, 
                    solution.video.desc, 
                    txtSelector
                );
                
                $(vidSelector).append(videoData);
            })
        });
    }

    return {
        init: init
    }
}()