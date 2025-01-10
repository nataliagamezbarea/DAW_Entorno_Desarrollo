// Esta función, actualizarEstadoTarea(checkbox), se encarga de actualizar el estado de una tarea (completada o no) en el servidor cuando se cambia el estado de un checkbox (por ejemplo, al marcar o desmarcar una casilla que indica si la tarea está completada). 
function actualizarEstadoTarea(checkbox) {
  const tareaId = checkbox.getAttribute('data-task-id');
  const completada = checkbox.checked;

  fetch(`/actualizar-estado/${tareaId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ completed: completada })
  })
  .then(respuesta => {
    if (respuesta.ok) {
      console.log('Estado de tarea actualizado');
    }
  })
  .catch(error => console.error('Error actualizando el estado de la tarea:', error));
}
