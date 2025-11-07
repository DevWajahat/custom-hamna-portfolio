/*
* ----------------------------------------------------------------------------------------
Author       : Tanvir Hossain
Template Name: Wize - Creative Personal Portfolio
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/


(function($) {

    "use strict";

    $(document).ready(function() {



        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */

        $('.nav-link-click').click(function() {
            $('.navbar-collapse').collapse('hide');
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS & DOCUMENT LOAD JS
         * ----------------------------------------------------------------------------------------
         */

        $(window).on('load', function() {

            $('.loader').fadeOut();
            $('#preloader-area').delay(350).fadeOut('slow');


            // ## Project Filtering
            if ($('.project-masonry-active').length) {
                $(this).imagesLoaded(function() {
                    $('.project-masonry-active').isotope({
                        // options
                        itemSelector: '.item',
                    });
                });
            }


            // ## Blog Standard
            if ($('.blog-standard-wrap').length) {
                $(this).imagesLoaded(function() {
                    $('.blog-standard-wrap').isotope({
                        // options
                        itemSelector: '.item',
                    });
                });
            }


        });

        /*
         * ----------------------------------------------------------------------------------------
         *  HEADER STYLE JS
         * ----------------------------------------------------------------------------------------
         */
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();

        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        // var magnifPopup = function() {
        //     $('.work-popup').magnificPopup({
        //         type: 'image',
        //         removalDelay: 300,
        //         mainClass: 'mfp-with-zoom',
        //         gallery: {
        //             enabled: true
        //         },
        //         zoom: {
        //             enabled: false, // By default it's false, so don't forget to enable it

        //             duration: 300, // duration of the effect, in milliseconds
        //             easing: 'ease-in-out', // CSS transition easing function

        //             // The "opener" function should return the element from which popup will be zoomed in
        //             // and to which popup will be scaled down
        //             // By defailt it looks for an image tag:
        //             opener: function(openerElement) {
        //                 // openerElement is the element on which popup was initialized, in this case its <a> tag
        //                 // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        //                 return openerElement.is('img') ? openerElement : openerElement.find('img');
        //             }
        //         }
        //     });


        //     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        //         disableOn: 700,
        //         type: 'iframe',
        //         mainClass: 'mfp-fade',
        //         removalDelay: 160,
        //         preloader: false,

        //         fixedContentPos: false
        //     });

        // };
        // // Call the functions 
        // magnifPopup();

        $('#open-popup1').magnificPopup({
            items: [
              {
                src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/63cd3a209550911.6701742e42178.png',
              },
              {
                src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/75eca2209550911.6701742eb7bd5.jpg',
              },
              {
                src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c5379b209550911.6701742eb7689.jpg',
              },
              {
                src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/766472209550911.6701742eb8361.jpg',
              },
              {
                src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/00636b209550911.6701742ce7a43.png',
              },
              {
                src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7fea23209550911.6701742d8e9fe.jpg',
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/05cc5b209550911.6701742d8f212.jpg',
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e5516f209550911.6701742d8fae6.jpg',
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/404533209550911.6701742bb738c.png'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a348a3209550911.6701742c4cb77.jpg'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3ce10e209550911.6701742c4c6f2.jpg'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/bf1cc5209550911.6701742c4d2a2.jpg'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7fea23209550911.6701742d8e9fe.jpg'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3e531c209550911.6701742b38210.jpg'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/36b577209550911.6701742b386ee.jpg'
              }

            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
        $('#open-popup2').magnificPopup({
            items: [
              {
                src: '../assets/images/hampro/Artboard 2.jpg',
              },
              {
                src: '../assets/images/hampro/Artboard 3.jpg',
              },
              {
                src: '../assets/images/hampro/Artboard 4.jpg',
              },
              {
                src: '../assets/images/hampro/Artboard 5.jpg',
              },
              {
                src: '../assets/images/hampro/Artboard 6.jpg',
              },
              {
                src: '../assets/images/hampro/Artboard 7.jpg',
              },    


            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
        $('#open-popup3').magnificPopup({
            items: [
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/985c1c209325531.66fd8615afcc0.jpg',
              },

              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d483ec209325531.66fd8616aab05.jpg',
              },
              {
                src: '../assets/images/hampro/1.jpg',
              },
              {
                src: '../assets/images/hampro/International Day of Older Persons.png',
              },
              {
                src: '../assets/images/hampro/f.jpg'
              },
              {
                src: '../assets/images/hampro/2.jpg'
              },
              {
                src: '../assets/images/hampro/Artboard 1.jpg'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b6346174537917.64a44241743eb.jpg'
              }


            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
        $('#open-popup4').magnificPopup({
            items: [
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/bfa025209326033.66fd87d8282d8.jpg',
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/bb8e6f209326033.66fd87d828814.jpg',
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/87fcea209326033.66fd87d8ba299.png'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/59dd1e209326033.66fd87d8ba6dd.png'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/231219209326033.6705041702b3d.png'
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5475d0209326033.675ea01733d34.jpg'
              }
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
        $('#open-popup5').magnificPopup({
            items: [
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/6e9498215806991.6774437403018.jpg',
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/d4c333215806991.6774437402955.jpg',
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/42a424215806991.677446a504fc4.jpg',
              },
              {
                src:'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/511f17215806991.677446a50556b.jpg',
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
        /*
         * ----------------------------------------------------------------------------------------
         *  SCROOL TO UP JS
         * ----------------------------------------------------------------------------------------
         */

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 150;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })

        /* ==========================================================================
                   SCROLLER ANIMATION
                   ========================================================================== */

        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for recuded motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                // add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", true);

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // For each item in the array, clone it
                // add aria-hidden to it
                // add it into the `.scroller-inner`
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }




        /*
         * ----------------------------------------------------------------------------------------
         *  CUSTOM CURSOR JS
         * ----------------------------------------------------------------------------------------
         */
        const cursorBall = document.getElementById('ball');

        document.addEventListener('mousemove', function(e) {
            // Update cursor position and opacity on mousemove
            gsap.to(cursorBall, {
                duration: 0.3,
                x: e.clientX,
                y: e.clientY,
                opacity: 1, // Ensure cursor is visible
                ease: 'power2.out'
            });
        });

        // Hover effect on elements
        const hoverElements = document.querySelectorAll('a');
        hoverElements.forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                // Animate cursorBall on mouseenter
                cursorBall.classList.add('hovered');
                gsap.to(cursorBall, {
                    duration: 0.3,
                    scale: 2, // Increase scale
                    opacity: 0, // Set opacity to 0
                    ease: 0.1
                });
            });

            element.addEventListener('mouseleave', function() {
                // Restore cursorBall on mouseleave
                cursorBall.classList.remove('hovered');
                gsap.to(cursorBall, {
                    duration: 0.3,
                    scale: 1, // Restore scale to normal
                    opacity: 1, // Restore opacity
                    ease: 'power2.out'
                });
            });
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  DROPDOWN MENU JS
         * ----------------------------------------------------------------------------------------
         */
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function() {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });

        // ## Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function(e) {
                e.preventDefault();
            });
        }

        // Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function() {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }



        // ## Testimonials Active
        if ($('.testimonials-wrap').length) {
            $('.testimonials-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                speed: 1000,
                focusOnSelect: false,
                prevArrow: '.testimonial-prev',
                nextArrow: '.testimonial-next',
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });
        }



        // ## Project Filter
        $(".project-filter li").on('click', function() {
            $(".project-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $('.project-masonry-active').imagesLoaded(function() {
                $(".project-masonry-active").isotope({
                    itemSelector: '.item',
                    filter: selector,
                    masonry: {
                        columnWidth: '.item'
                    }
                });
            });

        });



        /* ## Fact Counter + Text Count - Our Success */
        if ($('.counter-text-wrap').length) {
            $('.counter-text-wrap').appear(function() {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function() {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }



        // ## Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function() {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        // ## Nice Select
        $('select').niceSelect();


        // ## WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


    });


    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function() {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function() {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    
    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function() {

        const svg = document.getElementById("preloaderSvg");
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
            delay: 1.5,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.5,
            attr: { d: curve },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: "power2.easeOut",
        });
        tl.to(".preloader", {
            y: -1500,
        });
        tl.to(".preloader", {
            zIndex: -1,
            display: "none",
        });



    });





    

})(window.jQuery);