let constant = function(){
    let mapPosition = {
        lat: 14.5519,
        lng: 121.0181
    };

    let mapTitle = {
        title: "Raha Sulayman Bldg. 108 Benavidez St., Legaspi Village, Makati City"
    };

    let form = {
        clientFormId: "frmClientContactRegistrationForm",
        companyFormId: "frmCompanyDetailForm",
        companyProfileDetailFormId: "frmCompanyProfileDetailForm",
        companyNewsDetailFormId: "frmCompanyNewsDetailForm"
    };

    let methodType = {
        Post: "POST"
    };

    let url = {
        clientDetail: "controller/clientdetail.php",
        companyDetail: "controller/companydetail.php",
        clientMessage: "controller/clientmessage.php",
        companyProfileHeader: "controller/companyprofileheader.php",
        companyProfileDetail: "controller/companyprofiledetail.php",
        companyNewsHeader: "controller/companynewsheader.php",
        companyNewsDetail: "controller/companynewsdetail.php",
        footerHeader: "controller/footerheader.php",
        footerDetail: "controller/footerdetail.php"
    };
    
    let message = {
        dropMsgSuccess: "Message was successfully submitted and sent an email confirmation, thank you.",
        dropMsgError: "Registration Failed!"
    };

    let webButton = {
        btnInsertData : "btnInsertData"
    };

    let grpElemHolder = {
        clientDetail: "grpClientDetail",
        messageDetail : "grpClientMesage"
    };

    let keyChecker = {
        dCoreValues: "DCoreValues",
        fdDescription: "FDDescription"
    };

    let appendElementIds = {
        dCoreValueList: "DCoreValueList",
        fdDescriptionList: "FDDescriptionList"
    };

    const htmlTagList = [
        "h2",
        "h3",
        "h4",
        "a",
        "p",
        "ul"
    ];

    const elemTypeObj = [
        'input',
        'textarea'
    ];

    let appendedElementTag = {
        li: "li"
    };
    

    const k365IncludeTabs = [
        {
            id: "#pills-manage",
            label: "pills-manage-tab",
            img: "assets/img/nmi-k-365/k365-manage.png",
            iconClass: "bi-person-fill-gear",
            title: "Manage",
            description: 
            `Streamline IT management with advanced remote monitoring and maintenance solutions. These tools simplify IT operations by offering comprehensive oversight of endpoints, networks, and cloud services. 
            With real-time monitoring, automated tasks, and efficient troubleshooting, our solutions enable proactive issue resolution, minimizing downtime and maintaining peak performance.
            
            Explore intuitive dashboards and reporting for a clear view of your IT landscape, reducing operational costs and bolstering security, all while enhancing end-user support and service.
            `
        },
        {
            id: "#pills-secure",
            label: "pills-secure-tab",
            img: "assets/img/nmi-k-365/k365-secure.png",
            iconClass: "bi-lock-fill",
            title: "Secure",
            description: 
            `Streamline IT management with advanced remote monitoring and maintenance solutions. These tools simplify IT operations by offering comprehensive oversight of endpoints, networks, and cloud services. 
            With real-time monitoring, automated tasks, and efficient troubleshooting, our solutions enable proactive issue resolution, minimizing downtime and maintaining peak performance.
            
            Explore intuitive dashboards and reporting for a clear view of your IT landscape, reducing operational costs and bolstering security, all while enhancing end-user support and service.
            `
        },
        {
            id: "#pills-backup",
            label: "pills-backup-tab",
            img: "assets/img/nmi-k-365/k365-backup.png",
            iconClass: "bi-cloud-arrow-up-fill",
            title: "Backup",
            description: 
            `Streamline IT management with advanced remote monitoring and maintenance solutions. These tools simplify IT operations by offering comprehensive oversight of endpoints, networks, and cloud services. 
            With real-time monitoring, automated tasks, and efficient troubleshooting, our solutions enable proactive issue resolution, minimizing downtime and maintaining peak performance.
            
            Explore intuitive dashboards and reporting for a clear view of your IT landscape, reducing operational costs and bolstering security, all while enhancing end-user support and service.
            `
        },
    ]
    const k365OnboardingCard = [
        {
            title: "Dedicated Project Manager",
            desc: "Single Project Manager for accountability and escalations",
            pro: `<i class="bi bi-check"></i>`,
            qck: `<i class="bi bi-check"></i>`
        },
        {
            title: "Self Guided Enablement in Product",
            desc: "In Product implementation walkthrough steps and videos",
            pro: `<i class="bi bi-check"></i>`,
            qck: `<i class="bi bi-check"></i>`
        },
        {
            title: "Integration Coverage",
            desc: "Integration coverage on all components via Group and Consulting sessions",
            pro: `<i class="bi bi-check"></i>`,
            qck: `<i class="bi bi-check"></i>`
        },
        {
            title: "Post Implementation Technical Account Review",
            desc: "Dedicated 30 minute review sessions to address quick questions or understand needs for additional services",
            pro: `<i class="bi bi-check"></i>`,
            qck: `<i class="bi bi-check"></i>`
        },
        {
            title: "Interactive Group Sessions on each Component",
            desc: "Quickly available live onboarding group sessions with available Q&A",
            pro: `<i class="bi bi-check"></i>`,
            qck: `<i class="bi bi-check"></i>`
        },
        {
            title: "SME Consultant led sessions",
            desc: "Kaseya Endpoint Certified Expert for your consulting engagements",
            pro: `<i class="bi bi-check"></i>`,
            qck: `<i class="bi bi-check"></i>`
        },
        {
            title: "Certified Administrator Course",
            desc: "Kaseya University Course focused on Kaseya 365 Integrations",
            pro: `<i class="bi bi-check"></i>`,
            qck: `<i class="bi bi-check"></i>`
        },
    ]
    const hrSolutionColor = [
        {
            id: "#rmm-sol, .hr-rmm-color",
            color: "#0059b3"
        },
        {
            id: "#security-sol, .hr-sec-color",
            color: "#515151"
        },

    ]

    return {
        MapPosition: mapPosition,
        MapTitle: mapTitle,
        Form: form,
        MethodType: methodType,
        Url: url,
        ElemTypeObj: elemTypeObj,
        Message: message,
        WebButton: webButton,
        GrpElemHolder: grpElemHolder,
        HtmlTagList: htmlTagList,
        KeyChecker: keyChecker,
        AppendElementIds: appendElementIds,
        AppendElementTag:  appendedElementTag,
        K365IncludeTabs: k365IncludeTabs,
        K365OnboardingCard: k365OnboardingCard,
        HrSolutionColor: hrSolutionColor
    }
}();