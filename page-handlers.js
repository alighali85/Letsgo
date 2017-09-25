$(document).ready(function () {

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

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
            $(".header-container").css("background", "#EC407A");
            $(".header-container").css("z-index", "99");
        } else {
            $(".header-container").css("background", "none");
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
    var select = $('.select');
    for (i = 0; i < 100; i++) {
        select.append($('<option></option>').val(i).html(i));
    }
}