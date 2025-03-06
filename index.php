<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Home - NM Network Manager Sales Inc.</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon-01.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  
  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/toastr/css/toastr.min.css" rel="stylesheet">
  

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="assets/css/k365.css" rel="stylesheet">
  <link href="assets/css/media-query.css" rel="stylesheet">
</head>
<body>
  <!-- ======= Header ======= -->
      <?php include 'forms/header.php';?>
  <!-- ======= Banner Section ======= -->
      <?php include 'forms/main/banner.php';?>
  <main id="main">
    <!-- ======= News Section ======= -->
      <?php include 'forms/main/news.php';?>
    <!-- ======= Profile Section ======= -->
      <?php include 'forms/main/profile.php';?>
    <!-- ======= Contact Section ======= -->
      <?php include 'forms/main/contact.php';?>
    <!-- ======= Cookies ======= -->
    <?php include 'forms/cookies/cookie.php';?>
  </main>
  <!-- ======= Footer ======= -->
  <footer id="footer">
    <?php include 'forms/footer.php';?>
  </footer>
  <!-- End Footer -->

  <!-- Arrow Up -->
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Render Modal Pages -->
  <div id="parent-selector"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/js/jquery-3.6.0.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/toastr/js/toastr.min.js"></script>
  <!-- <script src="assets/vendor/php-email-form/validate.js"></script> -->

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

  <!-- External JS-->
  <script src="assets/js/nmi-constant.js"></script>
  <script src="assets/svg/nmi-svg-constant.js"></script>
  <script src="assets/js/nmi-helper.js"></script>
  <script src="assets/js/nmi-component-helper.js"></script>
  <script src="assets/js/nmi-page-helper.js"></script>
  <script src="assets/js/nmi-tab-helper.js"></script>
  <script src="assets/js/nmi-init-page-helper.js"></script>
  <script src="assets/js/nmicore.js"></script>
  <script src="assets/js/transaction/insert-data.js"></script>
  <script src="assets/js/transaction/get-data.js"></script>


  <script>
     webHelper.init();
     modalPageHelper.init();
     initPageHelper.init();
     tabPageHelper.init();
     insertData.init();
     getData.init();
  </script>
</body>
</html>
