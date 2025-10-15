document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();

    alert(`Merci ${prenom} ${nom} ! Votre message à bien été envoyer à Team Vitality`);

    form.reset();
  });
});


const images = [
  "equipe.webp",
  "apex.jpg",
  "trophee.jpg",
  "trophee2.jpg"
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





