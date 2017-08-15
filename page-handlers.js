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

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $(".header-container").css("background", "#2A2B49");
            $(".header-container").css("z-index", "9999");
        } else {
            $(".header-container").css("background", "none");
        }
        if ($(this).scrollBottom() < 100) {
            $(".header-container").css("background", "red");

        }
    });

    $(".card").click(function () {
        var slide = $('.card-no')[$('.card').index(this)];
        if ($(slide).css('visibility') === 'hidden') {
            $(slide).css('visibility', 'visible');
            // $('.card').css('pointer-events', 'none');
        } else {
            $(slide).css('visibility', 'hidden');
        };
    });

    $(".card-x").click(function () {
        alert('card x');
        $(slide).css('visibility', 'hidden');
    });

    $('.new-project').click(function () {
        $()
    })
})