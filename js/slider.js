/* =========================
   SLIDER
========================= */
const sliderDiv = document.getElementById('slider');

const slides = [
  {
    img: "profilImages/abdul.png",
    text: "Super expérience chez White Wrestling ! Abdul a énormément progressé grâce à un encadrement sérieux et motivant. Les entraînements sont intenses, bien structurés et adaptés à tous les niveaux.",
    stars: 5
  },
  {
    img: "profilImages/jerome.png",
    text: "Excellent coaching et très bonne ambiance. Jerome a particulièrement apprécié la pédagogie des coachs et la motivation transmise à chaque séance.",
    stars: 4
  },
  {
    img: "profilImages/muhammad.png",
    text: "Muhammad est très satisfait de son expérience. Les entraînements sont de qualité.",
    stars: 5
  },
  {
    img: "profilImages/sophia.png",
    text: "Sophia recommande vivement White Wrestling.",
    stars: 5
  },
  {
    img: "profilImages/john.png",
    text: "John a adoré l’approche des coachs.",
    stars: 4
  }
];

let currentIndex = 0;

function showSlide() {
  if (!sliderDiv) return;

  const slide = slides[currentIndex];
  let starsHtml = "★".repeat(slide.stars) + "☆".repeat(5 - slide.stars);

  sliderDiv.innerHTML = `
    <img src="${slide.img}" alt="profil">
    <div class="comment">
      <div class="stars">${starsHtml}</div>
      <div class="text">${slide.text}</div>
    </div>
  `;

  currentIndex = (currentIndex + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 5000);
