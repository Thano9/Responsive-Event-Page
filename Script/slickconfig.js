$(document).ready(function () {
    $('.photographyGallery').slick({
        autoplay: true,
        autoplaySpeed: 1800,
        variableWidth: true,
        adaptiveHeight: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        infinite: true,
    });
});