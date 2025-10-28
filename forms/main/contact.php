<?php
echo 
'
    <section id="Contact" class="contact solution-container">
        <div class="container">
            <div class="contact-form-container">
                <div>
                    <div id="contact-header" class="mb-3">
                        <h2 class="contact-label" name="c-title"></h2>
                        <p class="text-white" name="c-description"></p>
                    </div>
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
                                                name="FirstName"
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
                                                name="LastName"
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
                                                name="JobFunction"
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
                                                name="JobLevel"
                                                class="form-control rounded-0 form-control-sm"
                                                id="joblevel"
                                                placeholder="eg. Grade 8"
                                                req
                                                />
                                            </div>
                                        </div>
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Contact#<span> *</span></label>
                                                <input
                                                type="text"
                                                name="ContactNumber"
                                                class="form-control rounded-0 form-control-sm"
                                                id="contactnumber"
                                                placeholder="eg. 09xx 1xx 23xx"
                                                req
                                                />
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Email<span> *</span></label>
                                                <input
                                                type="text"
                                                name="EmailAddress"
                                                class="form-control rounded-0 form-control-sm"
                                                id="emailaddress"
                                                placeholder="eg. wildeleon@email.com"
                                                req
                                                req-email
                                                />
                                            </div>
                                        </div>
                                        <div class="col form-group">
                                            <label class="form-label">Company<span> *</span></label>
                                            <input
                                            type="text"
                                            name="CompName"
                                            class="form-control rounded-0 form-control-sm"
                                            id="CompName"
                                            placeholder="eg. Silver ABC"
                                            req
                                            />
                                        </div>
                                    </div>
                                    <div id="grpClientCompLocation">
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Country <span> *</span></label>
                                                <select name="Country" id="country-select" class="form-select form-select-sm rounded-none" aria-label="Default select example" req>
                                                    <option value="PHILIPPINES" selected>Philippines</option>
                                                </select>
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Region<span> *</span></label>
                                                <select name="Region" id="region-select" class="form-select form-select-sm rounded-none" aria-label="Default select example" req>
                                                    <option selected disabled value="">Select..</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Province<span> *</span></label>
                                                <select name="Province" id="province-select" class="form-select form-select-sm rounded-none" aria-label="Default select example" req>
                                                    <option selected disabled value="">Select..</option>
                                                </select>
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Municipality <span> *</span></label>
                                                <select name="Municipality" id="municipality-select" class="form-select form-select-sm rounded-none" aria-label="Default select example" req> 
                                                    <option selected disabled value="">Select..</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="input-grid">
                                            <div class="col form-group">
                                                <label class="form-label">Barangay<span> *</span></label>
                                                <select name="Barangay" id="barangay-select" class="form-select form-select-sm rounded-none" aria-label="Default select example" req>
                                                    <option selected disabled value="">Select..</option>
                                                </select>
                                            </div>
                                            <div class="col form-group">
                                                <label class="form-label">Address<span> *</span></label>
                                                <input
                                                type="text"
                                                name="Address"
                                                class="form-control rounded-0 form-control-sm"
                                                id="address"
                                                placeholder="eg. 2F asia building ipilpil st."
                                                req />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        id="btnContactForm"
                                        type="submit"
                                        class="btn btn-sm cls-insert send-contact mt-4"
                                        insert-data
                                        send-email
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-formbox">
                    <div id="FAQ-list">
                        <h5 class="text-white" name="c-name"></h5>
                    </div>
                    <div class="mt-3">
                        <ul id="c-FAQ-list" class="text-white">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
'
?>
<!-- <li class="list-styled"><p>How does the product subscription or licensing work?</p></li>
                            <li class="list-styled">How does the POC for these specific solutions work?</li>
                            <li class="list-styled">How many existing clients using this solutions?</li>
                            <li class="list-styled">What is your edge to your competitors?</li>
                            <li class="list-styled">Do government agencies use this product?</li>
                            <li class="list-styled">Do you provide training to clients?</li>
                            <li class="list-styled">Do you provide 24/7 support?</li>
                            <li class="list-styled">Can we integrate this specific product to our existing solution that we\'re using?</li>
                            <li class="list-styled">What is your SLA in case of support?</li>
                            <li class="list-styled">How can your solutions help our company?</li> -->
