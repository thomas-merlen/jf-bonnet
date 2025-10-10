document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const button = form.querySelector("button");

  const message = document.createElement("p");
  message.id = "message";
  message.style.display = "none";
  form.appendChild(message);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const nbInvite = document.getElementById("nb_invite").value;
    const date = document.getElementById("date").value;

    button.disabled = true;
    button.innerHTML = "🍷 On remplit la carafe... ";
    button.classList.add("wine-loading");

    setTimeout(() => {
      button.disabled = false;
      button.innerHTML = "Envoyer";
      button.classList.remove("wine-loading");
      form.reset();

      message.textContent = `Merci ${prenom} ${nom} ! Votre table pour ${nbInvite} personne(s) le ${date} est réservée 🍽️
      On vous garde un petit rouge du pays, et un bout de fromage bien affiné ! 🧀`;
      message.style.display = "block";
      message.classList.add("pop-in");
    }, 2500);
  });
  
});

const images = [
  "saucisson.jpg",
  "roti.jpg",
  "vin.jpg",
  "fromage.jpg",
  "dessert.jpg",
  "digestif.jpg"
];

let index = 0;
const imageElement = document.getElementById("image-terroir");

function changeImage() {
  index = (index + 1) % images.length; 
  imageElement.style.opacity = 0;
  setTimeout(() => {
    imageElement.src = images[index];
    imageElement.style.opacity = 1;
  }, 500);
}

setInterval(changeImage, 2000);

imageElement.style.transition = "opacity 0.5s ease-in-out";



