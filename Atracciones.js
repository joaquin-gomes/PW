addEventListener('DOMContentLoaded', inicio);

        function inicio() {
            document.getElementById('ingresar').addEventListener('click', validacion);
        }


function toggleComments(atraccionId) {
    const commentsDiv = document.getElementById(`comments${atraccionId}`);
    commentsDiv.style.display = commentsDiv.style.display === 'none' ? 'block' : 'none';
}

function validacion(){
    let u=document.getElementById('usuario').value;
    let c=document.getElementById('contrasena').value;
    
    if (u == "admin" && c =='1234') {
        window.location.href = 'MisOpiniones.html';
    }
    else {
        alert('usuario incorrecto');
    }
    
    
}

function submitComment(atraccionId) {
    const commentText = document.getElementById(`commentText${atraccionId}`).value;

 
    // Obtener el arreglo de datos existente en el localStorage (si existe)
    var arregloExistente = JSON.parse(localStorage.getItem('misopiniones')) || [];
    // Agregar el nuevo objeto al arreglo
    arregloExistente.push(commentText);
    // Guardar el arreglo actualizado en el localStorage
    localStorage.setItem('misopiniones', JSON.stringify(arregloExistente));
    
    
    // Limpia el área de comentarios después de enviar
    document.getElementById(`commentText${atraccionId}`).value = '';
    document.getElementById(`comments${atraccionId}`).style.display = 'none';


}


