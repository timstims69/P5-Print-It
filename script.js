const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", function () {
  console.log("Vous avez cliqué sur le bouton de gauche");
});

let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", function () {
  console.log("Vous avez cliqué sur le bouton de droite");
});
