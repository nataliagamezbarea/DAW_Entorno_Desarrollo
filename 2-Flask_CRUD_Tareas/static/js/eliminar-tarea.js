// Utiliza la funcion para utilizar pop up si el usuario confirma va a permitir eliminar el elemento
import { mostrarAlertaDeConfirmacion } from './sweetalert2.js';  

document.querySelectorAll('.button-eliminar_tarea').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();  
    
    const tareaId = button.getAttribute('data-task-id');
    console.log('ID de tarea:', tareaId); 

    if (tareaId) {
      mostrarAlertaDeConfirmacion(
        '¿Estás seguro?',                          
        '¡No podrás revertir esto!',              
        () => {                                   
          fetch(`/eliminar/${tareaId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            if (response.ok) {
              Swal.fire(
                'Eliminada',
                'La tarea ha sido eliminada correctamente.',
                'success'
              ).then(() => {
                const filaTarea = button.closest('tr');
                filaTarea.remove();
              });
            } else {
              Swal.fire(
                'Error',
                'Hubo un problema al eliminar la tarea.',
                'error'
              );
            }
          })
          .catch(error => {
            Swal.fire(
              'Error',
              'Error de red: No se pudo eliminar la tarea.',
              'error'
            );
          });
        },
        'warning',                                 
        'Sí, eliminarla',                          
        'Cancelar',                                
        'La tarea ha sido eliminada correctamente.' 
      );
    } else {
      console.log("El ID de la tarea no se encuentra.");
    }
  });
});
