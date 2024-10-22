// Seleziona il bottone e l'immagine
const button = document.getElementById("changeLampBtn");
const image = document.getElementById("lamp");

button.addEventListener("click", function () {
  // Controlla quale immagine è attualmente mostrata
  if (image.src.includes("white_lamp.png")) {
    image.src = "./img/yellow_lamp.png";
  } else {
    image.src = "./img/white_lamp.png";
  }
});
