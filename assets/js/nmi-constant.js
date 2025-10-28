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
    getDemoForm: "frmGetDemoForm",
  };

  let methodType = {
    Post: "POST",
  };

  let url = {
    clientDetail: "controller/clientdetail.php",
    clientCompanyLocation: "controller/clientcompanylocation.php",
    companyDetail: "controller/companydetail.php",
    emailhostdetail: "controller/emailhostdetail.php",
    websitepage: "controller/websitepage.php",
  };

  let message = {
    dropMsgSuccess:
      "Message was successfully submitted and sent an email confirmation, thank you.",
    dropMsgError: "Registration Failed!",
    dropMsgProcessing:
      "Your data is being processed. Please wait for a moment.",
  };

  let webButton = {
    btnContactForm: "btnContactForm",
    btnDemoForm: "btnDemoForm",
  };

  let grpElemHolder = {
    clientDetail: "grpClientDetail",
    clientCompanyLocation: "grpClientCompLocation",
    demoDetail: "grpClientDemo",
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
  let modalId = [
    "rmm-endpoint-mod",
    "security-mod",
    "backup-dr-mod",
    "it-operations-mod",
    "it-risk-management-mod",
    "networking-mod",
    "kaseya365-endpoint-mod",
    "kaseya365-user-mod",
    "kaseya365-ops-mod",
    "get-demo-mod",
    "news-mod",
    "profile-mod",
    "careers-mod",
    "diversity-inclusivity-mod",
  ];

  let modalValue = [
    {
      id: [
        "#Platform #pl-kaseya365-endpoint-platform-modal",
        "#Footer #f-kaseya365-platform #kaseya365-platform-0",
      ],
      attribute: "data-bs-target",
      value: "#kaseya365-endpoint",
    },
    {
      id: [
        "#Platform #pl-kaseya365-user-platform-modal",
        "#Footer #f-kaseya365-platform #kaseya365-platform-1",
      ],
      attribute: "data-bs-target",
      value: "#kaseya365-user",
    },
    {
      id: [
        "#Platform #pl-kaseya365-ops-platform-modal",
        "#Footer #f-kaseya365-platform #kaseya365-platform-2",
      ],
      attribute: "data-bs-target",
      value: "#kaseya365-ops",
    },
    {
      id: [
        "#Solution #s-endpoint-management-card-modal",
        "#Footer #f-solution #solution-3",
      ],
      attribute: "data-bs-target",
      value: "#rmm-endpoint-modal",
    },
    {
      id: [
        "#Solution #s-backup-recovery-card-modal",
        "#Footer #f-solution #solution-4",
      ],
      attribute: "data-bs-target",
      value: "#backup-dr-modal",
    },
    {
      id: [
        "#Solution #s-security-card-modal",
        "#Footer #f-solution #solution-5",
      ],
      attribute: "data-bs-target",
      value: "#security-modal",
    },
    {
      id: [
        "#Solution #s-it-operations-card-modal",
        "#Footer #f-solution #solution-6",
      ],
      attribute: "data-bs-target",
      value: "#it-operations-modal",
    },
    {
      id: [
        "#Solution #s-it-risk-management-card-modal",
        "#Footer #f-solution #solution-7",
      ],
      attribute: "data-bs-target",
      value: "#it-risk-management-modal",
    },
    {
      id: [
        "#Solution #s-networking-card-modal",
        "#Footer #f-solution #solution-8",
      ],
      attribute: "data-bs-target",
      value: "#networking-modal",
    },
    {
      id: ["#Footer #f-allrights-reserved #allrights-reserved-14"],
      attribute: "data-bs-target",
      value: "#terms-conditions",
    },
    {
      id: ["#Footer #f-allrights-reserved #allrights-reserved-15"],
      attribute: "data-bs-target",
      value: "#privacy-policy",
    },
    {
      id: ["#Footer #f-allrights-reserved #allrights-reserved-16"],
      attribute: "data-bs-target",
      value: "#diversity-inclusivity",
    },
  ];

  const htmlTagList = ["h2", "h3", "h4", "a", "p", "ul"];

  const elemTypeObj = ["input", "textarea", "select"];

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
      id: "kaseya365-endpoint-platform",
      packageListId: "pl-kaseya365-endpoint-platform",
      targetModal: "k365-content-modal",
    },
    {
      id: "kaseya365-user-platform",
      packageListId: "pl-kaseya365-user-platform",
      targetModal: "k365-user-modal",
    },
    {
      id: "kaseya365-ops-platform",
      packageListId: "pl-kaseya365-ops-platform",
      targetModal: "k365-ops-modal",
    },
  ];

  let solutionsBanner = [
    {
      id: "endpoint-management-card",
      targetModal: "#rmm-endpoint-modal",
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
      id: "backup-recovery-card",
      targetModal: "#backup-dr-modal",
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
      id: "security-card",
      targetModal: "#security-modal",
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
      id: "it-operations-card",
      targetModal: "#it-operations-modal",
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
      id: "it-risk-management-card",
      targetModal: "#it-risk-management-modal",
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
      id: "networking-card",
      targetModal: "#networking-modal",
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
      subProduct: [9, 3, 4, 5],
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
      id: "_rmm",
      tab: "pills-rmm",
      img: "./assets/img/nmi-k-365/k365-endpoint/endpointPill_rmm.png",
      title: "Remote Monitoring and Management (RMM)",
      description: "Get complete visibility and control over every endpoint.",
      isPro: false,
      product: [
        {
          name: "Datto RMM",
          link: "https://www.datto.com/products/rmm/",
        },
        {
          name: "VSA",
          link: "https://www.kaseya.com/products/rmm-software/",
        },
      ],
    },
    {
      id: "_patch_management",
      tab: "pills-patch-management",
      img: "./assets/img/nmi-k-365/k365-endpoint/endpointPill_patch.webp",
      title: "Patch Management",
      description:
        "Keep every device secure and up to date effortlessly with advanced software management",
      isPro: false,
      product: [
        {
          name: "VSA",
          link: "https://www.kaseya.com/products/rmm-software/",
        },
      ],
    },
    {
      id: "_antivirus",
      tab: "pills-antivirus",
      img: "./assets/img/nmi-k-365/k365-endpoint/endpointPill_antivirus.webp",
      title: "Antivirus",
      description:
        "Proactively protect your business from sophisticated cyberthreats with advance threat protection and global threat intelligence.",
      isPro: false,
      product: [
        {
          name: "Datto AV",
          link: "https://www.datto.com/products/antivirus-software/",
        },
      ],
    },
    {
      id: "_endpoint",
      tab: "pills-endpoint",
      img: "./assets/img/nmi-k-365/k365-endpoint/endpointPill_edr.webp",
      title: "Endpoint Detection & Response (EDR)",
      description:
        "Identify, contain and neutralize threats with intelligent endpoint protection.",
      isPro: false,
      product: [
        {
          name: "Datto EDR",
          link: "https://www.datto.com/products/antivirus-software/",
        },
      ],
    },
    {
      id: "_ransomeware",
      tab: "pills-ransomeware",
      img: "./assets/img/nmi-k-365/k365-endpoint/endpointPill_ransomeware.webp",
      title: "Ransomware Detection",
      description:
        "Prevent ransomware from gaining a foothold in your network with continuous monitoring and intelligent threat detection.",
      isPro: false,
      product: [
        {
          name: "Datto RMM",
          link: "https://www.datto.com/products/rmm/",
        },
        {
          name: "VSA",
          link: "https://www.kaseya.com/products/rmm-software/",
        },
      ],
    },
    {
      id: "_backup_auto",
      tab: "pills-backup_auto",
      img: "./assets/img/nmi-k-365/k365-endpoint/endpointPill_backup.png",
      title: "Endpoint Backup",
      description:
        "Worry less about data loss with automated, encrypted endpoint backups that optimize performance and enable quick recovery",
      isPro: false,
      product: [
        {
          name: "Datto Endpoint Backup",
          link: "https://www.datto.com/products/endpoint-backup/",
        },
      ],
    },
    {
      id: "_mdr",
      tab: "pills-mdr",
      img: "./assets/img/nmi-k-365/k365-endpoint/endpointPill_mdr.webp",
      title: "Managed detection & response (MDR)",
      description:
        "Get advanced threat protection with security experts who monitor, detect and respond 24/7.",
      isPro: true,
      product: [{ name: "RocketCyber", link: "https://www.rocketcyber.com/" }],
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

  const phLocationId = {
    CountryID: "Contact #country-select",
    regionID: "Contact #region-select",
    provinceID: "Contact #province-select",
    municipalityID: "Contact #municipality-select",
    barangayID: "Contact #barangay-select",
  };

  const k365EndpointPillsTab = {
    tabId: "v-pills-tab",
    contentId: "v-pills-tabContent",
  };

  const testimonialData = [
    {
      client: "Arman Pastrana",
      message: "Keep up the good service.",
      company: "BCC Global Solutions, Inc.",
      designation: "IT Manager",
    },
    {
      client: "Arnold Toledo",
      message:
        "The technical support services have been excellent so far. Thank you!",
      company: "Kawasaki Motors Phils. Corp.",
      designation: "Information Systems – Systems Engineering Supervisor",
    },
    {
      client: "Lyn Bautista",
      message:
        "We’re happy with how the engineers are handling things. They’re approachable and responsive.",
      company: "CARD MRI Information Technology, Inc.",
      designation: "Deputy Director for Data Center Operations",
    },
    {
      client: "Peter Panelo",
      message: "The technical support was very responsive.",
      company: "DEPDev",
      designation: "CO 1",
    },
    {
      client: "Peter William Chua",
      message:
        "The assigned technical support agent was able to resolve our issue. It did not take too much time before they provided the resolution.",
      company: "Ayala Land Malls Inc.",
      designation: "IT Associate Manager",
    },
    {
      client: "Dilma Ulasiman",
      message:
        "Thank you so much for your usual support, NMI team. Your responsiveness means a lot",
      company: "Phoenix Petroleum Philippines, Inc.",
      designation: "IT Application Support",
    },
  ];

  const specificClrField = ["PHILIPPINES"];
  const addBanner = "../assets/add_banner/NMICareersAddBanner.png";

  const emailTemplate = [
    {
      name: "Marketing",
      email: "nmidevs@gmail.com",
      body: "test Dev",
      subject: "A client contacting us",
    },
    {
      name: "Client",
      email: "",
      body: "test Client",
      subject: "Thank you for contacting NMI Support",
    },
  ];

  const toReplaceStr = [
    "Address",
    "Barangay",
    "Municipality",
    "Province",
    "FirstName",
    "LastName",
    "JobFunction",
    "CompName",
    "EmailAddress",
    "ContactNumber",
    "HostName",
  ];

  const perks = [
    {
      icon: "fa-solid fa-square-poll-vertical",
      title: "Growth & Learning",
      description:
        "Containuous training and certifications to keep your skills .",
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Career Advancement",
      description: "Clear paths to grow within the .",
    },
    {
      icon: "fa-solid fa-scale-unbalanced",
      title: "Work-Life Balance",
      description: "Flexible policies that value your time and well-being.",
    },
    {
      icon: "fa-solid fa-users",
      title: "Collaborative Culture",
      description: "A supportive team where ideas and innovation thrive.",
    },
    {
      icon: "fa-solid fa-folder-open",
      title: "Impactful Work",
      description: "Contribute to securing business across the Philippines.",
    },
    {
      icon: "fa-solid fa-tags",
      title: "Competitive Benefits",
      description:
        "Attractive compensation, incentives, and rewards for excellence.",
    },
  ];
  const carouselContent = [
    {
      name: "Aaron Marasigan",
      position: "Solutions Engineer",
      statement:
        "At Network Manager Inc., every challenge is an opportunity — we create solutions and provide the right systems for success. A few years ago, I wouldn’t have imagined that I’d be helping organizations all over the Philippines strengthen their technology and security. Here at NMI, every project is a chance to innovate, and every solution we provide makes a real difference for our clients. I’ve grown my skills, expanded my knowledge, and worked with an incredible team that’s always ready for the next challenge.",
      img: "assets/img/testimonials/aaron-testimonial.png",
    },
    {
      name: "Roanne Zavalla",
      position: "Business Development",
      statement:
        "People at NMI are driven by one mission – building strong relationships and ensuring customer success. With every project, we draw on our experience to anticipate needs, solve challenges, and create solutions that help customers thrive. Customer growth is the measure of our success. I am Roann Zavalla, proud to be part of NMI.",
      img: "assets/img/testimonials/roanne-testimonial.png",
    },
    {
      name: "Christian Manong",
      position: "Technical Enablement Engineer",
      statement:
        "At NMI, we see every challenge as a chance to innovate, building solutions and implementing systems that help our clients thrive. A few years ago, I wouldn’t have imagined that I’d be guiding clients across the Philippines on how to maximize the technology and solutions NMI offers. As a Technical Enablement Engineer, I get to empower organizations by showing them how to use our products effectively — helping them achieve their goals with confidence. Here at NMI, every project is a chance to innovate, and every training session is an opportunity to make a real impact for our clients. I’ve developed new capabilities, deepened my understanding, and worked alongside a remarkable team that never backs down from a challenge.",
      img: "assets/img/testimonials/christian-testimonial.png",
    },
  ];
  const pageListContainer = [
    {
      page: "Platform",
      listMethod: "k365BannerCard",
      selector: "#kaseya365",
    },
    {
      page: "Solution",
      listMethod: "solutionsBanner",
      selector: "#banner-solution-selector",
    },
  ];

  const pageContent = [
    {
      page: "Hero",
      keyLetter: "h-",
      queryContent: ["content", "file", "attachment"],
      listElementTag: "",
      listMethod: "",
    },
    {
      page: "Platform",
      keyLetter: "pl-",
      queryContent: ["content", "content_list", "file"],
      listElementTag: "p",
      listMethod: "k365BannerCard",
    },
    {
      page: "Solution",
      keyLetter: "s-",
      queryContent: ["content", "content_list", "file"],
      listElementTag: "p",
      listMethod: "solutionsBanner",
    },
    {
      page: "Testimonial",
      keyLetter: "t-",
      queryContent: ["content", "file", "client_testimonial"],
      listElementTag: "",
      listMethod: "",
    },
    {
      page: "Contact",
      keyLetter: "c-",
      queryContent: ["content", "content_list"],
      listElementTag: "li",
      listMethod: "",
    },
    {
      page: "Careers",
      keyLetter: "ca-",
      queryContent: ["content"],
      listElementTag: "",
      listMethod: "",
    },
    {
      page: "Footer",
      keyLetter: "f-",
      queryContent: ["content", "content_list"],
      listElementTag: "p",
      listMethod: "",
    },
    {
      page: "kaseya365-endpoint",
      keyLetter: "k365E-",
      queryContent: ["content", "file"],
      listElementTag: "",
      listMethod: "",
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
    ModalId: modalId,
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
    PhLocationId: phLocationId,
    K365EndpointPillsTab: k365EndpointPillsTab,
    TestimonialData: testimonialData,
    SpecificClrField: specificClrField,
    AddBanner: addBanner,
    EmailTemplate: emailTemplate,
    ToReplaceStr: toReplaceStr,
    Perks: perks,
    CarouselContent: carouselContent,
    PageContent: pageContent,
    PageListContainer: pageListContainer,
    ModalValue: modalValue,
  };
})();
