let componentFunction = function(){
    const init = () => {
        loadEvent();
    };

    const loadEvent = () => {
        createSegmentedTab();
    };

    const segmentedTabHeader = (index, iconClass, title, label, id) => {
        // create the li tag
        const tabItem = document.createElement('li')
        tabItem.classList.add('nav-item')
        tabItem.setAttribute('role', 'presentation')

        // create button of tab
        const tabItemBtn = document.createElement('button')

        // first index is default active
        if (index === 0) {
            tabItemBtn.setAttribute('aria-selected', 'true')
            tabItemBtn.classList.add('active')
        }

        // must be in loop (refactor)
        tabItemBtn.classList.add('nav-link')
        tabItemBtn.setAttribute('id', label)
        tabItemBtn.setAttribute('data-bs-toggle', 'pill')
        tabItemBtn.setAttribute('data-bs-target', id)
        tabItemBtn.setAttribute('role', 'tab')
        tabItemBtn.setAttribute('aria-controls', 'pills-manage')

        // create icon tab
        const icon = document.createElement('i')
        icon.classList.add('fs-6', 'bi', iconClass)

        // craete span tag
        const span = document.createElement('span')
        span.classList.add('ms-1')
        span.textContent = title

        tabItemBtn.appendChild(icon)
        tabItemBtn.appendChild(span)
        tabItem.appendChild(tabItemBtn)

        return tabItem
    }

    const segmentedTabContent = () => {
        
    }

    const createSegmentedTab = function() {
        // create the ul or container of the tab
        const tabBase = document.createElement('ul')
        tabBase.classList.add('nav', 'nav-pills', 'mb-3')
        tabBase.setAttribute('id', 'pills-tab')
        tabBase.setAttribute('role', 'tablist')

        const tabItems = constant.K365IncludeTabs.map(({
            iconClass, title, label, id
        }, i) => {
            return segmentedTabHeader(i, iconClass, title, label, id)
        })
        
        tabItems.forEach((node) => tabBase.appendChild(node))
        
        // $(document).on('shown.bs.modal', '#k365-content-modal', function(){
        //     $("#segmentedTab").append(tabBase)
        // })
    }

    return {
        init: init
    }
}()