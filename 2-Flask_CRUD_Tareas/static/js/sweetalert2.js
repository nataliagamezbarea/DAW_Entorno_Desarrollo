// Funcion reutilizable segun lo que introduzca el usuario muestre diferentes mensajes o incluso diferentes alertas , pensado para utilizar más de una vez de manera simple
export function mostrarAlertaDeConfirmacion(titulo, texto, enConfirmar, icono = 'warning', textoBotonConfirmar = 'Sí, eliminar!', textoBotonCancelar = 'Cancelar', mensajeExito = 'Tu tarea ha sido eliminada.') {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: icono,
      showCancelButton: true,
      confirmButtonText: textoBotonConfirmar,
      cancelButtonText: textoBotonCancelar
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        enConfirmar();
        Swal.fire(mensajeExito, '', 'success');
      }
    });
  }
  