addEventListener('DOMContentLoaded', inicio);

        function inicio() {
            var consultas = JSON.parse(localStorage.getItem('arregloDatos')) || [];

    // Obtén la referencia del tbody
            var tbody = document.getElementById('tabla-consultas');

    // Llena la tabla con los datos
    consultas.forEach(function(consulta) {
      var fila = document.createElement('tr');

      var tdNombre = document.createElement('td');
      tdNombre.textContent = consulta.nombre;
      fila.appendChild(tdNombre);

      var tdMail = document.createElement('td');
      tdMail.textContent = consulta.mail;
      fila.appendChild(tdMail);

      var tdTexto = document.createElement('td');
      tdTexto.textContent = consulta.texto;
      fila.appendChild(tdTexto);

      tbody.appendChild(fila);
    });
        }
