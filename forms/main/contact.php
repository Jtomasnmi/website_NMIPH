<?php
    echo 
    '<section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
            <div>
                <h2 class="section-label text-blue-1">Contact Us</h2>
                <p class="section-description">We’re here to help you simplify IT management for IT teams that cover every piece of technology a modern business needs to function. Utilize your IT tools more efficiently with software solutions that help you take the complexities out of IT.
                Speak with one of our solution engineers and let’s explore how NMI can help you intelligently solve your technology challenges.</p>
            </div>
            <div class="contact-grid">
                <div>
                    <form id="frmClientContactRegistrationForm" method="post" role="form" class="contact-panel php-email-form">
                        <h6 class="text-blue-1">Drop us a message</h6>
                        <div id="grpClientDetail">
                            <div class="input-grid">
                                <div class="col form-group">
                                <label class="form-label">First Name<span> *</span></label>
                                <input type="text" name="firstname" class="form-control rounded-0 form-control-sm" id="Fname" placeholder="Enter First Name" req>
                                </div>
                                <div class="col form-group">
                                <label class="form-label">Last Name<span> *</span></label>
                                <input type="text" name="lastname" class="form-control rounded-0 form-control-sm" id="Lname" placeholder="Enter Last Name" req>
                                </div>
                            </div>
                            <div class="input-grid">
                                <div class="col form-group">   
                                    <label class="form-label">Company Name<span> *</span></label>
                                    <input type="text" name="compname" class="form-control rounded-0 form-control-sm" id="Cname" placeholder="Enter Company Name" req>
                                </div>
                                <div class="col form-group">
                                    <label class="form-label">Job Designation<span> *</span></label>
                                    <input type="text" name="jobdesig" class="form-control rounded-0 form-control-sm" id="JDesignation" placeholder="Enter Job Designation" req>
                                </div>
                            </div>   
                            <label class="form-label">Company Address <span> *<span></label>
                            <div class="form-group">
                            <input type="text" class="form-control rounded-0" name="compaddress" id="caddress" placeholder="Enter Company Address" req>
                            </div>
                            <div class="input-grid">
                            <div class="col form-group">   
                                <label class="form-label">Email<span> *</span></label>
                                <input type="text" name="emailaddress" class="form-control rounded-0 form-control-sm" id="email" placeholder="Enter Email" req req-email>
                            </div>
                            <div class="col form-group">
                                <label class="form-label">Mobile/ Landline<span> *</span></label>
                                <input type="text" name="contactno" class="form-control rounded-0 form-control-sm" id="mobile" placeholder="Enter Mobile/ Landline" req>
                            </div>
                            </div>
                        </div>
                        <div id="grpClientMesage">
                            <label class="form-label">Subject <span> *<span></label>
                            <div class="form-group">
                                <input type="text" class="form-control rounded-0" name="subject" id="subject" placeholder="Enter Subject" req>
                            </div>
                            <label class="form-label">Your Message <span> *<span></label>
                            <div class="form-group">
                            <textarea class="form-control rounded-0" name="message" id="message" rows="5" placeholder="Enter your message..." req></textarea>
                            </div>
                        </div>
                        <button type="submit" id="btnInsertData" class="btn btn-sm mt-3">Submit</button>
                    </form>
                </div>
                <div>
                    <form id="frmCompanyDetailForm" role="form" class="contact-panel php-email-form">
                        <h6 class="text-blue-1">General Information</h6>
                        <div class="">
                            <div class="contact-icon-aligment">
                                <div>
                                    <i class="hgi hgi-stroke hgi-location-01"></i>
                                </div>
                                <p name="c-Address"> </p>
                            </div>
                            <div class="contact-icon-aligment">
                                <div>
                                    <i class="hgi hgi-stroke hgi-contact-02"></i>
                                </div>
                                <p name="c-ContactNo"> </p>
                            </div>
                            <div class="contact-icon-aligment">
                                <div>
                                    <i class="hgi hgi-stroke hgi-mail-01"></i>
                                </div>
                                <p name="c-EmailAddress"> </p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <h6 class="pull-left">Office Hours</h6>
                            <div class="contact-icon-aligment">
                                <div>
                                    <i class="hgi hgi-stroke hgi-clock-01"></i>
                                </div>
                                <p name="c-OfficeHours"> </p>
                            </div>
                        </div>
                        <div class="container ratio ratio-21x9 mt-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.828588472357!2d121.01503087407949!3d14.551792878271815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9119dee9981%3A0x9a1a4d1e85bf66db!2sNM%20Network%20Manager%20Sales%2C%20Inc.!5e0!3m2!1sen!2sph!4v1741329841058!5m2!1sen!2sph" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
</section>';
?>