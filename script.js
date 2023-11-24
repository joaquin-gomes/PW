addEventListener('DOMContentLoaded', inicio);

        function inicio() {
            document.getElementById('enviar').addEventListener('click', presion1);
            document.getElementById('ingresar').addEventListener('click',validacion);
        }

        function validacion(){
            let u=document.getElementById('usuario').value;
            let c=document.getElementById('contrasena').value;
            
            if (u == "admin" && c =='1234') {
                window.location.href = 'MisConsultas.html';
            }
            else {
                alert('usuario incorrecto');
            }
            
            

        }


        function presion1() {
            let n=document.getElementById('nombre').value;
            
            let m=document.getElementById('mail').value;

            let c=document.getElementById('consulta').value;
            var consulta={
                nombre: n,
                mail: m,
                texto: c
            }
            // Obtener el arreglo de datos existente en el localStorage (si existe)
            var arregloExistente = JSON.parse(localStorage.getItem('arregloDatos')) || [];

            // Agregar el nuevo objeto al arreglo
            arregloExistente.push(consulta);

            // Guardar el arreglo actualizado en el localStorage
            localStorage.setItem('arregloDatos', JSON.stringify(arregloExistente));

            document.getElementById('nombre').value= "";
 
            document.getElementById('mail').value= "";

            document.getElementById('consulta').value;
            
        }
 
 function mostrarMensajeBienvenida() {
    alert('¡Bienvenido a Explorando Buenos Aires! ¡Esperamos que disfrutes de tu visita!');
  }

  function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    reloj.textContent = `Hora: ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}, Fecha: ${ahora.toLocaleDateString()}`;
  }
  
  setInterval(actualizarReloj, 1000);



  