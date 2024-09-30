/*
Author       : Theme-Family
Template Name: Hakam - Scoccer Clup & Sports  Website Template
Version      : 1.0
*/
(function($) {
    "use strict";
	
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.loader').fadeOut();
			$('.atf-preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
		
		//  Sidebar Js
		$(".atf_sidebar-toggle-btn").on("click", function () {
			$(".atf_sidebar__area").addClass("sidebar-opened");
			$(".atf_body-overlay").addClass("opened");
		});
		$(".atf_sidebar__close-btn").on("click", function () {
			$(".atf_sidebar__area").removeClass("sidebar-opened");
			$(".atf_body-overlay").removeClass("opened");
		});
		
		 // Toggle Js
		$(".atf_body-overlay").on("click", function () {
			$(".atf_sidebar__area").removeClass("sidebar-opened");
			$(".atf_body-overlay").removeClass("opened");
		});		
		
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});	
		
		
		/*START MENU JS*/
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		/*END MENU JS*/
        
		//**================= Sticky =====================**//
  
		 // Back to top button 
		$(window).on('scroll', function () { 
			var scrolled = $(window).scrollTop();
			if (scrolled > 400) $('.back-to-top').addClass('active');
			if (scrolled < 400) $('.back-to-top').removeClass('active');
		});


		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 50);
		});
		
		/* --------------------------------------------------------
            5. Toogle Search
        -------------------------------------------------------- */
			// Handle click on toggle search button
			$('.header-search').on('click', function() {
				$('.header-search, .header-search-form').toggleClass('search-open');
				return false;
			});

			

			
	
		
			/*Start gallery Design*/
			$('#stadium-slider').owlCarousel({
				margin:5,
				autoplay:false,
				items: 1,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					992:{
						items:1
					}
				}
			})

		/*END course Design*/
		
		/* --------------------------------------------------------
          Start gallery Design
        --------------------------------------------------------- */
        $('.atf__gallery-slider-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						arrows: false,
						dots: true,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

		/*END course Design*/
			
			
		/*Start Testimonials LOGO*/
			$('#atf-testimonial-slider').owlCarousel({
				margin:5,
				autoplay:false,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					992:{
						items:3
					}
				}
			})

		/*END Testimonials LOGO*/
		
		/*--------------------------------------------------------------
		Counter
      --------------------------------------------------------------*/	
			 $('.counter-value').counterUp({
				delay: 10,
				time: 1000
			});
			
			/*--------------------------------------------------------------
		   START Countdown JS
		  --------------------------------------------------------------*/ 
		  $('#countdown').countdown('2040/3/10', function(event) {
			var $this = $(this).html(event.strftime(''
				
				+ '<div><strong>%D</strong> <br />Days </div>'
				+ '<div><strong>%H</strong> <br />Hours </div>'
				+ '<div><strong>%M</strong> <br />Minutes </div>'
				+ '<div class="sec"><strong>%S</strong> <br />Seconds</div>'));
			});
		/*--------------------------------------------------------------
		
		/*Start Home Design*/
			// swiper slider
			if ($(".atf-swiper__slider").length) {
			  $(".atf-swiper__slider").each(function () {
				let elm = $(this);
				let options = elm.data("swiper-options");
				let thmSwiperSlider = new Swiper(elm, options);
			  });
			}

		/*END Home Design*/
		
		/*Start service Design*/
			$('.atf__service-slider-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						arrows: false,
						dots: true,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

		/*END service Design*/
		
		/*Start Team Design*/
			$('.atf__team-slider-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						arrows: false,
						dots: true,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

		/*END Team Design*/
		
		/*Start Team Design*/
			$('.atf__shop-slider-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						arrows: false,
						dots: true,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

		/*END Team Design*/
		
			/*Start Team Design*/
			$('.atf__shop-details-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
						arrows: false,
						dots: true,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

		/*END Team Design*/
		
			

			
		
		
		/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:5,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/
			

		/* --------------------------------------------------------
					   LightCase jQuery Active
		--------------------------------------------------------- */
			$('a[data-rel^=lightcase]').lightcase({
				transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
				swipe: true,
				maxWidth: 1170,
				maxHeight: 600,
			});
			
		 /*---------------------------------------
            Quantity
        ---------------------------------------*/
        function atf_wc_quantity() {
            jQuery("div.quantity:not(.atf-btn-add), td.quantity:not(.atf-btn-add)").each(function(a, b) {
                var c = jQuery(b);
                c.addClass("atf-btn-add"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
            })
        }
        String.prototype.getDecimals || (String.prototype.getDecimals = function() {
            var a = this,
                b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
        }), jQuery(document).ready(function() {
            atf_wc_quantity()
        }), jQuery(document).on("up_wc_div", function() {
            atf_wc_quantity()
        }), jQuery(document).on("click", ".plus, .minus", function() {
            var a = jQuery(this).closest(".quantity").find(".qty"),
                b = parseFloat(a.val()),
                c = parseFloat(a.attr("max")),
                d = parseFloat(a.attr("min")),
                e = a.attr("step");
            b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
        });
			

		/* --------------------------------------------------------
             Mailchamp
        --------------------------------------------------------- */

		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		
		/*START ANIMATION JS*/
		  AOS.init();
		/*END ANIMATION JS*/
		
		
})(jQuery);