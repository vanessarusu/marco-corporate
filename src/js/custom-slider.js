const customSlider = (function () {

    function init() {
        jQuery(document).ready(function($) {
            $('.custom-product-slick-slider .mixes-slider').slick({
                fade: true,
                arrows: true,
                cssEase: 'linear',
                prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'><span>View More</span></i></button>"
            });
        });
    }

    return {
        init: init
    }
});

export default customSlider;