// La funcion de alternar Visibilidad utiliza una funcion que permite que todos los elementos que contiene display:none en el style en el css permita cambiarlos mediante el boton de Actualizar haga lo contrario es decir si un elemento se oculta se mostrará y asi con todos y cuando le de a guardar lo contrario
import { alternarVisibilidadElementos } from './alternarVisibilidadElementos.js';

function alternarVisibilidad(button) {
  const row = button.closest('tr');  
  const elements = [
    row.querySelector('.task-name'),
    row.querySelector('.task-description'),
    row.querySelector('.nombre_tarea'),
    row.querySelector('.descripcion_tarea'),
    row.querySelector('.actualizar_tarea')
  ];

  alternarVisibilidadElementos(elements);
}

document.addEventListener('DOMContentLoaded', function() {
  const botonesActualizar = document.querySelectorAll('.button-actualizar_tarea');
  botonesActualizar.forEach(button => {
    button.addEventListener('click', function(event) {
      alternarVisibilidad(event.target);  
    });
  });
});