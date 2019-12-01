
(function ($) {
  "use strict";
  jQuery(document).ready(function ($) {
    // Sticky Menu
    $(".stickyNav").sticky({
      topSpacing: 0,
      zIndex: 111
    });

    // Scrollspy
    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 81
    });

    // Smoot Scroll Effect
    $('li.smooth-scroll a').bind('click', function (event) {
      var $anchor = $(this);
      var headerHeight = '79';
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
      }, 1200, 'easeInOutExpo');
      event.preventDefault();
    });

    $("ul.nav.navbar-nav li a").on('click', function () {
      $(".navbar-collapse").removeClass("in")
    });

    //Scroll To top Function apply
    $(window).scroll(function () {
      var ScrollToTop = $(window).scrollTop();
      if (ScrollToTop > 500) {
        $(".ScrollToTop").fadeIn();
      }
      else {
        $(".ScrollToTop").fadeOut();
      }
    });

    //Scroll To top With animate
    $(".ScrollToTop").on('click', function () {
      $("body, html").animate({ 'scrollTop': 0 }, 1000, 'easeInOutExpo');
      return false
    });

    // Home Slider
    $(".slider-waper").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      loop: true,
      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
      mouseDrag: false,
      touchDrag: false,
      smartSpeed: 600
    });

    // Slider Animation
    $(".slider-waper").on("translate.owl.carousel", function () {
      $(".single-slide-item h1, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
      $(".single-slide-item .teashop-btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider-waper").on("translated.owl.carousel", function () {
      $(".single-slide-item h1, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
      $(".single-slide-item .teashop-btn").addClass("animated fadeInDown").css("opacity", "1");
    });

    // Magnific Video Popup
    $('.video-play-btn').magnificPopup({
      type: 'video'
    });

    // Active Data Filter on isotope
    $(".featurs-navigation li").on('click', function () {
      // Active class add & remove
      $(".featurs-navigation li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr('data-filter');
      $(".portfolio-list").isotope({
        filter: selector
      });
    });

    // Testimonial Slider
    $(".testimonial-slides").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      loop: true,
      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
      mouseDrag: false,
      touchDrag: false
    });

    // Testimonial Slider
    $(".team-slides").owlCarousel({
      items: 3,
      nav: true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      smartSpeed: 600,
      center: true,
      loop: true,
      margin: 30,
      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
      mouseDrag: false,
      touchDrag: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    //Scroll To top Function apply
    $(window).scroll(function () {
      var ScrollToTop = $(window).scrollTop();
      if (ScrollToTop > 500) {
        $(".ScrollToTop").fadeIn();
      }
      else {
        $(".ScrollToTop").fadeOut();
      }
    });

    //Scroll To top With animate
    $(".ScrollToTop").on('click', function () {
      $("body, html").animate({ 'scrollTop': 0 }, 1000, 'easeInOutExpo');
      return false
    });

    $('.shop-product-list').masonry({
      itemSelector: '.shop-items'
    });

    new WOW().init();
  });

  jQuery(window).load(function () {
    jQuery(".slider-waper .owl-controls").addClass("container");
    jQuery(".portfolio-list").isotope();
    jQuery(".teashop-pageloader").fadeOut(500);
  });

}(jQuery));