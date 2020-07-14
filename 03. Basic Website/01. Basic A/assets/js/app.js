;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
		    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
		    if (!container.is(e.target) && container.has(e.target).length === 0) {

		    	if ( $('body').hasClass('offcanvas') ) {

	    			$('body').removeClass('offcanvas');
	    			$('.js-fh5co-nav-toggle').removeClass('active');
		    	}
		    }

		});

	};


	var offcanvasMenu = function() {


		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});


    };


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');

            $('#fh5co-offcanvas a').click(function() {
                $this.removeClass('active');
                $('body').removeClass('overflow offcanvas');
                event.preventDefault();
            });
			return false;
        });
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


    var headerCarousel = function(){
    	var indexBackground = 1;

    	var backgroundListLimit = $('.fh5co-cover').attr('data-image-background-count');
    	var listOfBackground = $('.fh5co-cover').attr('data-image-background');

    	var splitListOfBackground = listOfBackground.split(",");
        $('.fh5co-cover').css('background-image','url('+splitListOfBackground[indexBackground]+')');

    	// console.log(splitListOfBackground)

		setInterval(function() {
            $('.fh5co-cover').css('background-image','url('+splitListOfBackground[indexBackground]+')');

            indexBackground++;

            if(indexBackground > backgroundListLimit-1 ) {
                indexBackground = 1;
			}

        }, 3000);
    };

    var testimonialCarousel = function(){
        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true,
        });
    };


    var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		headerCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
	});


	//Scrolling listner
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 100) {
			$('.fh5co-nav').addClass('fh5co-nav-with-background');
			$('.fh5co-nav ul li a').addClass('change-color');
			$('.fh5co-nav #fh5co-logo').addClass('change-color');

			//toggle menu mobile
			$('.fh5co-nav-toggle').addClass('fh5co-nav-black');
			$('.fh5co-nav-toggle').removeClass('fh5co-nav-white');
		} else {
            $('.fh5co-nav').removeClass('fh5co-nav-with-background');
            $('.fh5co-nav ul li a').removeClass('change-color');
            $('.fh5co-nav #fh5co-logo').removeClass('change-color');

            //toggle menu mobile
            $('.fh5co-nav-toggle').addClass('fh5co-nav-white');
            $('.fh5co-nav-toggle').removeClass('fh5co-nav-black');
        }
    });

    //Set active link
    $('.fh5co-nav ul li a').click(function() {
        $('.fh5co-nav ul li').removeClass('active');
		$(this).parent().addClass('active');
	});

	//Href Link With Animation
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
}());

$(document).ready(function() {
	loadWishes();
	loadRsvp();

});
function submitRSVP() {
	$.ajax({
        url : 'http://eyoore.com/api/post_rsvp.php',
        method : 'POST',
        data : { 'name' : $('#rsvp-name').val(), 'email' : $('#rsvp-email').val(), 'ww_id' : $('#ww_id').val() },
        success : function(response){
        	console.log(response);
            $('#form-rsvp input').val('');
            $('.rsvp-form').hide();
            $('.rsvp-desc').fadeIn();
            $('.rsvp-desc').html('Thank you <b class="rsvp-name">'+response.data.name+'</b>, your RSVP has been submitted to us.');
            return false;
        }
    });
    return false;
}
function submitWish() {
	$.ajax({
        url : 'http://eyoore.com/api/post_wish.php',
        method : 'POST',
        data : $('#wishes_form').serialize(),
        success : function(data){
        	console.log(data);
            loadWishes();
            $('#wishes_form input').val('');
            $('#wishes_form textarea').val('');
            $('#ww_id').val(2);
            $('html,body').animate({
		        scrollTop: $(window).scrollTop() + 350
		    });
            return false;
        }
    });
    return false;
}
function loadWishes() {
      $.ajax({
            url : 'http://eyoore.com/api/get_wishes.php?ww_id=2',
            method : 'GET',
            success : function(data){
                $('.wrap-testimony').html(data);

                var owl = $(".owl-carousel-fullwidth");
                owl.owlCarousel({
                    items: 1,
		            loop: true,
		            margin: 0,
		            responsiveClass: true,
		            nav: false,
		            dots: false,
		            autoplay: true,
		            smartSpeed: 400,
		            autoHeight: true,
                });
            }
        });
    }

function loadRsvp() {
  $.ajax({
        url : 'http://eyoore.com/api/get_rsvp.php?ww_id=2',
        method : 'GET',
        success : function(data){
            //$('.table-rsvp').html(data);
			var trHTML = '';
            $.each(data, function(i, item) {
				trHTML += '<tr><td>' + (i+1) + '</td><td>' + item.name + '</td><td>' + item.email + '</td></tr>';
		    });
		    $('.table-rsvp').append(trHTML);
        }
    });
}