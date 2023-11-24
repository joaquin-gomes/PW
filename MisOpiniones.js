addEventListener('DOMContentLoaded', inicio);

        function inicio() {
            var consultas = JSON.parse(localStorage.getItem('misopiniones')) || [];


    // Obtiene la referencia del tbody
            var tbody = document.getElementById('tabla-consultas');

    // Llena la tabla con los datos
    consultas.forEach(function(consulta) {
      var fila = document.createElement('tr');

      var tdNombre = document.createElement('td');
      tdNombre.textContent = consulta;
      fila.appendChild(tdNombre);



      tbody.appendChild(fila);
    });
        }