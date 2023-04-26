document.addEventListener("DOMContentLoaded", function() {

    var currentPhoto = 0;
    var photos = document.getElementsByClassName("photo");
    var prevButton = document.getElementById("prev");
    var nextButton = document.getElementById("next");

    // Afficher la première photo
    photos[0].classList.add("active");

    // Changer de photo lorsqu'on clique sur le bouton "Suivant"
    nextButton.addEventListener("click", function() {
        photos[currentPhoto].classList.remove("active");
        currentPhoto++;
        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }
        photos[currentPhoto].classList.add("active");
    });

    // Changer de photo lorsqu'on clique sur le bouton "Précédent"
    prevButton.addEventListener("click", function() {
        photos[currentPhoto].classList.remove("active");
        currentPhoto--;
        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }
        photos[currentPhoto].classList.add("active");
    });

    // Changer de photo automatiquement toutes les 3 secondes
    setInterval(function() {
        photos[currentPhoto].classList.remove("active");
        currentPhoto++;
        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }
        photos[currentPhoto].classList.add("active");
    }, 3000);
});