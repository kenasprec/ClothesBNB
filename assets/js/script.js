$(document).ready(function () {

    $(function () {
        if (window.location.pathname == "/Fashare/index.html") {
            $('#navbar-search-tile').hide();
        } else {
            $('#navbar-search-tile').show();
        }
    });

    var topOfOthDiv = $("#breakpoint").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#navbar-search-tile").fadeIn(200); //reached the desired point -- show div
        } else {
            $("#navbar-search-tile").fadeOut(200);
        }
    });

});