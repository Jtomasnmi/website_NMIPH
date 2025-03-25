<?php
    // echo
    // '<header id="header" class="fixed-top d-flex align-items-center">
    //     <div class="container d-flex align-items-center justify-center">
    //         <img id="header" src="assets/img/nmi-logo3.png" class="logo"></img>
    //         <nav id="navbar" class="navbar order-last order-lg-0">
    //             <ul class="navbar-ul-dist">
    //             <li><a class="nav-link scrollto" href="#hero">Home</a></li>
    //             <li><a class="nav-link scrollto" href="#about">News</a></li>
    //             <li><a class="nav-link scrollto" href="#services">Company</a></li>
    //             <li class="dropdown"><a href="#"><span>Solutions</span> <i class="bi bi-chevron-down"></i></a>   
    //                 <ul class="d-flex">
    //                 <li>
    //                     <div class="d-flex navbar-it-comp">
    //                     <div>
    //                         <h6 class="navbar-it-comp-lbl"><b>IT Completes seven product suites solve the IT & Security problems of IT Pros everywhere.</b></h6>
    //                     </div>     
    //                     </div>
    //                     <div class="d-flex" style="margin-top: 1rem;">
    //                     <div class="solutions">
    //                         <div class="text-center">
    //                             <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-1.svg" width="60rem" height="60rem"/>                 
    //                         </div>
    //                         <div class="text-center">                       
    //                             <label><a><b>RMM & Endpoint Management</b></a></label>
    //                         </div>
    //                         </div>
    //                     <div class="solutions">
    //                         <div class="text-center">
    //                             <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-2.svg" width="60rem" height="60rem"/> 
    //                         </div>   
    //                         <div class="text-center">
    //                             <label><a><b>Security</b></a></label>
    //                         </div>
    //                     </div>
    //                     <div class="solutions">
    //                         <div class="text-center">
    //                         <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-3.svg" width="60rem" height="60rem"/>
    //                         </div>
    //                         <div class="text-center">
    //                         <label><a><b>Backup & DR</b></a></label>
    //                         </div>
    //                     </div>
    //                     <div class="solutions">
    //                         <div class="text-center">
    //                         <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-4.svg" width="60rem" height="60rem"/>
    //                         </div>  
    //                         <div class="text-center">
    //                         <label><a><b>Audit</b></a></label>
    //                         </div>
    //                     </div>
    //                     <div class="solutions">
    //                         <div class="text-center">
    //                         <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-5.svg" width="60rem" height="60rem"/>
    //                         </div>
    //                         <div class="text-center">
    //                         <label><a><b>Compliance</b></a></label>
    //                         </div>
    //                     </div>
    //                     <div class="solutions">
    //                         <div class="text-center">
    //                         <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-6.svg" width="60rem" height="60rem"/>
    //                         </div>
    //                         <div class="text-center">
    //                         <label><a><b>Service Desk</b></a></label>
    //                         </div>
    //                     </div>
    //                     <div class="solutions">
    //                         <div class="text-center">
    //                         <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-7.svg" width="60rem" height="60rem"/>
    //                         </div>         
    //                         <div class="text-center">
    //                         <label><a><b>IT Documentation</b></a></label>
    //                         </div> 
    //                     </div>
    //                     </div>      
    //                 </li>
    //                 </ul>
    //             </li>
    //             <li><a class="nav-link scrollto" href="#contact">Contact Us</a></li>
    //             </ul>
    //             <i class="bi bi-list mobile-nav-toggle"></i>
    //         </nav>
    //         <a href="#about" class="btn get-started-btn scrollto">Get A Demo</a>
    //     </div>
    // </header>';
    echo
    '<header id="header" class="sticky-top bg-white">
        <div class="container d-flex align-items-center justify-content-between ps-3 pe-3 py-2">
            <img src="assets/img/logo-1.png" class="logo"/>
            <div class="d-flex align-items-center justify-center-start gap-3">
                <nav id="navbar" class="navbar">
                    <ul class="default-nav navbar-ul-dist">
                        <li class="nav-link-style"><a class="scrollto" href="#hero">Home</a></li>
                        <li class="nav-link-style dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button">
                                Solution
                            </a>
                            <ul class="dropdown-menu d-block remove-radius">
                                <div class="bg-info">
                                    <div class="pt-3">
                                        <p class="text-center fs-6 fw-semibold sub-nav-title">IT Completes seven product suites solve the IT & Security problems of IT Pros everywhere.</p>
                                    </div>
                                    <div class="row pt-4 pb-4 bg-light scroll-sub-nav">
                                        <div class="col-4">
                                            <li class="d-flex flex-column align-items-center gap-2 p-2 ">
                                                <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-1.svg" width="45rem" height="45rem"/>
                                                <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#rmm-endpoint-modal">Endpoint Management</label>
                                            </li>
                                            <li class="d-flex flex-column align-items-center gap-2 p-2">
                                                <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-2.svg" width="45rem" height="45rem"/>
                                                <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#security-modal">Security</label>
                                            </li>
                                            <li class="d-flex flex-column align-items-center gap-2 p-2">
                                                <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-3.svg" width="50rem" height="50rem"/>
                                                <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#backup-dr-modal">Backup & DR</label>
                                            </li>
                                        </div>
                                        <div class="col-4 border border-top-0 border-bottom-0">
                                            <li class="d-flex flex-column align-items-center gap-2 p-2">
                                                <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-4.svg" width="50rem" height="50rem"/>
                                                <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#audit-modal">Audit</label>
                                            </li>
                                            <li class="d-flex flex-column align-items-center gap-2 p-2">
                                                <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-5.svg" width="50rem" height="50rem"/>
                                                <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#compliance-modal">Compliance</label>
                                            </li>
                                        </div>
                                        <div class="col-4">
                                            <li class="d-flex flex-column align-items-center gap-2 p-2">
                                                <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-6.svg" width="50rem" height="50rem"/>
                                                <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#servicedesk-modal">Service Desk</label>
                                            </li>
                                            <li class="d-flex flex-column align-items-center gap-2 p-2">
                                                <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-7.svg" width="50rem" height="50rem"/>
                                                <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#it-documentation-modal">IT Documentation</label>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li class="nav-link-style"><a class="scrollto" href="#news">News</a></li>
                        <li class="nav-link-style"><a class="scrollto" href="#about-us">About Us</a></li>
                        <li class="nav-link-style"><a class="scrollto" href="#careers">Careers</a></li>
                        <li class="nav-link-style"><a class="scrollto" href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
                <div class="d-flex justify-content-center align-items-center gap-1">
                    <button id="get-demo-btn" class="btn btn-info get-start-btn scrollto" data-bs-toggle="modal" data-bs-target="#get-a-demo">Get A Demo</button>
                    <i id="toggleSmNav" class="toggle-sm-nav fs-5 bi bi-list" role="button" data-bs-toggle="modal" data-bs-target="#smallNavModal"></i>
                </div>
            </div>
        </div>
    </header>';

    // mobile viewport tab
    echo
    '
    <div class="modal" id="smallNavModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="assets/img/nmi-logo2.png" class="logo ms-1 "/>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <ul class="container d-flex flex-column gap-1 py-2">
                    <li class="d-flex align-items-center gap-3 hover-sm-nav" id="mobileTab">
                        <i class="bi bi-house-fill fs-4 sm-nav-icon"></i>
                        <a class=" scrollto fs-6 fw-medium sm-nav-icon"  href="#hero">Home</a>
                    </li>
                    <li class="d-flex align-items-center justify-content-between hover-sm-nav" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false">
                        <div class="d-flex align-items-center gap-3">
                            <i class="bi bi-lightbulb-fill fs-4 sm-nav-icon"></i>
                            <a class=" scrollto fs-6 fw-medium sm-nav-icon" href="#services">Solutions</a>
                        </div>
                        <i class="bi bi-caret-down-fill" ></i>
                    </li>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <p class="sub-nav-label">IT Completes seven product suites solve the IT & <span class="mobile-sub-navlabel">Security problems of IT Pros everywhere.</span></p>
                            <div class="container text-center">
                                <div class="row row-cols-2">
                                    <div class="d-flex flex-column align-items-center gap-2 p-2" id="mobileTab">
                                        <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-1.svg" width="50rem" height="50rem"/>
                                        <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#rmm-endpoint-modal">Endpoint Management</label>
                                    </div>
                                    <div class="d-flex flex-column align-items-center gap-2 p-2" id="mobileTab">
                                        <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-2.svg" width="50rem" height="50rem"/>
                                        <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#security-modal">Security</label>
                                    </div>
                                    <div class="d-flex flex-column align-items-center gap-2 p-2" id="mobileTab">
                                        <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-3.svg" width="50rem" height="50rem"/>
                                        <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#backup-dr-modal">Backup & DR</label>
                                    </div>
                                    <div class="d-flex flex-column align-items-center gap-2 p-2" id="mobileTab">
                                        <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-4.svg" width="50rem" height="50rem"/>
                                        <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#audit-modal">Audit</label>
                                    </div>
                                    <div class="d-flex flex-column align-items-center gap-2 p-2" id="mobileTab">
                                        <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-5.svg" width="50rem" height="50rem"/>
                                        <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#compliance-modal">Compliance</label>
                                    </div>
                                    <div class="d-flex flex-column align-items-center gap-2 p-2" id="mobileTab">
                                        <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-6.svg" width="50rem" height="50rem"/>
                                        <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#servicedesk-modal">Service Desk</label>
                                    </div>
                                    <div class="d-flex flex-column align-items-center gap-2 p-2" id="mobileTab">
                                        <img src="assets/img/nmi_solutions/Solutions-Menu/menu-icon-7.svg" width="50rem" height="50rem"/>
                                        <label class="font-sub-nav" data-bs-toggle="modal" data-bs-target="#it-documentation-modal">IT Documentation</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li class="d-flex align-items-center gap-3 hover-sm-nav" id="mobileTab">
                        <i class="bi bi-megaphone-fill fs-4 sm-nav-icon"></i>
                        <a class=" scrollto fs-6 fw-medium sm-nav-icon" href="#news">News</a>
                    </li>
                    <li class="d-flex align-items-center gap-3 hover-sm-nav" id="mobileTab">
                        <i class="bi bi-building-fill fs-4 sm-nav-icon"></i>
                        <a class=" scrollto fs-6 fw-medium sm-nav-icon" href="#about-us">About Us</a>
                    </li>
                    <li class="d-flex align-items-center gap-3 hover-sm-nav" id="mobileTab">
                        <i class="bi bi-suitcase-lg-fill fs-4 sm-nav-icon"></i>
                        <a class=" scrollto fs-6 fw-medium sm-nav-icon" href="#careers">Careers</a>
                    </li>
                    <li class="d-flex align-items-center gap-3 hover-sm-nav" id="mobileTab">
                        <i class="bi bi-chat-dots-fill fs-4 sm-nav-icon"></i>
                        <a class=" scrollto fs-6 fw-medium sm-nav-icon" href="#contact">Contact Us</a>
                    </li>
                </ul>
                <hr/>
                </div>
            </div>
        </div>
    </div>
    ';
?>
<!-- lg-nav -->
<!-- <li class="nav-link-style"><a class="scrollto" href="#careers">Careers</a></li> -->

<!-- sm nav -->
<!-- <li class="d-flex align-items-center gap-3 hover-sm-nav" id="mobileTab">
    <i class="bi bi-suitcase-lg-fill fs-4 sm-nav-icon"></i>
    <a class=" scrollto fs-6 fw-medium sm-nav-icon" href="#careers">Careers</a>
</li> -->
