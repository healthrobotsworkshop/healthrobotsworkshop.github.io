const root = document.documentElement;

function setFontSize(direction) {
  // Store scale as a PERCENT so it’s easier to reason about
  const MIN = 87.5;   // 14px equivalent
  const MAX = 125;    // 20px equivalent
  const STEP = 6.25;  // ~1px step

  const current = parseFloat(localStorage.getItem("fontScale") || "100");
  const next = Math.max(MIN, Math.min(MAX, current + direction * STEP));

  root.style.fontSize = `${next}%`;
  localStorage.setItem("fontScale", String(next));
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

// document.getElementById("a11y-toggle").onclick = () => {
//   document.getElementById("a11y-panel").toggleAttribute("hidden");
// };
document.getElementById("a11y-toggle").onclick = () => {
  const panel = document.getElementById("a11y-panel");
  const isHidden = panel.toggleAttribute("hidden"); // returns true if now hidden
  document.getElementById("a11y-toggle").setAttribute("aria-expanded", String(!isHidden));
};


(() => {
  const scale = localStorage.getItem("fontScale");
  if (scale) root.style.fontSize = `${scale}%`;

  if (localStorage.getItem("highContrast") === "true") {
    root.classList.add("high-contrast");
  }

  if (localStorage.getItem("reducedMotion") === "true") {
    root.classList.add("reduced-motion");
  }
})();

function resetFontSize() {
  root.style.fontSize = "100%";
  localStorage.setItem("fontScale", "100");
}

