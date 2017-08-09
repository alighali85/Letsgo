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
});
