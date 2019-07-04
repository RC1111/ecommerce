$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  // sticky navbar less padding. Navbar will stick after first section.
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 800) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });
});
