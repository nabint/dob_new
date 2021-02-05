/* Sticky Navbar*/

$(document).ready(function () {

    $('.section-features').waypoint(function (direction) {
        if (direction == "down") {
            $("#navbar").addClass("sticky")
        }
        else {
            $('#navbar').removeClass('sticky');
        }
    })
});


/* Slideshow */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    console.log("pressed");
    var i;
    var x = document.getElementsByClassName("screenshot");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

/* Select current nav */
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("navelement");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}