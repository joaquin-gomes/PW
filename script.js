
  function mostrarMensajeBienvenida() {
    alert('¡Bienvenido a Explorando Buenos Aires! ¡Esperamos que disfrutes de tu visita!');
  }

  function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    reloj.textContent = `Hora: ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}, Fecha: ${ahora.toLocaleDateString()}`;
  }
  
  setInterval(actualizarReloj, 1000);

  function toggleComments(atraccionId) {
    const commentsDiv = document.getElementById(`comments${atraccionId}`);
    commentsDiv.style.display = commentsDiv.style.display === 'none' ? 'block' : 'none';
}

function submitComment(atraccionId) {
    const commentText = document.getElementById(`commentText${atraccionId}`).value;
    console.log(`Comentario para la atracción ${atraccionId}: ${commentText}`);
    
    // Limpia el área de comentarios después de enviar
    document.getElementById(`commentText${atraccionId}`).value = '';
    document.getElementById(`comments${atraccionId}`).style.display = 'none';
}



  