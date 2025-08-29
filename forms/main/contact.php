<?php
//     echo '
//     <section id="contact" class="contact">
//         <div class="container" data-aos="fade-up">
//             <div class="container">
//                 <h2 class="section-label text-blue-1">Contact Us</h2>
//                 <p class="section-description">We’re here to help you simplify IT management for IT teams that cover every piece of technology a modern business needs to function. Utilize your IT tools more efficiently with software solutions that help you take the complexities out of IT.
//                 Speak with one of our solution engineers and let’s explore how NMI can help you intelligently solve your technology challenges.</p>
//                 <div class="contact-action">
//                     <h6 class="text-blue-1 mt-2">Have a question? Send us a message and we’ll be happy to help.</h6>
//                     <button type="button" class="btn btn-link text-uppercase">Drop us a message</button>
//                 </div>              
//             </div>
//             <div class="contact-grid">
//                 <div>
//                     <form id="frmCompanyDetailForm" role="form" class="contact-panel php-email-form">
//                         <div class="contact-info">
//                             <div class="contact-icon-aligment">
//                                 <div>
//                                     <i class="hgi hgi-stroke hgi-location-01"></i>
//                                 </div>
//                                 <p name="c-Address"> </p>
//                             </div>
//                             <div class="contact-icon-aligment">
//                                 <div>
//                                     <i class="hgi hgi-stroke hgi-contact-02"></i>
//                                 </div>
//                                 <p name="c-ContactNo"> </p>
//                             </div>
//                             <div class="contact-icon-aligment">
//                                 <div>
//                                     <i class="hgi hgi-stroke hgi-mail-01"></i>
//                                 </div>
//                                 <p name="c-EmailAddress"> </p>
//                             </div>
//                             <div class="contact-icon-aligment">
//                                 <div>
//                                     <i class="hgi hgi-stroke hgi-clock-01"></i>
//                                 </div>
//                                 <p name="c-OfficeHours"></p>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <div>
//                     <form id="frmCompanyDetailForm" role="form" class="contact-panel php-email-form">
//                         <div class="container ratio ratio-4x3 mt-3">
//                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.828588472357!2d121.01503087407949!3d14.551792878271815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9119dee9981%3A0x9a1a4d1e85bf66db!2sNM%20Network%20Manager%20Sales%2C%20Inc.!5e0!3m2!1sen!2sph!4v1749608686867!5m2!1sen!2sph" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </section>
// ';
echo 
'
    <section id="contact" class="contact solution-container">
        <div class="container">
            <div class="contact-form-container">
                <div>
                    <h2 class="contact-label">Connect with a security expert.</h2>
                    <p class="text-white">Fill out the form to share your feedback or request about our solutions.</p>
                    <div class="card">
                        <div class="card-body">
                            <div class="py-3">
                                <form
                                    id="frmClientContactRegistrationForm"
                                    method="post"
                                    role="form"
                                    class="contact-panel php-email-form"
                                >
                                    <div id="grpClientDetail">
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">First Name<span> *</span></label>
                                                <input
                                                type="text"
                                                name="firstname"
                                                class="form-control rounded-0 form-control-sm"
                                                id="firstname"
                                                placeholder="eg. Wil"
                                                req
                                                />
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Last Name<span> *</span></label>
                                                <input
                                                type="text"
                                                name="lastname"
                                                class="form-control rounded-0 form-control-sm"
                                                id="lastname"
                                                placeholder="eg. De Leon"
                                                req
                                                />
                                            </div>
                                        </div>
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Job Function<span> *</span></label>
                                                <input
                                                type="text"
                                                name="jobfunction"
                                                class="form-control rounded-0 form-control-sm"
                                                id="jobfunction"
                                                placeholder="eg. CISO"
                                                req
                                                />
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Job Level<span> *</span></label>
                                                <input
                                                type="text"
                                                name="joblevel"
                                                class="form-control rounded-0 form-control-sm"
                                                id="joblevel"
                                                placeholder="eg. Grade 8"
                                                req
                                                />
                                            </div>
                                        </div>
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Company<span> *</span></label>
                                                <input
                                                type="text"
                                                name="jobfunction"
                                                class="form-control rounded-0 form-control-sm"
                                                id="jobfunction"
                                                placeholder="eg. Silver ABC"
                                                req
                                                />
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Email<span> *</span></label>
                                                <input
                                                type="text"
                                                name="emailaddress"
                                                class="form-control rounded-0 form-control-sm"
                                                id="email"
                                                placeholder="eg. wildeleon@email.com"
                                                req
                                                req-email
                                                />
                                            </div>
                                        </div>
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Country <span> *</span></label>
                                                <select id="country" class="form-select rounded-none" aria-label="Default select example" req>
                                                    <option value="philippines" selected disabled>Philippines</option>
                                                </select>
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Region<span> *</span></label>
                                                <select id="region-select" class="form-select rounded-none" aria-label="Default select example" req>
                                                    <option selected disabled value="">Select..</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Province<span> *</span></label>
                                                <select id="province-select" name="province" class="form-select rounded-none" aria-label="Default select example" req>
                                                    <option selected disabled value="">Select..</option>
                                                </select>
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Municipality <span> *</span></label>
                                                <select id="municipality-select" name="municipality" class="form-select rounded-none" aria-label="Default select example" req> 
                                                    <option selected disabled value="">Select..</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Barangay<span> *</span></label>
                                                <select id="barangay-select" name="barangay" class="form-select rounded-none" aria-label="Default select example" req>
                                                    <option selected disabled value="">Select..</option>
                                                </select>
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Address<span> *</span></label>
                                                <input
                                                type="text"
                                                name="jobfunction"
                                                class="form-control rounded-0 form-control-sm"
                                                id="jobfunction"
                                                placeholder="eg. 2F asia building ipilpil st."
                                                req
                                                />
                                        </div>
                                        </div>
                                        
                                    </div>
                                    <button
                                        id="btnContactForm"
                                        type="submit"
                                        class="btn btn-sm cls-insert send-contact mt-4"
                                        insert-data
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-formbox">
                    <div>
                        <h5 class="text-white">Possible questions discussed You can expect:</h5>
                    </div>
                    <div class="mt-3">
                        <ul class="text-white">
                            <li class="list-styled">How does the product subscription or licensing work?</li>
                            <li class="list-styled">How does the POC for these specific solutions work?</li>
                            <li class="list-styled">How many existing clients using this solutions?</li>
                            <li class="list-styled">What is your edge to your competitors?</li>
                            <li class="list-styled">Do government agencies use this product?</li>
                            <li class="list-styled">Do you provide training to clients?</li>
                            <li class="list-styled">Do you provide 24/7 support?</li>
                            <li class="list-styled">Can we integrate this specific product to our existing solution that we\'re using?</li>
                            <li class="list-styled">What is your SLA in case of support?</li>
                            <li class="list-styled">How can your solutions help our company?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
'
?>