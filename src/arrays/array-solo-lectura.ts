// Ejemplo de un array de solo lectura

namespace ArraySoloLectura {

  let miarray:ReadonlyArray<number> = [1,2,3,4,5,6];

  // myarray[1] = 58;  // No se puede modificar el contenido del array
  // myarray.push(4);  // No existe el método .push

  // Si que podemos leer
  console.log(miarray[2]);

  // Podríamos acceder a los valores de solo lectura realizando un type assertion
  // sobre el array de solo lectura.
  let miarray2 = <number[]>miarray;
  miarray2[1] = 5;

}
