$(document).ready(function() {
  //sticky nav-bar (extension)
  $('.js--section-features').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px;'
    }
  );

  // Header buttons scroll
  $('.js--scroll-to-plan').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
  });

  // Animations on scroll
  $('.js--wp-1').waypoint(
    function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    },
    {
      offset: '50%'
    }
  );

  $('.js--wp-2').waypoint(
    function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    },
    {
      offset: '50%'
    }
  );

  $('.js--wp-3').waypoint(
    function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    },
    {
      offset: '50%'
    }
  );

  $('.js--wp-4').waypoint(
    function(direction) {
      $('.js--wp-4').addClass('animated pulse');
    },
    {
      offset: '50%'
    }
  );

  // MOBILE NAVIGATION
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $(this)
      .children('ion-icon')
      .attr('name');

    nav.slideToggle(200);

    if (icon == 'menu') {
      $('.js--nav-icon')
        .children('ion-icon')
        .attr('name', 'close');
    } else {
      $('.js--nav-icon')
        .children('ion-icon')
        .attr('name', 'menu');
    }
  });

  $(window).resize(function() {
    if ($(window).width() > 767) {
      $('ul').css('display', 'inline-block');
    } else {
      $('ul').css('display', 'none');
    }
  });
});
