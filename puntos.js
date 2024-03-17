let score2 = localStorage.getItem("score2")
  ? parseInt(localStorage.getItem("score2"))
  : 0;

function updateScore() {
  const score2Element = document.getElementById("score2");
  if (score2Element) {
    score2Element.textContent = score2 < 3 ? "0" + score2 : score2; // Formato de dos dígitos
  }
  localStorage.setItem("score2", score2);
}

document.addEventListener("DOMContentLoaded", function () {
  // Evento para el enlace "next"
  const nextLink = document.getElementById("next");
  if (nextLink) {
    nextLink.addEventListener("click", function (event) {
      // Evita que el enlace redireccione directamente (puedes ajustar esto según tus necesidades)
      event.preventDefault();

      // Incrementa el puntaje en 1
      score2 += 1;

      // Actualiza el puntaje en la página
      updateScore();

      // Agrega aquí la lógica para redireccionar a "niveles.html" si es necesario
      window.location.href = "niveles.html";
    });
  }

  // Al cargar la página, asegúrate de que el puntaje se actualice
  updateScore();
});

// Resto del código específico de la página
function showWinMessage() {
  const winMessage = document.getElementById("cuadradoEstrellas3");
  winMessage.style.display = "block";
  score2 += 3; // Incrementa la puntuación en 10 puntos cuando el jugador gana
  updateScore(); // Actualiza la puntuación en la página
}
