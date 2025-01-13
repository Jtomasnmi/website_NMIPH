<?php
    echo '<section id="contact" class="contact">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                <h2>Contact Us</h2>
                <p class="p-cont">We’re here to help you simplify IT management for IT teams that cover every piece of technology a modern business needs to function. Utilize your IT tools more efficiently with software solutions that help you take the complexities out of IT.</p><br>
                <p class="p-cont">Speak with one of our solution engineers and let’s explore how NMI can help you intelligently solve your technology challenges.</p>
                </div>
                <div class="row">
                <div class="col-lg-7">
                    <form id="frmClientContactRegistrationForm" method="post" role="form" class="contact-panel php-email-form">
                    <div class="section-title">
                        <h6>Drop us a message</h6>
                    </div>
                    <div id="grpClientDetail">
                        <div class="row">
                            <label class="form-label">Full Name<span> *</span></label>
                            <div class="col form-group">   
                            <input type="text" name="firstname" class="form-control form-control-sm" id="Fname" placeholder="Enter First Name" req>
                            </div>
                            <div class="col form-group">
                            <input type="text" name="lastname" class="form-control form-control-sm" id="Lname" placeholder="Enter Last Name" req>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col form-group">   
                            <label class="form-label">Company Name<span> *</span></label>
                            <input type="text" name="compname" class="form-control form-control-sm" id="Cname" placeholder="Enter Company Name" req>
                        </div>
                        <div class="col form-group">
                            <label class="form-label">Job Designation<span> *</span></label>
                            <input type="text" name="jobdesig" class="form-control form-control-sm" id="JDesignation" placeholder="Enter Job Designation" req>
                        </div>
                        </div>   
                        <label class="form-label">Company Address <span> *<span></label>
                        <div class="form-group">
                        <input type="text" class="form-control" name="compaddress" id="caddress" placeholder="Enter Company Address" req>
                        </div>
                        <div class="row">
                        <div class="col form-group">   
                            <label class="form-label">Email<span> *</span></label>
                            <input type="text" name="emailaddress" class="form-control form-control-sm" id="email" placeholder="Enter Email" req req-email>
                        </div>
                        <div class="col form-group">
                            <label class="form-label">Mobile/ Landline<span> *</span></label>
                            <input type="text" name="contactno" class="form-control form-control-sm" id="mobile" placeholder="Enter Mobile/ Landline" req>
                        </div>
                        </div>
                    </div>
                    <div id="grpClientMesage">
                        <label class="form-label">Subject <span> *<span></label>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Enter Subject" req>
                        </div>
                        <label class="form-label">Your Message <span> *<span></label>
                        <div class="form-group">
                        <textarea class="form-control" name="message" id="message" rows="5" placeholder="Enter your message..." req></textarea>
                        </div>    
                    </div> 
                    <div class="text-left"><button type="submit" id="btnInsertData">Submit</button></div>
                    </form>
                </div>
                <div class="col-lg-5">
                    <form id="frmCompanyDetailForm" role="form" class="contact-panel php-email-form">
                    <div class="section-title">
                        <h6>General Information</h6>
                    </div>
                    <div class="row">
                        <div class="col-sm-1">
                            <i class="bx bx-map"></i>
                        </div>
                        <div class="col-sm-11">
                            <p name="c-Address"> </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1">
                        <i class="bx bx-phone-call"></i>
                        </div>
                        <div class="col-sm-11">
                        <p name="c-ContactNo"> </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1">
                        <i class="bx bx-envelope"></i>
                        </div>
                        <div class="col-sm-11">
                        <p name="c-EmailAddress"> </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1">
                        <i class="bx bx-globe"></i>
                        </div>
                        <div class="col-sm-11">
                        <p name="c-WebsiteUrl"> </p>
                        </div>
                    </div><br>
                    <div class="section-title">
                        <h6 class="pull-left">Office Hours</h6>
                    </div>
                    <div class="row">
                        <div class="col-sm-1">
                        <i class="bx bx-time"></i>
                        </div>
                        <div class="col-sm-11">
                        <p name="c-OfficeHours"> </p>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
      </section>';
?>