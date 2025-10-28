<?php
echo
'
<section id="Hero">
    <div id="background-video" class="hero-video">
        <video  autoplay muted loop class="ratio ratio-21x9 blur-sm video-aspect" loading="lazy" name="h-path">
            <source type="video/mp4" name="h-video">
            Your browser does not support HTML5 video.
        </video>
    </div>
    <div class="hero-content">
        <div class="container">
            <div id="hero-introduction" class="hero-title-container">
                <h5 class="nmi-thugline" name="h-title"></h5>
                <p class="nmi-thugline-desc" name="h-description"></p>
            </div>
            <div id="company-brochure-btn" class="get-start-alignment">
                    <div id="company-profile-pdf" class="brochure-cta-container">
                        <a download="CompanyProfile2025.pdf" name="h-path">
                            <button class="btn-orange btn">
                                <div>
                                    <h5 class="brochure-label" name="h-title"></h5>
                                    <p class="brochure-cta" name="h-description"></p>
                                    <div class="btn-dl">
                                        <p class="brochure-text-sm" name="h-sub_description"></p>
                                    </div>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
        </div>
    </div>
</section>
'
?>