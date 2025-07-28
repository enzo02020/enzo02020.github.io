function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function toggleStats() {
  const stats = document.getElementById("stats");
  stats.style.display = stats.style.display === "none" ? "block" : "none";
}
function toggleDescripcion(elemento) {
  const desc = elemento.querySelector(".descripcion");
  if (desc.style.display === "block") {
    desc.style.display = "none";
  } else {
    desc.style.display = "block";
  }
}
document.getElementById("toggleThemeBtn").addEventListener("click", function() {
  // Alterna la clase 'dark-mode' en el body
  document.body.classList.toggle("dark-mode");
});

