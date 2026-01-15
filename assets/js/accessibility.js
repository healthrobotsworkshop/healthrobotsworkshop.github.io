const root = document.documentElement;

function setFontSize(delta) {
  const current = parseFloat(localStorage.getItem("fontScale") || 1);
  const next = Math.min(Math.max(current + delta * 0.1, 0.8), 1.4);
  root.style.fontSize = `${next * 100}%`;
  localStorage.setItem("fontScale", next);
}

function toggleContrast() {
  root.classList.toggle("high-contrast");
  localStorage.setItem(
    "highContrast",
    root.classList.contains("high-contrast")
  );
}

function toggleMotion() {
  root.classList.toggle("reduced-motion");
  localStorage.setItem(
    "reducedMotion",
    root.classList.contains("reduced-motion")
  );
}

document.getElementById("a11y-toggle").onclick = () => {
  document.getElementById("a11y-panel").toggleAttribute("hidden");
};

(() => {
  const scale = localStorage.getItem("fontScale");
  if (scale) root.style.fontSize = `${scale * 100}%`;

  if (localStorage.getItem("highContrast") === "true") {
    root.classList.add("high-contrast");
  }

  if (localStorage.getItem("reducedMotion") === "true") {
    root.classList.add("reduced-motion");
  }
})();
