<?php
    echo '<header id="Header">
            <div class="header-container">
                <img src="assets/img/logo/NMILogo2025WhiteOrange.png" class="logo ratio ratio-4x3"/>
                <div class="d-flex align-items-center gap-3">
                    <nav id="navbar" class="navbar">
                        <ul class="default-nav navbar-ul-dist">
                            <li class="nav-link-style"><a class="scrollto" href="#Hero">Home</a></li>
                            <li class="nav-link-style"><a class="scrollto" href="#Platform">Platform</a></li>
                            <li class="nav-link-style"><a class="scrollto" href="#Solution">Solutions</a></li>
                            <li class="nav-link-style"><a class="scrollto" href="#Contact">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div class="d-flex align-items-center gap-4">
                        <div class="dropdown-center toggle-md">
                            <i class="fa-solid fa-ellipsis-vertical about-us-nav" id="nav-dropdown" data-bs-toggle="dropdown"></i>
                            <div class="dropdown-menu" aria-labelledby="nav-dropdown">
                                <a class="dropdown-item sub-navigation-item text-blue-1"  data-bs-toggle="modal" data-bs-target="#news">News</a>
                                <a class="dropdown-item sub-navigation-item text-blue-1" data-bs-toggle="modal" data-bs-target="#careers">Careers</a>
                                <a class="dropdown-item sub-navigation-item text-blue-1" data-bs-toggle="modal" data-bs-target="#profile">About Us</a>
                            </div>
                        </div>
                        <i id="toggleSmNav" class="fa-solid fa-ellipsis-vertical toggle-sm-nav" data-bs-toggle="modal" data-bs-target="#smallNavModal"></i>
                    </div>
                </div>
                
            </div>
    </header>';

    // mobile viewport tab
    echo
    '
    <div class="modal" id="smallNavModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content sm-nav-collapse">
                <div class="modal-header">
                    <img src="assets/img/logo/NMILogo2025WhiteOrange.png" class="logo ms-1 "/>
                <button type="button" class="btn btn-back-white" role="button" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-xmark fw-bold"></i>
                    <p class="mb-0">Close</p>
                </button>
                </div>
                <div class="modal-body">
                <ul class="container d-flex flex-column gap-4 py-2">
                    <li class="d-flex align-items-center gap-3" id="mobileTab">
                        <div class="sm-nav-icon"><i class="fa-regular fa-house"></i></div>
                        <a class="scrollto nav-sm-label" href="#Hero">Home</a>
                    </li>
                    <li class="d-flex align-items-center gap-3" id="mobileTab">
                        <div class="sm-nav-icon"><i class="fa-regular fa-chart-bar"></i></div>
                        <a class="scrollto nav-sm-label" href="#Platform">Platform</a>
                    </li>
                    <li class="d-flex align-items-center gap-3" id="mobileTab">
                        <div class="sm-nav-icon"><i class="fa-regular fa-lightbulb"></i></div>
                        <a class="scrollto nav-sm-label" href="#Solutions">Solutions</a>
                    </li>
                    <li class="d-flex align-items-center gap-3" id="mobileTab">
                        <div class="sm-nav-icon"><i class="fa-regular fa-address-book"></i></div>
                        <a class="scrollto nav-sm-label" href="#Contact">Contact Us</a>
                    </li>
                    <li class="d-flex align-items-center gap-3" id="mobileTab">
                    <div class="sm-nav-icon"><i class="fa-regular fa-newspaper"></i></div>
                        <a class="scrollto nav-sm-label cursor-pointer" data-bs-toggle="modal" data-bs-target="#news">News</a>
                    </li>
                    <li class="d-flex align-items-center gap-3" id="mobileTab">
                    <div class="sm-nav-icon"><i class="fa-regular fa-handshake"></i></div>
                        <a class="scrollto nav-sm-label cursor-pointer" data-bs-toggle="modal" data-bs-target="#careers">Careers</a>
                    </li>
                    <li class="d-flex align-items-center gap-3" id="mobileTab">
                        <div class="sm-nav-icon"><i class="fa-regular fa-building"></i></div>
                        <a class="scrollto nav-sm-label cursor-pointer" data-bs-toggle="modal" data-bs-target="#profile">About Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    ';
?>