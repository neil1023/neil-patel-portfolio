import responsiveSlides from 'responsive-slides';

  // You can also use "$(window).load(function() {"
$(function () {

    // Slideshow 4
    $("#slider4").responsiveSlides({
      auto: false,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "callbacks",
    });

});
