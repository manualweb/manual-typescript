// Spread de un array en TypeScript

namespace Spread {

  let arr1 = [2,3];
  let arr2 = [5,6];

  let numeros = [0,1, ...arr1, 4, ...arr2];

  console.log(numeros);

}
