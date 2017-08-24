$(document).ready(function () {

    function myFunction() {
        var x = document.getElementById('myDIV');
        x.style.display = 'none';
    }

    function onload() {

        if (window.jQuery) {
            // jQuery is loaded  
        } else {
            // jQuery is not loaded
            alert("you are not connected to the internet");
        }
    };

    $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $(".header-container").css("background", "#2A2B49");
            $(".header-container").css("z-index", "99");
        } else {
            $(".header-container").css("background", "none");
        }
        if ($(this).scrollDown() < 100) {
            $(".header-container").css("background", "red");

        }
    });

    $(".card").click(function () {
        var slide = $('.card-no')[$('.card').index(this)];
        if ($(slide).css('visibility') === 'hidden') {
            $(slide).css('visibility', 'visible');
        } else {
            $(slide).css('visibility', 'hidden');
        };
    });

    $(".card-x").click(function () {
        alert('card x');
        $(slide).css('visibility', 'hidden');
    });

    $('.add-new').click(function () {
        if ($('.full-page-slide').css('top') !== '-70vh') {
            $('.full-page-slide').css({ visibility: 'visible', top: '50%' });
            $('.dem').css('visibility', 'visible');
        } else {
            $('.full-page-slide').css({ visibility: 'visible', top: '-50%', zIndex: '101' });
        }
    });

    $('.close-btn').click(function () {
        $('.full-page-slide').css({ visibility: 'visible', top: '-70vh' });
        $('.dem').css({ visibility: 'hidden' });
    });
});
function select() {
    var $select = $('.drop-down-numbers');
    for (i = 0; i < 100; i++) {
        select.append($('<option></option>').val(i).html(i));
    }
}