// Ejemplos de como saltarnos los excesos de validación de los interfaces.

namespace ExcesoValidacion {

  // 1. Index Signature
  interface Cuadrado {
    lado: number;
    color?: string;
    [propName:string]: any;
  }

  function calcularAreaCuadrado(datos:Cuadrado): number {
    let a = datos.lado*2;
    return a;
  }

  let a1 = calcularAreaCuadrado({lado:2,colour:'red'});
  console.log(a1);

  // 2. TypeAssertion
  // 3. Asignando a otra variable

  interface Circulo {
    radio: number;
    color?: string;
  }

  function calcularAreaCirculo(datos:Circulo): number {
    let a = 2*Math.PI*datos.radio;
    return a;
  }

  // TypeAssertion
  let a2 = calcularAreaCirculo({radio:2,colour:'red'} as Circulo);
  console.log(a2);

  // Asignando a otra variable
  let c1 = {radio:2,colour:'red'};
  let a3 = calcularAreaCirculo(c1);
  console.log(a3);

}
