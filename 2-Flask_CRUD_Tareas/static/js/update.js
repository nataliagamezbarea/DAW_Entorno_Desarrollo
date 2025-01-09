document.querySelectorAll('.update-task').forEach(function (updateButton) {
    updateButton.addEventListener('click', function (event) {
      event.preventDefault(); 
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres editar esta tarea?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, editar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
    });
  });