let componentFunction = function(){
    const init = () => {
        loadEvent();
    };

    const loadEvent = () => {
        renderK365Card();
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

    return {
        init: init
    }
}()