document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const startScreen = document.getElementById("start-screen");
  const mainContent = document.getElementById("main-content");

  // Prevent flash
  document.body.style.backgroundColor = "#0d0d0d";

  startBtn.addEventListener("click", () => {
    startScreen.style.opacity = "0";
    setTimeout(() => {
      startScreen.style.display = "none";
      mainContent.style.display = "block";
      mainContent.classList.add("visible");
    }, 600);
  });

  // Stars animation
  const starContainer = document.querySelector(".star-container");
  const totalStars = 60;
  const starArray = [];

  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const speed = Math.random() * 0.5 + 0.2;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    starContainer.appendChild(star);
    starArray.push({ el: star, initialY: y, speed });
  }

  // Flying star
  const specialStar = document.createElement("div");
  specialStar.classList.add("star", "special");
  starContainer.appendChild(specialStar);

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    starArray.forEach(({ el, initialY, speed }) => {
      const newY = initialY + scrollY * speed;
      el.style.top = `${newY}px`;
      if (newY > window.innerHeight + 100) {
        el.style.opacity = 0;
      }
    });
  });
});

// Animate gradient background
let angle = 0;
function animateGradient() {
  angle += 0.003;
  const x = 50 + Math.sin(angle) * 10;
  const y = 50 + Math.cos(angle) * 10;
  document.body.style.background = `
    radial-gradient(circle at ${x}% ${y}%, #2d0d48, rgba(0, 0, 0, 1) 40%)`;
  requestAnimationFrame(animateGradient);
}
animateGradient();
