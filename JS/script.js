// Seleziona il bottone e l'immagine
const button = document.getElementById("changeLampBtn");
const image = document.getElementById("lamp");
const textLight = document.getElementById("text-lamp");

button.addEventListener("click", function () {
  if (image.src.includes("white_lamp.png")) {
    image.src = "./img/yellow_lamp.png";
  } else {
    image.src = "./img/white_lamp.png";
  }

  if (button.textContent.includes("Accendi")) {
    button.textContent = "Spegni";
  } else {
    button.textContent = "Accendi";
  }
});
