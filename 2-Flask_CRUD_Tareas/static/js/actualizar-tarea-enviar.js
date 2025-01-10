// Selecciona todos los botones de actualizacion añade un evento clic para los botones obteniene la fila en la que está el boton , el id de la tareaId es muy importante porque lo he considerado un valor único para que pueda indentificar independientemente a cada tarea.JSON.

// Se obtienen los valores ingresados en los campos de texto correspondientes al nombre y descripción de la tarea. Se busca dentro de la fila los elementos con las clases .nombre_tarea y .descripcion_tarea y se extrae su valor actual (lo que el usuario haya ingresado).

document.querySelectorAll(".boton-actualizar").forEach(function (botonActualizar) {
  botonActualizar.addEventListener("click", function (evento) {
    const filaTarea = botonActualizar.closest("tr");
    const tareaId = filaTarea.querySelector(".eliminar_tarea").getAttribute("data-task-id");
    const nombreTareaInput = filaTarea.querySelector(".nombre_tarea").value;  
    const descripcionTareaInput = filaTarea.querySelector(".descripcion_tarea").value; 
    
    // Se crea un objeto data con los datos obtenidos de los campos de texto: el nombre y la descripción de la tarea.
    const data = {
      task_name: nombreTareaInput,
      task_description: descripcionTareaInput
    };

    // Se realiza una solicitud fetch para actualizar la tarea en el servidor. La URL de la solicitud es /actualizar/${tareaId}, donde ${tareaId} es el ID de la tarea.No lo he añadido a un formulario para aprender a realizarlo en el javascript en el segundo ejemplo lo realizo directamente.

    fetch(`/actualizar/${tareaId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        console.log('Tarea actualizada con éxito');
      } else {
        console.error('Hubo un error al actualizar la tarea');
      }
    })
    .catch(error => {
      console.error('Error de red:', error);
    });
  });
});
