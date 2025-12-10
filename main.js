// Génère une couleur aléatoire
function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
}

// Crée la grille
const grid = document.getElementById("grid");
for (let i = 0; i < 36; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.style.background = randomColor();
  cell.addEventListener("click", () => {
    cell.style.background = randomColor();
  });
  grid.appendChild(cell);
}

// Boutons
const geniusBtn = document.getElementById("geniusBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const resetBtn = document.getElementById("resetBtn");

geniusBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach(c => c.classList.toggle("genius"));
});

let rainbowInterval = null;
rainbowBtn.addEventListener("click", () => {
  if (rainbowInterval) {
    clearInterval(rainbowInterval);
    rainbowInterval = null;
    rainbowBtn.textContent = "Arc-en-ciel";
  } else {
    rainbowInterval = setInterval(() => {
      document.querySelectorAll(".cell").forEach(c => {
        c.style.background = randomColor();
      });
    }, 500);
    rainbowBtn.textContent = "Stop Arc-en-ciel";
  }
});

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach(c => {
    c.style.background = "#333";
    c.classList.remove("genius");
  });
});
