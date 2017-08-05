// Demostración de ámbitos (scope) de variables definidas mediant let.
// Vemos que let solo tiene como ámbito su bloque

function mifuncion(validar:boolean) {

  let a = 1;

  if (validar) {
    // Se puede acceder a 'a' ya que es parte del bloque.
    let b = a + 1;
  }

  // Ya no hay acceso a la variable 'b'
  return b;
}
