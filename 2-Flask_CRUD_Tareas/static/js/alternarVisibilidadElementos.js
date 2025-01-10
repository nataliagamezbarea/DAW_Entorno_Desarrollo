// Permite al usuario que mediante el argumento te pase el elemeento que desea retirar display:none (para que se pueda ver mediante una ternaria si no contiene none se añadirá none en los estilos)
export function alternarVisibilidadElementos(elements) {
  elements.forEach(element => {
    element.style.display = element.style.display === 'none' ? '' : 'none';
  });
}