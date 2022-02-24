/*headerslider*/

document.addEventListener("DOMContentLoaded", function(event) {


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var width = window.innerWidth;
    var x;
    var none;
    if(width >= 720) {
        x = null;
        x = document.getElementsByClassName("slider-qf");
        none = null;
        none = document.getElementsByClassName("slider-quad");
    } else if (width < 720) {
        x = null;
        x = document.getElementsByClassName("slider-quad");
        none = null;
        none = document.getElementsByClassName("slider-qf");
    }

    for(i=0; i < none.length; i++) {
        none[i].style.display = "none";
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

});
