const btn = document.getElementById("magicBtn");
const finalText = document.getElementById("finalText");
let clickCount = 0;

function randomPosition() {
  const container = document.getElementById("container");
  const maxX = container.clientWidth - btn.offsetWidth;
  const maxY = container.clientHeight - btn.offsetHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

btn.addEventListener("click", () => {
  clickCount++;
  randomPosition();

  if (clickCount === 5) {
    btn.textContent = "yallah safe kliki tchoufi";
  }

  if (clickCount === 6) {
    btn.style.display = "none";
    finalText.style.display = "block";
  }
});

// Position initiale
randomPosition();
