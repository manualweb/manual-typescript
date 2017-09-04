// Definir un interface que sea una función

interface CalculoAreaTriangulo {
  (base:number, altura:number):number;
}


let miCalculo: CalculoAreaTriangulo;

miCalculo = function(b:number,a:number) {
  return (b*a)/2;
}

console.log(miCalculo(2,2));
