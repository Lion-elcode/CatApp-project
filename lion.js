// Get the modal
var modal = document.querySelector('.lionel');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var clickDisapere = document.querySelector('.toxxyk');

// When the user clicks anywhere outside of the clickDisapere, close it
document.onclick = function(event) {
    if (event.target == clickDisapere) {
        clickDisapere.style.display = "none";
    }
}
// the slides

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
         slides[i].style.display = "none"; 
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}