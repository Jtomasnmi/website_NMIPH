let constant = (function () {
  let mapPosition = {
    lat: 14.5519,
    lng: 121.0181,
  };

  let mapTitle = {
    title:
      "Raha Sulayman Bldg. 108 Benavidez St., Legaspi Village, Makati City",
  };

  let form = {
    clientFormId: "frmClientContactRegistrationForm",
    companyFormId: "frmCompanyDetailForm",
    companyProfileDetailFormId: "frmCompanyProfileDetailForm",
    companyNewsDetailFormId: "frmCompanyNewsDetailForm",
  };

  let methodType = {
    Post: "POST",
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
    footerDetail: "controller/footerdetail.php",
    companycoreValuesDetail: "controller/corevalues.php",
  };

  let message = {
    dropMsgSuccess:
      "Message was successfully submitted and sent an email confirmation, thank you.",
    dropMsgError: "Registration Failed!",
  };

  let webButton = {
    btnInsertData: "btnInsertData",
  };

  let grpElemHolder = {
    clientDetail: "grpClientDetail",
    messageDetail: "grpClientMesage",
  };

  let keyChecker = {
    dCoreValues: "DCoreValues",
    cvData: "CVData",
    fdDescription: "FDDescription",
  };

  let appendElementIds = {
    dCoreValueList: "DCoreValueList",
    fdDescriptionList: "FDDescriptionList",
  };
  let solutions = [
    "rmm-endpoint-mod",
    "security-mod",
    "backup-dr-mod",
    "it-operations-mod",
    "it-risk-management-mod",
    "networking-mod",
    "k365-content-mod",
    "k365-user-mod",
    "get-demo-mod",
    "news-mod",
    "profile-mod",
    "contact-form-mod",
  ];

  const htmlTagList = ["h2", "h3", "h4", "a", "p", "ul"];

  const elemTypeObj = ["input", "textarea"];

  let appendedElementTag = {
    li: "li",
    p: "p",
  };

  const footerNav = [
    "#solutions",
    "#news",
    "#company",
    "#privacy-policy",
    "#terms-conditions",
  ];

  const k365IncludeTabs = [
    {
      id: "#pills-manage",
      label: "pills-manage-tab",
      img: "assets/img/nmi-k-365/k365-manage.png",
      iconClass: "bi-person-fill-gear",
      title: "Manage",
      description: `Streamline IT management with advanced remote monitoring and maintenance solutions. These tools simplify IT operations by offering comprehensive oversight of endpoints, networks, and cloud services. 
            With real-time monitoring, automated tasks, and efficient troubleshooting, our solutions enable proactive issue resolution, minimizing downtime and maintaining peak performance.
            Explore intuitive dashboards and reporting for a clear view of your IT landscape, reducing operational costs and bolstering security, all while enhancing end-user support and service.
            `,
    },
    {
      id: "#pills-secure",
      label: "pills-secure-tab",
      img: "assets/img/nmi-k-365/k365-secure.png",
      iconClass: "bi-lock-fill",
      title: "Secure",
      description: `Streamline IT management with advanced remote monitoring and maintenance solutions. These tools simplify IT operations by offering comprehensive oversight of endpoints, networks, and cloud services. 
            With real-time monitoring, automated tasks, and efficient troubleshooting, our solutions enable proactive issue resolution, minimizing downtime and maintaining peak performance.
            
            Explore intuitive dashboards and reporting for a clear view of your IT landscape, reducing operational costs and bolstering security, all while enhancing end-user support and service.
            `,
    },
    {
      id: "#pills-backup",
      label: "pills-backup-tab",
      img: "assets/img/nmi-k-365/k365-backup.png",
      iconClass: "bi-cloud-arrow-up-fill",
      title: "Backup",
      description: `Streamline IT management with advanced remote monitoring and maintenance solutions. These tools simplify IT operations by offering comprehensive oversight of endpoints, networks, and cloud services. 
            With real-time monitoring, automated tasks, and efficient troubleshooting, our solutions enable proactive issue resolution, minimizing downtime and maintaining peak performance.
            
            Explore intuitive dashboards and reporting for a clear view of your IT landscape, reducing operational costs and bolstering security, all while enhancing end-user support and service.
            `,
    },
  ];
  const k365OnboardingCard = [
    {
      title: "Dedicated Project Manager",
      desc: "Single Project Manager for accountability and escalations",
      pro: `<i class="bi bi-check"></i>`,
      qck: `<i class="bi bi-check"></i>`,
    },
    {
      title: "Self Guided Enablement in Product",
      desc: "In Product implementation walkthrough steps and videos",
      pro: `<i class="bi bi-check"></i>`,
      qck: `<i class="bi bi-check"></i>`,
    },
    {
      title: "Integration Coverage",
      desc: "Integration coverage on all components via Group and Consulting sessions",
      pro: `<i class="bi bi-check"></i>`,
      qck: `<i class="bi bi-check"></i>`,
    },
    {
      title: "Post Implementation Technical Account Review",
      desc: "Dedicated 30 minute review sessions to address quick questions or understand needs for additional services",
      pro: `<i class="bi bi-check"></i>`,
      qck: `<i class="bi bi-check"></i>`,
    },
    {
      title: "Interactive Group Sessions on each Component",
      desc: "Quickly available live onboarding group sessions with available Q&A",
      pro: `<i class="bi bi-check"></i>`,
      qck: `<i class="bi bi-check"></i>`,
    },
    {
      title: "SME Consultant led sessions",
      desc: "Kaseya Endpoint Certified Expert for your consulting engagements",
      pro: `<i class="bi bi-check"></i>`,
      qck: `<i class="bi bi-check"></i>`,
    },
    {
      title: "Certified Administrator Course",
      desc: "Kaseya University Course focused on Kaseya 365 Integrations",
      pro: `<i class="bi bi-check"></i>`,
      qck: `<i class="bi bi-check"></i>`,
    },
  ];
  const hrSolutionColor = [
    {
      id: "#rmm-sol",
      color: "#0059b3",
    },
    {
      id: "#security-sol",
      color: "#000000",
    },
    {
      id: "#backup-sol",
      color: "#1eafaf",
    },
    {
      id: "#audit-sol",
      color: "#cf6605",
    },
    {
      id: "#compliance-sol",
      color: "#049547",
    },
    {
      id: "#service-sol",
      color: "#4e6d8d",
    },
    {
      id: "#itdocs-sol",
      color: "#b34975",
    },
  ];

  const k365EndpointUserBanner = [
    {
      logo: "./assets/img/nmi-k-365/k365-endpoint.png",
      desc: "The Complete Package For Your Endpoint",
      btnLabel: "Explore Kaseya 365 Endpoint",
      targetModal: "k365-content-modal",
      packages: [
        "RMM",
        "Patch Management",
        "Endpoint Detection & Response",
        "Anti Virus",
        "Ransomeware Detection",
        "Endpoint Backup",
        "Manage Detection & Response",
      ],
    },
    {
      logo: "./assets/img/nmi-k-365/k365-user.png",
      desc: "Fortified Further Your Cyber Landscape",
      btnLabel: "Explore Kaseya 365 User",
      targetModal: "k365-user-modal",
      packages: [
        "Anti-Phishing",
        "User Awareness Training",
        "User Susceptibility Testing",
        "Dark Web  Monitoring",
        "Saas Application Management",
        "Saas Event Alerting",
        "Automatic Saas Account Locking",
        "Microsoft 365",
        "Google Workplace Backup",
      ],
    },
    {
      logo: "./assets/img/nmi-k-365/k365-ops.png",
      desc: "Top Performance Through AI-Driven Authomation",
      btnLabel: "Explore Kaseya 365 Ops",
      targetModal: "k365-ops-modal",
      packages: [
        "Professional Services Automation",
        "Billing & Accounts Receivable",
        "Qouting & Procurement",
        "Network Discovery & Password Rotation",
        "IT Collaboration",
        "Quarterly Business Reviews",
        "Executive Reports",
      ],
    },
  ];

  let solutionsBanner = [
    {
      targetModal: "#rmm-endpoint-modal",
      label: "Endpoint Management",
      description:
        "Take control of your IT environment from anywhere with intuitive solutions that adapt to your needs.",
      types: [
        {
          title: "Remote monitoring and management (RMM)",
          content:
            "Monitor, patch and support every endpoint from a unified console. Resolve issues faster and keep devices secure with powerful remote servicing automation.",
          icon: "hgi hgi-stroke hgi-tv-smart",
        },
        {
          title: "Network operations center (NOC) services",
          content:
            "Offload routine IT tasks to a 24/7 expert team. Free up internal resources for strategic initiatives with round-the-clock monitoring and support coverage.",
          icon: "hgi hgi-stroke hgi-neural-network",
        },
        {
          title: "Network performance monitoring",
          content:
            "Track device health across your network, identify slowdowns, catch issues early and uphold peak-performance of business-critical systems at all times.",
          icon: "hgi hgi-stroke hgi-laptop-performance",
        },
      ],
    },
    {
      targetModal: "#backup-dr-modal",
      label: "Backup And Recovery",
      description:
        "Protect your data effortlessly, regardless of where it lives",
      types: [
        {
          title: "Business continuity and disaster recovery (BCDR)",
          content:
            "Keep business running through any outage. Back up entire systems and restore instantly to recover operations after ransomware, disasters or hardware failure. ",
          icon: "hgi hgi-stroke hgi-data-recovery",
        },
        {
          title: "Endpoint backup",
          content:
            "Protect desktops, laptops, servers and VMs from downtime and data loss. Back up files directly from endpoints to recover quickly, no matter where devices live.",
          icon: "hgi hgi-stroke hgi-cloud-upload",
        },
        {
          title: "SaaS backup",
          content:
            "Secure data across your Microsoft 365, Google Workspace and Salesforce apps. Automatically back up collaboration and sales data to defend against corruption. ",
          icon: "hgi hgi-stroke hgi-laptop-cloud",
        },
        {
          title: "Cloud backup",
          content:
            "Fortify essential business data across cloud environments, like Azure and AWS, by backing up workloads with flexible, secure and scalable storage options.",
          icon: "hgi hgi-stroke hgi-cloud-saving-done-02",
        },
      ],
    },
    {
      targetModal: "#security-modal",
      label: "Security",
      description:
        "Protect your organization with layered security across cloud, endpoints, networks and users in a single solution.",
      types: [
        {
          title: "Endpoint detection and response (EDR) ",
          content:
            "Secure every endpoint with cloud-based, behavioral threat detection and rapid response to stop advanced, emerging threats before they impact your business.",
          icon: "hgi hgi-stroke hgi-radar-02",
        },
        {
          title: "Managed detection and response (MDR) ",
          content:
            "Deploy 24/7, continuous threat detection and response backed by expert analysts who actively monitor and mitigate risks across your entire IT ecosystem. ",
          icon: "hgi hgi-stroke hgi-sharp hgi-computer-settings",
        },
        {
          title: "Cloud detection and response (CDR) ",
          content:
            "Continuously monitor user behaviour and system activity across SaaS platforms to detect anomalies early and take fast, informed action before risks escalate. ",
          icon: "hgi hgi-stroke hgi-sharp hgi-computer-cloud",
        },
        {
          title: "Antivirus software",
          content:
            "Use next-generation threat prevention powered by AI to block zero-day attacks and polymorphic threats before they can disrupt or damage your operations.",
          icon: "hgi hgi-stroke hgi-computer-protection",
        },
        {
          title: "Security awareness training ",
          content:
            "Educate end users to recognize phishing, social engineering, and other threats, transforming your workforce into an active and informed security defense layer. ",
          icon: "hgi hgi-stroke hgi-sharp hgi-ai-security-01",
        },
        {
          title: "Anti-phishing software",
          content:
            "Automatically detect, filter and neutralize phishing attempts in real time with AI to prevent malicious emails from reaching inboxes and infiltrating systems.",
          icon: "hgi hgi-stroke hgi-sharp hgi-ai-laptop",
        },
        {
          title: "Dark web monitoring ",
          content:
            "Actively scan the dark web for compromised credentials and exposed data to stop breaches and account takeovers before they threaten your business security. ",
          icon: "hgi hgi-stroke hgi-sharp hgi-anonymous",
        },
        {
          title: "Vulnerability scanning ",
          content:
            "Consistently detect, prioritize, and address vulnerabilities across your network to close critical gaps and reduce exposure before they can be exploited. ",
          icon: "hgi hgi-stroke hgi-iris-scan",
        },
        {
          title: "Network penetration testing ",
          content:
            "Simulate real-world attacks using automated network penetration tests to proactively test your security controls year-round, uncover exploitable vulnerabilities before attackers do and improve your overall security posture.",
          icon: "hgi hgi-stroke hgi-cellular-network",
        },
      ],
    },
    {
      targetModal: "#it-operations-modal",
      label: "IT Operations",
      description:
        "Automate workflows, optimize service delivery and streamline the entire quote-to-cash process to reduce friction and boost productivity.",
      types: [
        {
          title: "Professional services automation (PSA) ",
          content:
            "Optimize IT service delivery, manage resources and align teams under one centralized solution to drive performance, profitability and business visibility.",
          icon: "hgi hgi-stroke hgi-power-service",
        },
        {
          title: "IT documentation ",
          content:
            "Consolidate critical IT knowledge into a connected, structured hub that helps teams access, manage and maintain asset and credential information effortlessly.",
          icon: "hgi hgi-stroke hgi-document-code",
        },
        {
          title: "IT strategic planning",
          content:
            "Build winning IT roadmaps with repeatable planning tools that turn technical insights into business-aligned strategies for stronger organizational outcomes. ",
          icon: "hgi hgi-stroke hgi-git-pull-request-closed",
        },
        {
          title: "IT collaboration portal",
          content:
            "Bridge the gap between IT and end users with secure, convenient access to documentation, passwords, and SOPs that enable transparency and self-sufficiency. ",
          icon: "hgi hgi-stroke hgi-user-switch",
        },
        {
          title: "Network discovery and mapping",
          content:
            "Automatically generate contextual diagrams to visually represent network devices and users, providing in-depth and real-time awareness of your IT infrastructure. ",
          icon: "hgi hgi-stroke hgi-rss-connected-01",
        },
        {
          title: "MSP quoting and procurement",
          content:
            "Build proposals and finalize deals faster with integrated tools that simplify approvals, reduce steps, and deliver a seamless buying experience for your clients. ",
          icon: "hgi hgi-stroke hgi-pay-by-check",
        },
        {
          title: "MSP billing and collections ",
          content:
            "Automate scheduled invoicing, streamline payments and eliminate collections stress to protect cash flow and reclaim valuable time across your finance operations.",
          icon: "hgi hgi-stroke hgi-invoice",
        },
      ],
    },
    {
      targetModal: "#it-risk-management-modal",
      label: "IT Risk Management",
      description:
        "Protect your organization with layered security across cloud, endpoints, networks and users in a single solution.",
      types: [
        {
          title: "Network assessments ",
          content:
            "Collect data across diverse environments, identify risks and generate reports that translate technical scans into clear, actionable next steps.",
          icon: "hgi hgi-stroke hgi-canvas",
        },
        {
          title: "Vulnerability scanning",
          content:
            "Uncover internal and external weak points before they’re exploited and quickly prioritize remediation to reinforce protection across every network endpoint.",
          icon: "hgi hgi-stroke hgi-search-focus",
        },
        {
          title: "IT change detection",
          content:
            "Catch unauthorized or risky network changes in real time to maintain critical infrastructure integrity and reduce threats that firewalls and filters can’t detect.",
          icon: "hgi hgi-stroke hgi-exchange-01",
        },
        {
          title: "Network penetration testing",
          content:
            "Run automated network penetration tests to identify exploitable vulnerabilities, proactively reduce risk and provide actionable reports to meet your compliance requirements.",
          icon: "hgi hgi-stroke hgi-security-wifi ",
        },
        {
          title: "Compliance management",
          content:
            "Monitor adherence to evolving regulatory and industry requirements, and keep all policies, controls and audits organized in one unified, easy-to-follow workflow.",
          icon: "hgi hgi-stroke hgi-arrange ",
        },
      ],
    },
    {
      targetModal: "#networking-modal",
      label: "Networking",
      description:
        "Provide seamless connectivity, reduce downtime and keep your team productive.",
      types: [
        {
          title: "Wi-Fi access points",
          content:
            "Deliver secure and efficient wireless coverage with seamless roaming, reduced upkeep and a consistently strong user experience across every environment.",
          icon: "hgi hgi-stroke hgi-wifi-01",
        },
        {
          title: "Network switches",
          content:
            "Enable fast, secure and reliable device connectivity for your entire network with Layer-3 switches and Power over Ethernet on every port.",
          icon: "hgi hgi-stroke hgi-router",
        },
        {
          title: "Edge routers",
          content:
            "Ensure business continuity with an all-in-one appliance delivering integrated cellular failover, wireless connectivity and firewall security.",
          icon: "hgi hgi-stroke hgi-external-drive",
        },
        {
          title: "Secure access service edge (SASE)",
          content:
            "Securely connect remote and hybrid workers and protect cloud applications with unified SASE, including zero-trust access, cloud firewall, per-user security policy and reporting capabilities.",
          icon: "hgi hgi-stroke hgi-shield-user",
        },
        {
          title: "Power distribution units (PDUs)",
          content:
            "Maintain reliable uptime with intelligent monitoring and remote management of individual power outlets to fix problems before tickets arrive.",
          icon: "hgi hgi-stroke hgi-share-08",
        },
        {
          title: "Network performance monitoring",
          content:
            "Obtain 365 visibility of network infrastructure and services with zero-touch provisioning and integrated monitoring, helping you detect and respond to issues before disruption.",
          icon: "hgi hgi-stroke hgi-rocket-01",
        },
        {
          title: "Network operations center (NOC) services",
          content:
            "Delegate day-to-day network upkeep to a 24/7 expert team. Refocus your IT staff on strategic growth with continuous monitoring and infrastructure support.",
          icon: "hgi hgi-stroke hgi-internet-antenna-02",
        },
      ],
    },
  ];

  const whyKaseyaContent = [
    {
      icon: "bi bi-wrench-adjustable",
      title: "Purpose-Built for Multi-function IT Professionals",
      description:
        "Our products are built to serve the over-worked, under-resourced, under-funded and under-appreciated IT generalists with a robust yet simple set of tools.",
    },
    {
      icon: "bi bi-diagram-2",
      title: "Force Multiply Your Team",
      description:
        "By prioritizing our product integration releases, you can count on automation and workflow efficiencies (built to last) that propel your team’s abilities to superhuman levels.",
    },
    {
      icon: "bi bi-coin",
      title: "Priced Right",
      description:
        "Small IT teams like yours don’t have the luxury of massive budgets. We strive to price our products roughly 1/3 less than competing solutions, so you can do MORE with LESS.",
    },
  ];

  const whatHappenNextContent = [
    {
      icon: "bi bi-1-square",
      title: "Ready. Set. Demo!",
      description:
        "After you fill out the form, expect a quick (15 minute) discovery call to identify your needs so that we can tailor the demo to what matters most for you.",
    },
    {
      icon: "bi bi-2-square",
      title: "Line Up The Perfect Plan",
      description:
        "We’ll help you match your technical and business requirements with the right terms, pricing, onboarding strategy and customer support — a plan built for long-term success.",
    },
    {
      icon: "bi bi-3-square",
      title: "Shorten Your Time To Value",
      description:
        "Our Professional Services team will help you onboard quickly, with a focus on deploying the use cases that provide the most value to you.",
    },
  ];

  const getDemoSolution = [
    {
      id: 1,
      name: "RMM/Endpoint Management",
      subProduct: [2, 3, 4, 5],
      isParent: true,
      alias: "",
    },
    {
      id: 2,
      name: "Kaseya VSA",
      subProduct: [12, 13],
      isParent: false,
      alias: "",
    },
    {
      id: 3,
      name: "Datto RMM",
      subProduct: [21],
      isParent: false,
      alias: "",
    },
    {
      id: 4,
      name: "Kaseya 365 Express",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 5,
      name: "Kaseya 365 PRO",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 6,
      name: "Audit & Compliance",
      subProduct: [7, 8],
      isParent: true,
      alias: "",
    },
    {
      id: 7,
      name: "IT Risk Assessment",
      subProduct: [],

      isParent: false,
      alias: "",
    },
    {
      id: 8,
      name: "IT Compliance",
      subProduct: [11],
      isParent: false,
      alias: "",
    },
    {
      id: 9,
      name: "Security",
      subProduct: [10, 11, 12, 13, 14, 15, 16, 17],
      isParent: true,
      alias: "",
    },
    {
      id: 10,
      name: "Email Security",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 11,
      name: "Security Awareness Training",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 12,
      name: "Endpoint Detection & Response",
      subProduct: [20, 23],
      isParent: false,
      alias: "",
    },
    {
      id: 13,
      name: "Managed SOC",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 14,
      name: "Networking Penetration Testing",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 15,
      name: "Datto Antivirus",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 16,
      name: "Kaseya 365 User",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 17,
      name: "Saas Alerts",
      subProduct: [],
      isParent: false,
      alias: "",
    },

    {
      id: 18,
      name: "Unified Backup",
      subProduct: [],
      isParent: true,
      alias: "Unitrends",
    },
    {
      id: 19,
      name: "IT Operations",
      subProduct: [20, 21, 22, 23],
      isParent: true,
      alias: "",
    },
    {
      id: 20,
      name: "IT Documentation",
      subProduct: [25],
      isParent: false,
      alias: "",
    },
    {
      id: 21,
      name: "PSA/Service Desk",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    {
      id: 22,
      name: "Billing & Collections",
      subProduct: [],
      isParent: false,
      alias: "",
    },
    { id: 23, name: "vCIO", subProduct: [], isParent: false, alias: "" },
    {
      id: 24,
      name: "MSP Enablement",
      subProduct: [26, 27, 28],
      isParent: true,
      alias: "",
    },
    {
      id: 25,
      name: "Networking",
      subProduct: [],
      isParent: true,
      alias: "Datto",
    },
    { id: 26, name: "TruPeer", subProduct: [], isParent: false, alias: "" },
    { id: 27, name: "myItProcess", subProduct: [], isParent: false, alias: "" },
    {
      id: 28,
      name: "Powered Service Pro",
      subProduct: [],
      isParent: false,
      alias: "",
    },
  ];

  let endpointQtyManage = [
    {
      name: "0-100",
    },
    {
      name: "101-250",
    },
    {
      name: "251-500",
    },
    {
      name: "501-1000",
    },
    {
      name: "1001-2500",
    },
    {
      name: "2501+",
    },
  ];

  let automationProp = [
    {
      id: "_automationEdr",
      tab: "pills-edr-tab",
    },
    {
      id: "_automationEvents",
      tab: "pills-events-tab",
    },
    {
      id: "_automationPolicy",
      tab: "pills-policy-tab",
    },
    {
      id: "_automationPatching",
      tab: "pills-patching-tab",
    },
    {
      id: "_automationBackIns",
      tab: "pills-backIns-tab",
    },
    {
      id: "_automationRocketcyber",
      tab: "pills-rocketCyber-tab",
    },
    {
      id: "_automationHealthStatus",
      tab: "pills-healthStatus-tab",
    },
  ];

  let footerInformation = ["privacy-policy", "terms-conditions"];

  let requiredProductLabel = {
    id: "select-product-selector",
    selectId: "main-select",
    label: "Please identify which product suite you are interested in:",
  };

  let optionalProductLabel = {
    id: "select-sub-product-selector",
    label: "Please identify your product interest",
  };

  let manageEndpointLabel = {
    id: "extra-element-selector",
    selectId: "extra-select",
    label: "How many endpoints do you manage?",
  };

  let checkBoxLabel = {
    id: "checkbox-container-selector",
    description: "Yes, I agree to receive promotional emails from",
  };

  let certificateSrc = [
    {
      name: "certificate-1",
      path: "assets/svg/demo-certificate-1.svg",
      class: "certificateImg ratio ratio-1x1 object-fit-contain",
    },
    {
      name: "certificate-2",
      path: "assets/svg/demo-certificate-2.svg",
      class: "certificateImg ratio ratio-1x1 object-fit-contain",
    },
    {
      name: "certificate-3",
      path: "assets/svg/demo-certificate-3.svg",
      class: "certificateImg ratio ratio-1x1 object-fit-contain",
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
    AppendElementTag: appendedElementTag,
    K365IncludeTabs: k365IncludeTabs,
    K365OnboardingCard: k365OnboardingCard,
    HrSolutionColor: hrSolutionColor,
    FooterNav: footerNav,
    Solutions: solutions,
    K365EndpointUserBanner: k365EndpointUserBanner,
    SolutionsBanner: solutionsBanner,
    WhyKaseyaContent: whyKaseyaContent,
    WhatHappenNextContent: whatHappenNextContent,
    GetDemoSolution: getDemoSolution,
    AutomationProp: automationProp,
    FooterInformation: footerInformation,
    RequiredProductLabel: requiredProductLabel,
    OptionalProductLabel: optionalProductLabel,
    CertificateSrc: certificateSrc,
    EndpointQtyManage: endpointQtyManage,
    ManageEndpointLabel: manageEndpointLabel,
    CheckBoxLabel: checkBoxLabel,
  };
})();
