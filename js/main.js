$(document).ready(function() {
    // Mobile navigation toggle
    $('.header__toggle').on('click', function() {
        $('.header__nav').toggleClass('show');
    });

    // Close mobile nav when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.header__nav').length && !$(e.target).closest('.header__toggle').length) {
            $('.header__nav').removeClass('show');
        }
    });

    // Hero Slider
    const totalSlides = $('.hero__slide').length;
    let currentSlide = 0;
    let slideInterval;

    // Create indicators
    for (let i = 0; i < totalSlides; i++) {
        $('.hero__indicators').append(`<div class="hero__indicator ${i === 0 ? 'hero__indicator--active' : ''}"></div>`);
    }

    // Function to change slide
    function changeSlide(n) {
        $('.hero__slide').removeClass('hero__slide--active');
        $('.hero__indicator').removeClass('hero__indicator--active');
        
        currentSlide = (n + totalSlides) % totalSlides;
        
        $('.hero__slide').eq(currentSlide).addClass('hero__slide--active');
        $('.hero__indicator').eq(currentSlide).addClass('hero__indicator--active');
    }

    // Auto slide change
    function startSlideInterval() {
        slideInterval = setInterval(function() {
            changeSlide(currentSlide + 1);
        }, 5000);
    }

    startSlideInterval();

    // Pause auto slide on hover
    $('.hero__slider').hover(
        function() {
            clearInterval(slideInterval);
        },
        function() {
            startSlideInterval();
        }
    );

    // Next/Prev controls
    $('.hero__control--next').on('click', function() {
        changeSlide(currentSlide + 1);
    });

    $('.hero__control--prev').on('click', function() {
        changeSlide(currentSlide - 1);
    });

    // Indicator click
    $('.hero__indicators').on('click', '.hero__indicator', function() {
        const index = $(this).index();
        changeSlide(index);
    });

    // Testimonials Slider
    const totalTestimonials = $('.testimonials__slide').length;
    let currentTestimonial = 0;
    let testimonialInterval;

    // Create testimonial indicators
    for (let i = 0; i < totalTestimonials; i++) {
        $('.testimonials__indicators').append(`<div class="testimonials__indicator ${i === 0 ? 'testimonials__indicator--active' : ''}"></div>`);
    }

    // Function to change testimonial
    function changeTestimonial(n) {
        $('.testimonials__slide').removeClass('testimonials__slide--active');
        $('.testimonials__indicator').removeClass('testimonials__indicator--active');
        
        currentTestimonial = (n + totalTestimonials) % totalTestimonials;
        
        $('.testimonials__slide').eq(currentTestimonial).addClass('testimonials__slide--active');
        $('.testimonials__indicator').eq(currentTestimonial).addClass('testimonials__indicator--active');
    }

    // Auto testimonial change
    function startTestimonialInterval() {
        testimonialInterval = setInterval(function() {
            changeTestimonial(currentTestimonial + 1);
        }, 6000);
    }

    startTestimonialInterval();

    // Pause auto testimonial on hover
    $('.testimonials__slider').hover(
        function() {
            clearInterval(testimonialInterval);
        },
        function() {
            startTestimonialInterval();
        }
    );

    // Next/Prev controls for testimonials
    $('.testimonials__control--next').on('click', function() {
        changeTestimonial(currentTestimonial + 1);
    });

    $('.testimonials__control--prev').on('click', function() {
        changeTestimonial(currentTestimonial - 1);
    });

    // Testimonial indicator click
    $('.testimonials__indicators').on('click', '.testimonials__indicator', function() {
        const index = $(this).index();
        changeTestimonial(index);
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });

    $('#backToTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').css({
                'padding': '0.5rem 0',
                'box-shadow': '0 2px 10px rgba(0, 0, 0, 0.1)'
            });
        } else {
            $('.header').css({
                'padding': '',
                'box-shadow': ''
            });
        }
    });

    // Smooth scroll for navigation links
    $('.header__nav-link, .hero__slide-button').on('click', function(e) {
        const target = $(this).attr('href');
        
        if (target !== '#' && target.startsWith('#')) {
            e.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(target).offset().top - 100
            }, 800);
            
            // Close mobile menu if open
            $('.header__nav').removeClass('show');
        }
    });
    
    // FAQ Accordion
    $('.faq__question').on('click', function() {
        const faqItem = $(this).parent();
        
        if (faqItem.hasClass('active')) {
            faqItem.removeClass('active');
        } else {
            $('.faq__item').removeClass('active');
            faqItem.addClass('active');
        }
    });
});