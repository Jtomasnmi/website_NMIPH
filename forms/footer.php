<?php
    echo
    // '<div class="footer-top">
    //     <div class="container">
    //         <div class="footer-grid">
    //             <div class="footer-contact">
    //                 <!-- <h3>Presento<span>.</span></h3> -->
    //                 <img src="assets/img/logo-2.png" class="footer-logo"></img>
    //                 <p name="c-FHDescription" class="text-justify"></p>
    //             </div>
    //             <div class="footer-links">
    //                 <h4 name="c-FDTitle"></h4>
    //                 <ul id="FDDescriptionList">
    //                 </ul>
    //             </div>
    //             <div class="footer-links">
    //                 <h4 name="c-CDAddressTitle"></h4>
    //                 <ul>
    //                 <li><p name="c-CDAddressDescription"></p></li>
    //                 </ul>
    //             </div>
    //             <div class="footer-links end">
    //                 <div>
    //                     <h4 name="c-CDContactNoTitle"></h4>
    //                     <ul>
    //                         <li>
    //                             <p name="c-CDContactNoDescription"></p>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="footer-end">
    //             <div class="copyright">
    //                 <p>Copyright &copy; [CopyrightYear] Network Manager Improving I.T. lives. All Rights Reserved</p>
    //             </div>
    //             <div class="social-links">
    //                 <!-- <p style="margin-top: 0.4rem;">Info@www.nmiph.com</p>&emsp; -->
    //                 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@www.nmiph.com" class="email" target="_blank"><i class="bi bi-envelope"></i></a>
    //                 <a href="https://www.facebook.com/people/NMI/61575203936004/" class="facebook" target="_blank"><i class="bx bxl-facebook"></i></a>
    //                 <a href="https://www.linkedin.com/company/nm-network-manager-sales-inc-/" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // <div id="modal-container">
    // </div>
    '
    <div class="footer-top">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-contact">
                    <!-- <h3>Presento<span>.</span></h3> -->
                    <img src="assets/img/logo/NMILogo2025Colored.png" class="ratio ratio-1x1 footer-logo"></img>
                    <p name="c-FHDescription" class="text-justify text-xs"></p>
                    <div class="social-container">
                        <p class="text-dark-2 fw-bold text-sm mb-0">Connect with NMI</p>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=61575203936004" target="_blank"><i class="hgi hgi-stroke hgi-facebook-02 social-icons"></i></a>
                            <a href="https://www.instagram.com/nmiphils/" target="_blank"><i class="hgi hgi-stroke hgi-instagram social-icons"></i></a>
                            <a href="https://www.linkedin.com/company/107103898/admin/page-posts/published/" target="_blank"><i class="hgi hgi-stroke hgi-linkedin-02 social-icons"></i></a>
                        </div>
                    </div>
                </div>
                <div class="social-links">
                    <div class="d-flex flex-column gap-1">
                        <p class="text-blue-1 fw-bold text-sm">Kaseya 365 Platform</p>
                        <a class="text-blue-1 text-xs" data-bs-toggle="modal" data-bs-target="#k365-content-modal">Kaseya 365 Endpoint</a>
                        <a class="text-blue-1 text-xs" data-bs-toggle="modal" data-bs-target="#k365-user-modal">Kaseya 365 User</a>
                        <a class="text-blue-1 text-xs">Kaseya 365 Ops</a>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <p class="text-blue-1 fw-bold text-sm">Solutions</p>
                        <a class="text-blue-1 text-xs" data-bs-toggle="modal" data-bs-target="#rmm-endpoint-modal">Endpoint Management</a>
                        <a class="text-blue-1 text-xs" data-bs-toggle="modal" data-bs-target="#backup-dr-modal">Backup and Recovery</a>
                        <a class="text-blue-1 text-xs" data-bs-toggle="modal" data-bs-target="#security-modal">Security</a>
                        <a class="text-blue-1 text-xs" data-bs-toggle="modal" data-bs-target="#it-operations-modal">IT  Operations</a>
                        <a class="text-blue-1 text-xs" data-bs-toggle="modal" data-bs-target="#it-risk-management-modal">IT Risk Management</a>
                        <a class="text-blue-1 text-xs" data-bs-toggle="modal" data-bs-target="#networking-modal">Networking</a>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <div class="footer-links">
                            <p class="text-blue-1 fw-bold text-sm">Address</p>
                            <div>
                                <p name="c-CDAddressDescription" class="text-blue-1 text-xs"></p>
                                <p name="c-OfficeHours" class="text-blue-1 text-xs"></p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <div class="footer-links">
                            <div>
                                <p class="text-blue-1 fw-bold text-sm">Contact Details</p>
                                <div>
                                    <div class="contact-icon-aligment">
                                        <i class="hgi hgi-stroke hgi-contact-02"></i>
                                        <p name="c-ContactNo" class="text-blue-1 text-xs"></p>
                                    </div>
                                    <div class="contact-icon-aligment">
                                        <i class="hgi hgi-stroke hgi-mail-01"></i>
                                        <p name="c-EmailAddress" class="text-blue-1 text-xs"></p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mb-5">
            <div class="footer-end">
                <div class="copyright">
                    <p>Copyright &copy; [CopyrightYear] NMI. All Rights Reserved</p>
                </div>
                <div class="user-consent">
                    <a class="user-consent-list" data-bs-toggle="modal" data-bs-target="#terms-conditions">Terms and Condition</a>
                    <a class="user-consent-list" data-bs-toggle="modal" data-bs-target="#privacy-policy">Privacy and Policy</a>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-container">
    </div>
';
?>