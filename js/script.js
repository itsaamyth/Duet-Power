$(document).ready(function(){       
    $('.slick-slider').slick({
        dots: true,
        appendDots: '.dots-wrapper',
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
      });

        // Video overlay
  $('.play').on('click', function() {
    $('.video-content').addClass('video-content-open');
  });

  $('.video-content').on('click', function() {
    $(this).removeClass('video-content-open');
  });

  // Accordion - on single service page
  $('.accordion-title').on('click', function() {
    $(this).parent().toggleClass('opened');
  });

  var $grid = $('.work-grid').isotope({
    itemSelector: '.col-lg-4',
  });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  $('.work-tabs').on( 'click', 'button', function() {
    $('.work-tabs li').removeClass('active');
    $(this).parent().addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
        
            });
    