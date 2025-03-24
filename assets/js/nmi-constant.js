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
    let solutions = [
        "rmm-endpoint-mod",
        "security-mod",
        "backup-dr-mod",
        "audit-mod",
        "compliance-mod",
        "servicedesk-mod",
        "it-documentation-mod",
        "k365-content-mod",
        "k365-user-mod"
      ];

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

    const footerNav = [
        "#solutions",
        "#news",
        "#company",
        "#privacy-policy",
        "#terms-conditions"
    ]
    

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
            id: "#rmm-sol",
            color: "#0059b3"
        },
        {
            id: "#security-sol",
            color: "#000000"
        },
        {
            id: "#backup-sol",
            color: "#1eafaf"
        },
        {
            id: "#audit-sol",
            color: "#cf6605"
        },
        {
            id: "#compliance-sol",
            color: "#049547"
        },
        {
            id: "#service-sol",
            color: "#4e6d8d"
        },
        {
            id: "#itdocs-sol",
            color: "#b34975"
        },

    ]

    const rmmSolution = {
        selector: ".rmm-card",
        video: {
            thumb: "assets/img/nmi_solutions/Solutions-Thumbnail/rmm-thumb.jpg",
            source: "assets/videos/rmm.mp4",
            title: "The Pillar of the Platform",
            desc: "VSA from Kaseya is purpose-built to respond to the growth in endpoints. Designed to save time and boost tasks, Kaseya VSA unites functions like endpoint management with the rest of your IT workflow. Rather than a siloed tool within a sea of solutions from different vendors, with different interfaces, and different technologies, Kaseya’s Suite ties together everything you need to get IT done."
        },
        card: [
            {
                title: "COMPREHENSIVE",
                description: "Manage all your endpoints, regardless of type, through a single pane of glass- one unified interface."
            },
            {
                title: "AFFORDABLE",
                description: "Get the benefits of 3 IT TOOLS in ONE SOLUTION; Monitor, Patch, and Automate with Kaseya’s straightforward and cost-effective peer-to-peer integration."
            },
            {
                title: "INTEGRATED",
                description: "Connect directly with other Kaseya Solutions, allowing you to update, backup, and oversee your systems and networks in one uninterrupted workflow."
            },
        ]
    }
    const securitySolution = {
        selector: ".security-card",
        video: {
            thumb: "assets/img/nmi_solutions/Solutions-Thumbnail/security-thumb.jpg",
            source: "assets/videos/security.mp4",
            title: "Secure from All Sides",
            desc: "From comprehensive Dark Web Monitoring, anti-phishing systems, and internal threat detection-have an intelligent security stack that provides a complete blanket of protection. All unified and integrated into a single platform for easier threat mitigation and interference."
        },
        card: [
            {
                title: "ACCOUNTABLE",
                description: "Deflect new cyberattacks through an updated and integrated security suite that not only guarantees your security but complies to the global cybersecurity standards HIPAA, PCI-DSS, CJIS, FFIECC, and other data privacy rules."
            },
            {
                title: "INNOVATIVE",
                description: "Almost 90% of security breaches are caused by human error. Keep your I.T. Teams sharp and vigilant with comprehensive security awareness trainings, simulation kits, and tech updates on the latest cyber news and cybercrime trends."
            },
            {
                title: "INTELLIGENT",
                description: "Through Kaseya’s AI-powered data analyzing system, create a reliable record of trusted email profiles and further detect and flag any malicious emails"
            },
        ]
    }
    const backupSolution = {
        selector: ".backup-card",
        video: {
            thumb: "assets/img/nmi_solutions/Solutions-Thumbnail/backupdr-thumb.jpg",
            source: "assets/videos/backup.mp4",
            title: "All-Around Data Protection",
            desc: "Kaseya’s Unified Backup Suites covers local and cloud backup to ensure that the entire spectrum of business operations is protected both on-premises with the appliance, or in the cloud. Get the benefit of a complete disaster recovery plan, catered to your needs."
        },
        card: [
            {
                title: "SCALABLE",
                description: "Protect data ranging from 2 TB – 2 EB and manage appliances at multiple locations from a single intuitive user interface have three flexible options for data management; from cloud-based, on-premises, to application-based data recovery, we have options tailored to fit your enterprise needs."
            },
            {
                title: "RESET",
                description: "Build your best security practice by having a fresh, reliable backup. Stay compliant, overcome security breaches, or simply maintain business through the help of Kaseya’s backup and recovery solutions that gives you the option of having a rewind button."
            },
            {
                title: "RELIABLE",
                description: "Maximize your uptime and instantly recover your backups using an appliance-based solution that minimizes downtime. With automated backup testing, ensure that your backups will be ready when disaster strikes."
            },
        ]
    }
    const auditSolution = {
        selector: ".audit-card",
        video: {
            thumb: "assets/img/nmi_solutions/Solutions-Thumbnail/audit-thumb.jpg",
            source: "assets/videos/audit.mp4",
            title: "Complete Visibility",
            desc: "Kaseya’s Network Detective is the industry-leading IT assessment tool that goes way beyond just network discovery and documentation. Complete Visibility provides real “value-added intelligence” to your IT Assessments. Our suites compare multiple data points to uncover hard-to-detect issues, measure risk, provide recommended fixes, and track remediation progress."
        },
        card: [
            {
                title: "SCAN",
                description: "Gain 100% visibility on all your assets and get progressive status reports that easily translate into easy-to-understand tables and graphs showing monthly improvements to their network."
            },
            {
                title: "DISCOVER",
                description: "Uncover all hidden threats or possible risks before it hits your system and create a workflow that easily addresses all perimeters of your security."
            },
            {
                title: "ENFORCE",
                description: "Administer security drills more easily with a reliable scanning and assessment tool. Target and resolve potential risks at its root, never waste time on false threats and redundant security alerts"
            },
        ]
    }
    const complianceSolution = {
        selector: ".compliance-card",
        video: {
            thumb: "assets/img/nmi_solutions/Solutions-Thumbnail/compliance-thumb.jpg",
            source: "assets/videos/compliance.mp4",
            title: "Automatic Compliance",
            desc: "Kaseya Compliance Suite and Kaseya Compliance Manager simplifies identification, reporting, and consistency of compliance protocols- from HIPAA, GDPR, NIST, and other regulations."
        },
        card: [
            {
                title: "AUTOMATED",
                description: "Through scanning both public and internal environments, determine and meet compliance requirements and perform automated compliance assessments with ease."
            },
            {
                title: "FOOLPROOF",
                description: "Maintain and prove compliance easily with the built-in Compliance Manager feature that will help you rest easy knowing that your consumer data is safe and secured without any risk."
            },
            {
                title: "SIMPLE",
                description: "Through the web-based management portal, and built-in compliance document generation, audit and document compliance from a single pane of glass."
            },
        ]
    }
    const servicedeskSolution = {
        selector: ".service-card",
        video: {
            thumb: "assets/img/nmi_solutions/Solutions-Thumbnail/servicedesk-thumb.jpg",
            source: "assets/videos/servicedesk.mp4",
            title: "Visibility Across Your Entire Business",
            desc: "Centralize business operations and make data-driven decisions to improve service, productivity and profitability with open-architecture and APIs. Enable tight integration with 200+ industry-leading tools to maximize business efficiency while eliminating human error."
        },
        card: [
            {
                title: "EFFICIENT",
                description: "Get powerful analytics and intuitive dashboards provide actionable business insights for every role."
            },
            {
                title: "INTUITIVE",
                description: "Open-architecture and APIs enable tight integration with 200+ industry-leading tools to maximize business efficiency."
            },
            {
                title: "INTEGRATED",
                description: "Run your entire business, from ticketing, project management, quoting to billing, and more, all in a modern and intuitive platform."
            },
        ]
    }
    const itdocsSolution = {
        selector: ".itdocs-card",
        video: {
            thumb: "assets/img/nmi_solutions/Solutions-Thumbnail/itdocs-thumb.jpg",
            source: "assets/videos/itdocs.mp4",
            title: "IT Glue Remembers Everything",
            desc: "IT Glue is integrated deeply across the entire VSA Platform, so you can get the information that you need, when you need it, without having to leave other tasks that you are trying to complete."
        },
        card: [
            {
                title: "DOCUMENT",
                description: "Effectively record all SSLs, passwords, and patches with effective documentations with an immutable audit trail and password management engine, fully integrated and linked with all your accounts and transactions"
            },
            {
                title: "SECURE",
                description: "With globally accredited SOC 2 compliance granted by the American Institute of CPAs (AICPA), guaranteed to implement the five trust service principles—security, availability, processing integrity, confidentiality, and privacy, you can have confidence in the security of your information and documentation."
            },
            {
                title: "LINKED",
                description: "We’ve integrated IT Glue deeply across our entire platform, so you can get the information you need, when and where you need it, without having to leave the task you’re trying to complete."
            },
        ]
    }

    const k365EndpointUserBanner = [
        {
            logoSelector: "endpoint-k365-selector",
            title: "Kaseya 365 Endpoint",
            desc: "Everything Needed to Manage, Secure and Backup Endpoints",
            btnLabel: "Explore Kaseya 365 Endpoint",
            targetModal: "k365-content-modal",
            svgColor: "radial-gradient(40% 40% at 75% 12%,#5cc0ec 0%,rgba(92,236,205,0) 100%),radial-gradient(59.56% 57% at 49.45% 50.47%,rgba(1,198,190,0) 65%,rgba(1,198,190,.9) 100%)"
        },
        {
            logoSelector: "user-k365-selector",
            title: "Kaseya 365 User",
            desc: "Everything Needed to Manage, Secure and Backup Endpoints",
            btnLabel: "Explore Kaseya 365 User",
            targetModal: "k365-user-modal",
            svgColor: "radial-gradient(40% 40% at 75% 12%,#5ceca4,rgba(118,236,92,0) 100%),radial-gradient(59.56% 57% at 49.45% 50.47%,rgba(133,232,28,0) 65%,rgba(133,232,28,.9) 100%)"
        }
    ];

    const nmiSolution = [
        rmmSolution,
        securitySolution,
        backupSolution,
        auditSolution,
        complianceSolution,
        servicedeskSolution,
        itdocsSolution
    ];

    let solutionsBanner = [
        {
            img: "assets/img/nmi_solutions/Solutions-Menu/menu-icon-1.svg",
            targetModal: "#rmm-endpoint-modal",
            label: "Endpoint Management"
        },
        {
            img: "assets/img/nmi_solutions/Solutions-Menu/menu-icon-2.svg",
            targetModal: "#security-modal",
            label: "Security"
        },
        {
            img: "assets/img/nmi_solutions/Solutions-Menu/menu-icon-3.svg",
            targetModal: "#backup-dr-modal",
            label: "Backup & DR"
        },
        {
            img: "assets/img/nmi_solutions/Solutions-Menu/menu-icon-4.svg",
            targetModal: "#audit-modal",
            label: "Audit"
        },
        {
            img: "assets/img/nmi_solutions/Solutions-Menu/menu-icon-5.svg",
            targetModal: "#compliance-modal",
            label: "Compliance"
        },
        {
            img: "assets/img/nmi_solutions/Solutions-Menu/menu-icon-6.svg",
            targetModal: "#servicedesk-modal",
            label: "Service Desk"
        },
        {
            img: "assets/img/nmi_solutions/Solutions-Menu/menu-icon-7.svg",
            targetModal: "#it-documentation-modal",
            label: "IT Documentation"
        },
    ];

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
        HrSolutionColor: hrSolutionColor,
        NmiSolution: nmiSolution,
        FooterNav: footerNav,
        Solutions: solutions,
        K365EndpointUserBanner: k365EndpointUserBanner,
        SolutionsBanner: solutionsBanner
    }
}();