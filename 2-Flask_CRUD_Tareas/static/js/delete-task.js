document.querySelectorAll('.delete-task').forEach(function (deleteButton) {
deleteButton.addEventListener('click', function (event) {
  event.preventDefault(); 
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'No podrás revertir esta acción.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Eliminado!', 'Tu tarea ha sido eliminada.', 'success');
      
    }
  });
});
});

