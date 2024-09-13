let slideIndex = 1;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    document.querySelector(".carousel-slides").style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

setInterval(function() { changeSlide(1); }, 7000);

showSlides(slideIndex);

const audio = document.getElementById("backgroundMusic");
const audioButton = document.getElementById("audioButton");
const audioIcon = document.getElementById("audioIcon");

window.onload = function() {
    audio.muted = true;
};

audioButton.addEventListener("click", function() {
    if (audio.muted) {
        audio.muted = false;
        audio.play();
        audioIcon.classList.replace("fa-volume-mute", "fa-volume-up");
    } else {
        audio.muted = true;
        audio.pause();
        audioIcon.classList.replace("fa-volume-up", "fa-volume-mute");
    }
});